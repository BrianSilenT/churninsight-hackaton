# 🚀 Predicción de Churn de Clientes con Machine Learning

Este repositorio contiene la solución de Data Science para la detección preventiva de fuga de clientes. El modelo ha sido entrenado para identificar patrones de comportamiento y alertar al equipo de negocio antes de que un cliente abandone el servicio.

## 📊 Resultados del Modelo

El modelo final utiliza un algoritmo de Random Forest, logrando un equilibrio entre precisión y capacidad de detección:

- **Recall (Detección de Fuga)**: 90% (Detectamos a 9 de cada 10 clientes en riesgo)
- **Precisión General**: 78.26%
- **Estado**: Modelo optimizado sin Data Leakage (eliminada la variable `Payment Delay`)

## 🧠 Ingeniería de Variables (Feature Engineering)

No solo usamos datos crudos. Creamos métricas inteligentes para dar más contexto al modelo:

- **`Support_Urgency`**: Relación entre llamadas a soporte y antigüedad
- **`Monthly_Spend`**: Gasto promedio mensual por cliente

## 🛠️ Stack Tecnológico

- **Lenguaje**: Python 3.x
- **Librerías**: Pandas, Scikit-learn, Seaborn
- **Interoperabilidad**: ONNX (para integración nativa con el Backend en Java)

## 🛠️ Instalación y Configuración (Guía paso a paso)

Si deseas ejecutar este proyecto en tu máquina local, sigue estos pasos:

### 1. Requisitos Previos

Asegúrate de tener instalado Python 3.8 o superior. Puedes descargarlo desde [python.org](https://python.org).

### 2. Clonar el repositorio

Abre una terminal y ejecuta:
```bash
git clone https://github.com/BrianSilenT/churninsight-hackaton/tree/main/data-science
cd churninsight-hackaton
```

### 3. Crear un entorno virtual (Recomendado)

Esto evita conflictos con otras librerías en tu computadora:
```bash
# En Windows:
python -m venv venv
venv\Scripts\activate

# En Mac/Linux:
python3 -m venv venv
source venv/bin/activate
```

### 4. Instalar las dependencias

Hemos preparado una lista con todo lo necesario para procesar los datos, entrenar el modelo y exportar a ONNX:
```bash
pip install pandas numpy matplotlib seaborn scikit-learn skl2onnx onnxruntime jupyter
```

## 🚀 Cómo usar el proyecto

### Para Data Scientists (Notebooks)

Para ver el análisis exploratorio (EDA) y el entrenamiento del modelo, inicia Jupyter:
```bash
jupyter notebook
```

Abre el archivo dentro de la carpeta `notebooks/` y ejecuta las celdas en orden.
## 🔌 Contrato de Integración

El modelo espera un vector de 11 características en el siguiente orden:

1. `Age`
2. `Gender`
3. `Tenure`
4. `Usage Frequency`
5. `Support Calls`
6. `Subscription Type`
7. `Contract Length`
8. `Total Spend`
9. `Last Interaction`
10. `Support_Urgency`
11. `Monthly_Spend`

## 📂 Estructura del Repositorio

- `/notebooks`: Jupyter Notebooks con el EDA y entrenamiento y el archivo `modelo_churn_final.onnx` listo para producción
- `/data`: Datasets utilizados (procesados y limpios)

