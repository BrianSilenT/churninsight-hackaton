# 📊 ChurnInsight: Estrategia para la Retención de Clientes

**ChurnInsight** es una solución tecnológica integral de extremo a extremo diseñada para identificar clientes con alta probabilidad de cancelar sus servicios (*churn*). El proyecto integra un flujo avanzado de **Machine Learning**, una **API REST de alto rendimiento** y una **Interfaz de Usuario** interactiva para la toma de decisiones estratégicas.

---

## 🏗️ Arquitectura del Sistema

El ecosistema de ChurnInsight se divide en tres módulos especializados que garantizan una transición fluida desde los datos crudos hasta la acción empresarial:



1.  **Data Science (Python):** Análisis, entrenamiento y exportación del modelo predictivo.
2.  **Back-End (Java):** Servicio robusto que procesa las predicciones mediante integración nativa con el modelo.
3.  **Front-End (React):** Dashboard visual para el reporte y análisis de cancelaciones.

---

## 🧠 1. Data Science (El Cerebro)
Ubicado en la carpeta `/data-science`, este componente transforma datos históricos en conocimiento accionable.

* **Modelo:** Basado en **Random Forest**, optimizado para evitar el *Data Leakage* (eliminación de variables redundantes como `Payment Delay`).
* **Métricas de Éxito:** Logramos un **Recall del 90%**, asegurando que la gran mayoría de los clientes en riesgo sean identificados.
* **Ingeniería de Variables:** Creación de métricas inteligentes como `Support_Urgency` (llamadas/antigüedad) y `Monthly_Spend`.
* **Interoperabilidad:** Exportación al estándar **ONNX**, permitiendo ejecución nativa en Java con máxima eficiencia.

---

## ☕ 2. Back-End API (El Motor)
Ubicado en la carpeta `/backend`, este módulo provee servicios REST desarrollados en **Spring Boot 3.2.2**.

* **Tecnología Clave:** Integración con **ONNX Runtime** para inferencia de Machine Learning sin depender de Python en producción.
* **Endpoints Principales:**
    * `GET /clients`: Lista todos los clientes disponibles para análisis.
    * `GET /predict/{dni}`: Devuelve la predicción y probabilidad de churn para un cliente específico.
    * `POST /predict`: Recibe un JSON con datos de cliente para predicciones en tiempo real.
    * `GET /api/stats`: Estadísticas generales (total evaluados y tasa de churn).
* **Estructura Interna:** Organizado por capas: `controller`, `service`, `dto`, `model` y `config`.

---

## 💻 3. Front-End (La Interfaz)
Ubicado en la carpeta `/frontend`, ofrece una interfaz moderna construida con **React 18** y **TypeScript**.

* **UI/UX:** Componentes accesibles y modulares basados en **Radix UI** y **Tailwind CSS**.
* **Funcionalidades:** * Reporte interactivo de cancelaciones con gráficos de **Recharts**.
    * Formularios validados con **React-hook-form**.
    * Notificaciones en tiempo real con **Sonner**.

---

## 🛠️ Stack Tecnológico Consolidado

| Capa | Tecnologías Principales |
| :--- | :--- |
| **Data Science** | Python, Pandas, Scikit-learn, ONNX |
| **Backend** | Java 17, Spring Boot, ONNX Runtime, Maven |
| **Frontend** | React, TypeScript, Vite, Tailwind CSS, Recharts |
| **Herramientas** | Jupyter Notebook, Git, Postman |

---

## 🚀 Guía de Instalación Rápida

### Paso 1: Clonar el repositorio
```bash
git clone [https://github.com/tu-usuario/churninsight.git](https://github.com/tu-usuario/churninsight.git)
cd churninsight

```

### Paso 2: Configurar el Modelo (DS)

```bash
cd data-science
pip install -r requirements.txt
# El modelo final debe exportarse como modelo_churn_final.onnx

```

### Paso 3: Ejecutar la API (Backend)

```bash
cd backend
./mvnw spring-boot:run
# API disponible en http://localhost:8080

```

### Paso 4: Lanzar la Interfaz (Frontend)

```bash
cd frontend
npm install
npm run dev
# Dashboard disponible en http://localhost:3000

```

---

## 📂 Estructura del Repositorio

* `/data-science`: Notebooks de entrenamiento, datasets y scripts de exportación.
* `/backend`: Código fuente de la API e implementación del motor ONNX.
* `/frontend`: Aplicación React, componentes de UI y lógica de visualización.

---

## 🧑‍💻 Contribución y Equipo

* **Data Science:** [Carla Clemente Figueroa, Jorge Muñoz]
* **Backend Developer:** [Brian Plasencia Guzman]
* **Frontend Developer:** [Sebastián Henao Arenas, Carla Clemente Figueroa]

---

*Este proyecto fue desarrollado como parte de un desafío de Hackathon enfocado en soluciones reales de retención de clientes.*

---
