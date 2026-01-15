# 🚀 ChurnInsight - Backend API

Servicio de predicción de abandono de clientes utilizando Spring Boot y ONNX Runtime (Machine Learning de alto rendimiento).

## 🛠️ Tecnologías

* Java 17 & Spring Boot 3.2.2
* ONNX Runtime: Inferencia del modelo de Data Science.
* Maven: Gestión de dependencias.
* Lombok: Reducción de código boilerplate.

## 📦 Instalación y Ejecución

1. Asegúrate de tener el archivo `modelo_churn_final.onnx` y `customer_churn_dataset.csv` en `src/main/resources/`.
2. Ejecuta el servidor:
```bash
./mvnw spring-boot:run
```

3. La API estará disponible en `http://localhost:8080`.

## 🛣️ Endpoints Principales

* `GET /predict/client/{id}`: Devuelve información completa del cliente y su predicción (Ideal para el Frontend).
* `POST /predict`: Recibe un JSON y devuelve la predicción (Cumplimiento de contrato MVP).
* `GET /api/stats`: Estadísticas generales del dataset cargado.

## 🧪 Casos de Prueba (Demo)

1. Cliente en Riesgo (ID 1): `GET http://localhost:8080/predict/client/1`
2. Cliente Leal (ID 3): `GET http://localhost:8080/predict/client/3`