# 📦 Backend – ChurnInsight Hackathon

Este módulo implementa el **backend en Spring Boot** para el proyecto *ChurnInsight*.  
Su función principal es exponer un servicio REST que recibe datos de clientes y devuelve una predicción de churn.

---

## 🚀 Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/BrianSilenT/churninsight-hackaton.git
   cd churninsight-hackaton/backend

   📂 Estructura del proyect

   backend/
 └── src/
      ├── main/java/churnInsightApplication/
      │    ├── controller/   → Controladores REST
      │    ├── service/      → Lógica de negocio (PredictionService)
      │    └── dto/          → Objetos de transferencia (ClientRequest, PrediccionResponse)
      └── test/java/churnInsightApplication/
           └── service/      → Pruebas unitarias

           🔗 Endpoints disponibles1. Predicción de churn- URL: /api/predict
- Método: POST
- Headers:
Content-Type: application/json

- Request Body:

{
  "tiempo_contrato_meses": 12,
  "retrasos_pago": 2,
  "uso_mensual": 14.5,
  "plan": "Premium"
}

- Response (actualmente respuesta fija)
{
  "prevision": "Va a continuar",
  "probabilidad": 0.5
}


👉 Nota: por ahora el servicio devuelve siempre "va a continuar" con probabilidad 0.5
Más adelante se integrará el modelo ONNX para predicciones reales.

2. Health Check
• 	URL: 
• 	Método: 
• 	Response:

{
  "status": "UP"
}

🧪 Pruebas
Con Postman
1. 	Levantar el backend ().
2. 	Enviar un  a  con el JSON de ejemplo.
3. 	Validar que la respuesta sea la esperada.
4. 	Verificar el estado del servidor con


Con JUnit
(Cpdigo implementado en la nueva carpeta)

