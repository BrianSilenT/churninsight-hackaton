# Backend – ChurnInsight Hackathon

## 🚀 Descripción
Este backend está desarrollado en **Spring Boot** y expone servicios REST para la predicción de churn de clientes.  
Incluye integración con modelos ONNX, separación de DTOs y controladores con manejo robusto de errores.



## 📂 Estructura principal
- `src/main/java/.../controller` → Controladores REST (`PredictionController`, `ClientController`)  
- `src/main/java/.../service` → Lógica de negocio (`PredictionService`)  
- `src/main/resources` → Configuración y modelos ONNX  
- `src/test/java/...` → Pruebas unitarias e integración  



## ⚙️ Endpoints principales
### 🔹 PredictionController
- `POST /api/predict`  
  **Entrada:** JSON con datos del cliente.  
  **Salida:** Predicción de churn (`true/false`) y score de probabilidad.  
  **Errores manejados:**  
  - `400 Bad Request` → Datos incompletos o inválidos.  
  - `500 Internal Server Error` → Error al cargar modelo o procesar predicción.  

### 🔹 ClientController
- `GET /api/clients` → Lista todos los clientes disponibles.  
- `GET /api/clients/{id}` → Obtiene detalle de un cliente específico.  



## 🧪 Pruebas en Postman
Durante la validación se realizaron pruebas de integración con **Postman**:

### 1. Predicción de churn
- **Endpoint:** `POST /api/predict`  
- **Body (JSON ejemplo):**
  ```json
  {
    "age": 35,
    "tenure": 5,
    "balance": 25000,
    "products": 2,
    "hasCreditCard": true,
    "isActiveMember": true,
    "estimatedSalary": 50000
  }
  
- **Resultado esperado:**  
  json
  {
    "churn": false,
    "score": 0.23
  }
  

### 2. Listado de clientes
- **Endpoint:** `GET /api/clients`  
- **Resultado esperado:**  
  json
  [
    {
      "id": 1,
      "name": "Juan Pérez",
      "age": 30
    },
    {
      "id": 2,
      "name": "María López",
      "age": 42
    }
  ]
  

### 3. Detalle de cliente
- **Endpoint:** `GET /api/clients/1`  
- **Resultado esperado:**  
  json
  {
    "id": 1,
    "name": "Juan Pérez",
    "age": 30,
    "tenure": 3,
    "balance": 15000
  }
  

## ✅ Checklist de validación
- Endpoints responden con códigos HTTP correctos (`200`, `400`, `500`).  
- Predicciones reproducibles con el modelo ONNX cargado desde `resources`.  
- Manejo de errores probado en Postman con entradas inválidas.  
- Documentación de pruebas incluida en este README.  

