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

### Requisitos Previos
* **Lenguaje:** Python 3.8 o superior.
* **Entorno:** Jupyter Notebook con extensión `ipykernel` para ejecutar notebooks.
* **Herramientas:** pip para instalar dependencias (librerías como Pandas, Scikit-learn, ONNX Runtime).
* **IDE Recomendado:** VS Code con extensiones como Python, Jupyter y Pylance para soporte avanzado.

* **Modelo:** Basado en **Random Forest**, optimizado para evitar el *Data Leakage* (eliminación de variables redundantes como `Payment Delay`).
* **Métricas de Éxito:** Logramos un **Recall del 90%**, asegurando que la gran mayoría de los clientes en riesgo sean identificados.
* **Ingeniería de Variables:** Creación de métricas inteligentes como `Support_Urgency` (llamadas/antigüedad) y `Monthly_Spend`.
* **Interoperabilidad:** Exportación al estándar **ONNX**, permitiendo ejecución nativa en Java con máxima eficiencia.

---

## ☕ 2. Back-End API (El Motor)
Ubicado en la carpeta `/backend`, este módulo provee servicios REST desarrollados en **Spring Boot 3.2.2**.

### Requisitos Previos
* **Lenguaje:** Java JDK 17.
* **Herramientas:** Maven 3.8 o superior (incluido en el proyecto como `./mvnw`).
* **IDE Recomendado:** IntelliJ IDEA o VS Code con Extension Pack for Java (incluye soporte para Spring Boot, Maven y debugging).

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

### Requisitos Previos
* **Lenguaje:** Node.js 16 o superior (incluye npm).
* **Herramientas:** Vite para desarrollo y build (viene configurado en el proyecto).
* **IDE Recomendado:** VS Code con extensiones como ES7+ React/Redux/React-Native snippets, TypeScript Importer y Tailwind CSS IntelliSense.

* **UI/UX:** Interfaz básica con **Tailwind CSS** para estilos y diseño responsivo.
* **Funcionalidades:** Búsqueda de predicciones de churn por ID de cliente, visualización de estadísticas básicas y modo oscuro/claro.

> **Nota:** El proyecto utiliza un archivo .env.development. Asegúrate de configurar las variables necesarias para el entorno local.

El contenido que debe tener el archivo .env debe contener lo siguiente: 

/src/.env

**VITE_API_URL=http://localhost:8080**

---

## 🛠️ Stack Tecnológico Consolidado

| Capa | Tecnologías Principales |
| :--- | :--- |
| **Data Science** | Python, Pandas, Scikit-learn, ONNX |
| **Backend** | Java 17, Spring Boot, ONNX Runtime, Maven |
| **Frontend** | React, TypeScript, Vite, Tailwind CSS |
| **Herramientas** | Jupyter Notebook, Git, Postman |

---

## 🚀 Guía de Instalación Rápida

### Paso 1: Clonar el repositorio
```bash
git clone [https://github.com/BrianSilenT/churninsight.git](https://github.com/BrianSilenT/churninsight.git)
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

## � Levantar el Proyecto con Docker Compose

Este proyecto incluye configuración de Docker Compose para levantar el backend y el frontend de manera orquestada, facilitando el despliegue completo sin necesidad de instalar dependencias locales.

### Requisitos Previos
- **Docker Desktop:** Asegúrate de tener Docker Desktop instalado y ejecutándose en tu máquina (disponible para Windows, macOS y Linux).
- **Clonar el Repositorio:** Descarga el proyecto desde GitHub con el siguiente comando:
  ```bash
  git clone https://github.com/BrianSilenT/churninsight-hackaton.git
  cd churninsight-hackaton
  ```

### Levantar la Orquesta
- Desde la carpeta raíz del proyecto (donde se encuentra el archivo `docker-compose.yml`), ejecuta el siguiente comando para construir y levantar los servicios:
  ```bash
  docker-compose up --build
  ```
  - Esto descargará las imágenes necesarias, construirá los contenedores y los pondrá en marcha. El proceso puede tardar unos minutos la primera vez.

### Servicios Disponibles
Una vez que los contenedores estén corriendo, podrás acceder a los siguientes servicios:
- **Backend (API REST):** Disponible en `http://localhost:8080/actuator/health`.  
  Verifica que responda con `{"status":"UP"}` para confirmar que el backend está funcionando correctamente.
- **Frontend (Interfaz de Usuario):** Disponible en `http://localhost:3000`.  
  Aquí podrás interactuar con la aplicación web para analizar predicciones de churn.

### Monitoreo de Recursos
- Para verificar el consumo de memoria y CPU en tiempo real de los contenedores:
  ```bash
  docker stats
  ```
  Esto es útil para monitorear el rendimiento y evitar exceder límites de recursos (como en entornos gratuitos de OCI durante un hackatón).

### Detener la Orquesta
- Para detener todos los servicios sin eliminar los contenedores:
  ```bash
  docker-compose down
  ```
- Para detener y limpiar completamente (incluyendo volúmenes de datos), reconstruyendo desde cero en el próximo lanzamiento:
  ```bash
  docker-compose down -v
  docker-compose up --build
  ```

Esta configuración simplifica el despliegue, permitiendo que cualquier persona ejecute el proyecto completo con un solo comando, sin preocuparse por configuraciones locales de Java, Node.js o Python.

---

## �📂 Estructura del Repositorio

* `/data-science`: Notebooks de entrenamiento, datasets y scripts de exportación.
* `/backend`: Código fuente de la API e implementación del motor ONNX.
* `/frontend`: Aplicación React, componentes de UI y lógica de visualización.

---

## 🧑‍💻 Contribución y Equipo

* **Data Science:** 🇵🇪 Carla Clemente Figueroa, 🇸🇻 Jorge Muñoz
* **Backend Developer:** 🇲🇽 Brian Plasencia Guzman
* **Frontend Developer:** 🇵🇪 Carla Clemente Figueroa, 🇨🇴 Sebastián Henao Arenas

---

*Este proyecto fue desarrollado como parte de un desafío de Hackathon enfocado en soluciones reales de retención de clientes.*

---
