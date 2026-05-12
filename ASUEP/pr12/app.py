from flask import Flask, render_template, request, jsonify
import psycopg2
import json
from datetime import datetime

app = Flask(__name__)

# ==============================================================================
# КОНФИГУРАЦИЯ БАЗЫ ДАННЫХ (СТРОГО КАК В ЗАДАНИИ)
# ==============================================================================
DB_CONFIG = {
    "dbname": "bottling service",
    "user": "postgres",
    "password": "1234",
    "host": "localhost",
    "port": 5432
}


def get_db_connection():
    """Устанавливает соединение с PostgreSQL."""
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        return conn
    except Exception as e:
        print(f"Ошибка подключения к БД: {e}")
        return None


@app.route('/')
def index():
    """Отдает главную страницу интерфейса."""
    return render_template('index.html')


@app.route('/api/recipes', methods=['GET'])
def get_recipes():
    """Получение списка всех рецептур из БД."""
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "DB Connection Failed"}), 500

    try:
        cur = conn.cursor()
        cur.execute("""
            SELECT regulation_id, regulation_name, process_type, version, 
                   process_params, is_active, created_at 
            FROM process_regulations 
            ORDER BY regulation_id DESC
        """)
        rows = cur.fetchall()

        recipes = []
        for row in rows:
            recipes.append({
                "id": row[0],
                "name": row[1],
                "type": row[2],
                "version": row[3],
                "params": row[4],
                "is_active": row[5],
                "created_at": row[6].strftime('%Y-%m-%d %H:%M:%S') if row[6] else '-'
            })

        cur.close()
        conn.close()
        return jsonify(recipes)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/api/recipes', methods=['POST'])
def add_recipe():
    """Добавление новой рецептуры в БД."""
    data = request.json
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "DB Connection Failed"}), 500

    try:
        cur = conn.cursor()

        params_json = json.dumps({
            "volume": data.get('volume'),
            "temp": data.get('temp'),
            "speed": data.get('speed')
        })

        cur.execute("""
            INSERT INTO process_regulations 
            (technologist_id, regulation_name, process_type, version, process_params, is_active, created_at, updated_at)
            VALUES 
            (%s, %s, %s, %s, %s, %s, %s, %s)
            RETURNING regulation_id
        """, (
            1,
            data['name'],
            data['type'],
            data['version'],
            params_json,
            True,
            datetime.now(),
            datetime.now()
        ))

        new_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()

        return jsonify({"status": "success", "message": "Рецептура успешно добавлена!"})

    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 500


@app.route('/api/recipes/<int:recipe_id>', methods=['PUT'])
def update_recipe(recipe_id):
    """Обновление существующей рецептуры."""
    data = request.json
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "DB Connection Failed"}), 500

    try:
        cur = conn.cursor()

        params_json = json.dumps({
            "volume": data.get('volume'),
            "temp": data.get('temp'),
            "speed": data.get('speed')
        })

        cur.execute("""
            UPDATE process_regulations 
            SET regulation_name = %s, 
                process_type = %s, 
                version = %s, 
                process_params = %s,
                updated_at = %s
            WHERE regulation_id = %s
        """, (
            data['name'],
            data['type'],
            data['version'],
            params_json,
            datetime.now(),
            recipe_id
        ))

        conn.commit()
        cur.close()
        conn.close()

        return jsonify({"status": "success", "message": "Рецептура обновлена!"})

    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 500


@app.route('/api/recipes/<int:recipe_id>', methods=['DELETE'])
def delete_recipe(recipe_id):
    """Удаление рецептуры."""
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "DB Connection Failed"}), 500

    try:
        cur = conn.cursor()
        cur.execute("DELETE FROM process_regulations WHERE regulation_id = %s", (recipe_id,))
        conn.commit()
        cur.close()
        conn.close()
        return jsonify({"status": "success", "message": "Рецептура удалена."})
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 500


@app.route('/api/recipes/<int:recipe_id>/toggle', methods=['POST'])
def toggle_recipe(recipe_id):
    """Переключение статуса активности."""
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "DB Connection Failed"}), 500

    try:
        cur = conn.cursor()
        cur.execute("UPDATE process_regulations SET is_active = NOT is_active WHERE regulation_id = %s", (recipe_id,))
        conn.commit()
        cur.close()
        conn.close()
        return jsonify({"status": "success"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)