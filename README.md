
# Churn Insight API

API de predicción de churn (cancelación de clientes) desarrollada en **Spring Boot** para el hackathon.

## 🚀 Cómo ejecutar el proyecto

1. Clonar el repositorio:
   bash
   git clone https://github.com/tuusuario/hackaton-churninsight.git
   cd hackaton-churninsight

2. Compilar y correr:
   bash
   mvn clean install
   mvn spring-boot:run

3. El servidor estará disponible en:
   http://localhost:8080
   

## 📌 Endpoint principal

### POST `/api/predict`

**Descripción:**  
Recibe información de un cliente y devuelve una predicción sobre su continuidad.

**Request (JSON):**
json
{
  "tiempo_contrato_meses": 12,
  "retrasos_pago": 2,
  "uso_mensual": 14.5,
  "plan": "Premium"
}


**Response (JSON):**
json
{
  "prevision": "Va a continuar",
  "probabilidad": 0.5
}



## 🧪 Pruebas en Postman

1. Abrir Postman.  
2. Crear una nueva **Request**:  
   - Método: `POST`  
   - URL: `http://localhost:8080/api/predict`  
   - Headers:  
     - `Content-Type: application/json`  
   - Body → raw → JSON:
     json
     {
       "tiempo_contrato_meses": 12,
       "retrasos_pago": 2,
       "uso_mensual": 14.5,
       "plan": "Premium"
     }
3. Presionar **Send** y validar la respuesta.


## 📂 Estructura del proyecto
src/main/java/com/churninsight
├── ChurnInsightApplication.java   # Clase principal
├── controller
│   └── PredictionController.java  # Controlador REST
├── dto
│   ├── ClientRequest.java         # DTO de entrada
│   └── PrediccionResponse.java    # DTO de salida
└── service
    └── PredictionService.java     # Lógica de predicción
