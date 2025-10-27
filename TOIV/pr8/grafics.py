import json
import matplotlib.pyplot as plt
import pandas as pd


with open('data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

df = pd.DataFrame(data)

df['Sound Level'] = pd.to_numeric(df['Sound Level'], errors='coerce')
df['Illuminance'] = pd.to_numeric(df['Illuminance'], errors='coerce')
df['Voltage'] = pd.to_numeric(df['Voltage'], errors='coerce')
df['time'] = pd.to_datetime(df['time'])

df = df.dropna()

# Создание фигуры с тремя subplots
fig, axes = plt.subplots(1, 3, figsize=(18, 5))
fig.suptitle('Визуализация данных датчиков', fontsize=16, fontweight='bold')

# 1. СТОЛБИКОВАЯ ДИАГРАММА (Гистограмма) - для Sound Level
axes[0].hist(df['Sound Level'], bins=10, alpha=0.7, color='skyblue', edgecolor='black')
axes[0].set_title('Гистограмма уровня звука', fontweight='bold')
axes[0].set_xlabel('Уровень звука (dB)')
axes[0].set_ylabel('Частота')
axes[0].grid(True, alpha=0.3)

# 2. ЛИНЕЙНЫЙ ГРАФИК - для Illuminance по времени
axes[1].plot(df['time'], df['Illuminance'], marker='o', linewidth=2, markersize=4, color='green')
axes[1].set_title('Изменение освещенности во времени', fontweight='bold')
axes[1].set_xlabel('Время')
axes[1].set_ylabel('Освещенность (lux)')
axes[1].tick_params(axis='x', rotation=45)
axes[1].grid(True, alpha=0.3)

# 3. КРУГОВАЯ ДИАГРАММА - для распределения Voltage
voltage_bins = [0, 2, 3, 4, 5]
voltage_labels = ['0-2V', '2-3V', '3-4V', '4-5V']
df['Voltage_Category'] = pd.cut(df['Voltage'], bins=voltage_bins, labels=voltage_labels)
voltage_counts = df['Voltage_Category'].value_counts()

axes[2].pie(voltage_counts.values, labels=voltage_counts.index, autopct='%1.1f%%', startangle=90, colors=['#ff9999', '#66b3ff', '#99ff99', '#ffcc99'])
axes[2].set_title('Распределение напряжения', fontweight='bold')

plt.tight_layout()

plt.savefig('sensors_visualization.png', dpi=300, bbox_inches='tight')

plt.show()