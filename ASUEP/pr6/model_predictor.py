import numpy as np
from sklearn.ensemble import IsolationForest


class PredictiveModel:
    def __init__(self):
        self.model = IsolationForest(contamination=0.1, random_state=42)

    def analyze(self, df):
        """
        Анализирует данные датчиков.
        Если значение выходит за статистические пределы -> высокий риск.
        """
        if df.empty:
            return {}

        results = {}
        for sensor_type, group in df.groupby('sensor_type'):
            values = group[['current_value']].values

            mean_val = np.mean(values)
            std_val = np.std(values)

            for _, row in group.iterrows():
                sid = row['sensor_id']
                val = row['current_value']

                if std_val > 0 and abs(val - mean_val) > 2 * std_val:
                    results[sid] = 'HIGH'
                elif std_val > 0 and abs(val - mean_val) > 1.5 * std_val:
                    results[sid] = 'MEDIUM'
                else:
                    results[sid] = 'LOW'

        return results