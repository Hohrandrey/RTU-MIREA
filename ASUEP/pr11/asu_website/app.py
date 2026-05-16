from flask import Flask, render_template, url_for

app = Flask(__name__)

products_data = [
    {
        "name": "Cola Classic 0.5L",
        "type": "Газированный напиток",
        "desc": "Классический вкус с точностью дозирования ±0.25%.",
        "image": "cola.jpg"
    },
    {
        "name": "Orange Juice Fresh 1.0L",
        "type": "Негазированный сок",
        "desc": "100% натуральный сок.",
        "image": "juice.jpg"
    },
    {
        "name": "Mineral Water Pure 1.5L",
        "type": "Минеральная вода",
        "desc": "Артезианская вода высшей категории.",
        "image": "water.jpg"
    }
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/tech')
def tech():
    return render_template('tech.html')

@app.route('/products')
def products():
    return render_template('products.html', products=products_data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)