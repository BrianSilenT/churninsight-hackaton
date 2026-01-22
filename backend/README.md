# Backend – Churn Insight ✅

**Descripción breve**

API REST robusta para el análisis de churn en clientes, desarrollada con **Spring Boot**. Procesa datos de clientes, calcula predicciones usando un modelo ONNX y proporciona estadísticas clave. Arquitectura limpia con separación de capas (controladores, servicios, DTOs) para escalabilidad y mantenibilidad.

---

## 🎯 Objetivos

- Proveer endpoints REST para consultar clientes y predicciones de churn.
- Integrar un modelo de Machine Learning (ONNX) para inferencias en tiempo real.
- Calcular métricas derivadas y estadísticas del dataset.
- Servir como backend confiable para el frontend y posibles integraciones futuras.

---

## ✨ Características principales

- **Inferencia con ONNX:** Modelo Random Forest exportado para predicciones eficientes sin Python.
- **Gestión de Datos:** Carga y procesamiento de datos desde CSV con variables derivadas.
- **Endpoints REST:** Consultas de clientes, predicciones individuales y estadísticas globales.
- **Base de Datos Embebida:** H2 para desarrollo y pruebas.
- **Validación y Configuración:** Spring Boot con Actuator para monitoreo.

---

## 🧭 Estructura del proyecto (resumen)

```text
backend/
  ├─ pom.xml                # Dependencias y configuración Maven
  ├─ src/main/java/churnInsightApplication/
  │    ├── ChurnInsightApplication.java  # Clase principal
  │    ├── controller/       # Endpoints REST (ClientController, PredictionController, StatsController)
  │    ├── service/          # Lógica de negocio (ClientService, PredictionService)
  │    ├── dto/              # Objetos de transferencia (ClientData, etc.)
  │    ├── repository/       # Acceso a datos (si aplica)
  │    └── config/           # Configuraciones (GlobalExceptionHandler, WebConfig)
  ├─ src/main/resources/
  │    ├── application.properties  # Configuración de Spring
  │    ├── customer_churn_dataset.csv  # Dataset de clientes
  │    └── modelo_churn_final.onnx  # Modelo ONNX
  ├─ src/test/java/         # Pruebas unitarias
  └─ target/                # Archivos compilados (generado)
```

**Archivos clave:**
- `ChurnInsightApplication.java`: Punto de entrada de Spring Boot.
- `controller/`: Endpoints principales para API.
- `service/`: Lógica de predicciones y carga de datos.
- `application.properties`: Configuración de puerto, base de datos, etc.

---

## 🛠️ Tecnologías

- Core: Java 17 + Spring Boot 3.2.2 + Maven
- ML: ONNX Runtime (inferencia de modelos)
- Base de Datos: H2 (embebida)
- Utilidades: Lombok (anotaciones), Actuator (monitoreo)

---

## Requisitos Previos

Antes de ejecutar el proyecto en local es necesario contar con lo siguiente:

- Java JDK: versión 17+
- Maven: versión 3.8+
- IDE Recomendado: IntelliJ IDEA o VS Code con Extension Pack for Java

---

## 🚀 Instalación y uso

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/churninsight-hackaton.git
cd churninsight-hackaton/backend
```

2. Instala dependencias y compila:

```bash
mvn clean install
```

3. Ejecuta en desarrollo:

```bash
mvn spring-boot:run
# El backend estará disponible en http://localhost:8080
```

4. Verifica el estado:

```bash
curl http://localhost:8080/actuator/health
# Debe responder {"status":"UP"}
```

5. Pruebas:

```bash
mvn test
```

---

## 📡 Endpoints principales

### `GET /api/clients`
- **Descripción**: Lista todos los clientes del dataset.
- **Respuesta ejemplo**:
  ```json
  [
    {
      "id": "12345678",
      "subscriptionType": 1,
      "contractLength": 12,
      "monthlyCharges": 50.0,
      "paymentDelay": 0,
      "usageFrequency": 10,
      "supportCalls": 2
    }
  ]
  ```

### `GET /api/clients/{id}`
- **Descripción**: Obtiene datos de un cliente específico.
- **Respuesta ejemplo** (éxito):
  ```json
  {
    "id": "12345678",
    "subscriptionType": 1,
    "contractLength": 12,
    "monthlyCharges": 50.0,
    "paymentDelay": 0,
    "usageFrequency": 10,
    "supportCalls": 2
  }
  ```
- **Error 404**: `{"error": "Cliente con ID {id} no encontrado"}`

### `GET /predict/client/{id}`
- **Descripción**: Predicción de churn para un cliente, incluyendo probabilidad y análisis.
- **Respuesta ejemplo**:
  ```json
  {
    "cliente": {
      "id": "12345678",
      "nombre": "Usuario 12345678",
      "tiempoContrato": 12,
      "retrasosPagos": 0,
      "usoApp": 10,
      "plan": "Basic"
    },
    "analisis": {
      "probabilidad": 0.87,
      "resultado": "Va a cancelar"
    }
  }
  ```

### `GET /api/stats`
- **Descripción**: Estadísticas globales del dataset y modelo.
- **Respuesta ejemplo**:
  ```json
  {
    "total_clientes_dataset": 1000,
    "precision_modelo": 0.7826,
    "recall_churn": 0.8954,
    "f1_score_churn": 0.80,
    "estado_modelo": "Optimizado (Sin Payment Delay)"
  }
  ```

---

## 🧑‍💻 Cómo contribuir

- Crea una branch por feature/bug: `git checkout -b feature/nombre`
- Haz commits pequeños y descriptivos.
- Asegúrate de ejecutar `mvn test` y `mvn clean install` antes de crear un PR.
- Abre un Pull Request describiendo tus cambios.

---

> **Nota:** El proyecto usa configuración por defecto en `application.properties`. Para producción, ajusta variables como puerto o base de datos.

**Contacto / Licencia**

Para preguntas o contribuciones, abre un issue o PR en el repositorio. Licencia: especificar si aplica.

---
