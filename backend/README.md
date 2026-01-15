# 📌 Backend – Churn Insight

## 🚀 Descripción
Este módulo corresponde al **backend del proyecto Churn Insight**, desarrollado en **Spring Boot**.  
Su objetivo es proveer servicios REST para:
- Listar clientes (`/clients`).
- Obtener predicciones de cancelación (`/predict/{dni}`).
- Calcular variables derivadas para análisis de churn.


## 📂 Estructura del proyecto
backend/
 ├── src/main/java/churnInsightApplication/
 │    ├── controller/       # Controladores REST
 │    ├── service/          # Lógica de negocio
 │    ├── dto/              # Data Transfer Objects (ClientData, ClientPredictionResponse)
 │    ├── model/            # Modelos internos
 │    └── config/           # Configuración de Spring Boot
 ├── src/test/java/         # Pruebas unitarias e integración
 ├── pom.xml                # Dependencias Maven
 └── README.md              # Documentación del módulo


## ⚙️ Requisitos previos
- **Java 17+**
- **Maven 3.8+**
- **Spring Boot 3.x**
- (Opcional) Postman o cURL para pruebas de endpoints


## ▶️ Ejecución local
1. Clonar el monorepo:
   bash
   git clone https://github.com/tu-org/churn-insight.git
   cd churn-insight/backend
   
2. Compilar y ejecutar:
   bash
   mvn clean install
   mvn spring-boot:run
   
3. El backend estará disponible en:
   
   http://localhost:8080




## 📡 Endpoints principales

### `GET /clients`
- **Descripción**: Devuelve la lista de clientes disponibles.
- **Respuesta ejemplo**:
  json
  [
    {
      "dni": "12345678",
      "nombreUsuario": "Juan Pérez",
      "planType": "Premium",
      "tiempoContrato": "12 meses"
    }
  ]
  

### `GET /predict/{dni}`
- **Descripción**: Devuelve la predicción de cancelación para un cliente.
- **Respuesta ejemplo**:
  json
  {
    "dni": "12345678",
    "nombreUsuario": "Juan Pérez",
    "vaCancelar": true,
    "probabilidad": 0.87
  }



## 🧪 Pruebas
- Ejecutar pruebas unitarias:
  bash
  mvn test
  
- Validar endpoints con **Postman** o **cURL**:
  bash
  curl http://localhost:8080/clients
  curl http://localhost:8080/predict/12345678
  



## 📌 Roadmap Backend
- [x] Definición de DTO `ClientData`.
- [x] Implementación de variables derivadas (`supportUrgency`, `monthlySpend`).
- [x] Endpoints básicos (`/clients`, `/predict/{dni}`).
- [ ] Integración con frontend vía proxy.
- [ ] Documentación de despliegue en producción.

---
