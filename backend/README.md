# Backend – ChurnInsight Hackathon

## 📌 Introducción
Este backend forma parte del proyecto **ChurnInsight Hackathon**.  
Está desarrollado en **Spring Boot** y expone servicios REST para el análisis de datos y predicciones de churn.  
Se integra con el frontend y puede ejecutarse tanto en modo local como dentro de una orquesta con Docker Compose.



## ⚙️ Requisitos previos
- **Java 17 o superior**  
- **Maven** (para compilación y ejecución local)  
- **Docker Desktop** (para levantar con Docker Compose)  
- Opcional: **Postman** o **curl** para probar endpoints



## ▶️ Instalación y ejecución

### 🔹 Modo local (Maven)
1. Clonar el repositorio:
   bash
   git clone https://github.com/BrianSilenT/churninsight-hackaton.git
   cd churninsight-hackaton/backend
   
2. Compilar y ejecutar:
   bash
   mvn clean install
   mvn spring-boot:run
   
3. El backend quedará disponible en:
   
   http://localhost:8080
   

### 🔹 Modo Docker Compose
1. Desde la carpeta raíz del proyecto:
   bash
   docker-compose up --build
   
2. El backend se expone en:
   
   http://localhost:8080
   



## 🌐 Endpoints principales

| Endpoint             | Método | Descripción                  | Ejemplo de respuesta       |
|----------------------|--------|------------------------------|----------------------------|
| `/actuator/health`   | GET    | Verifica estado del backend  | `{"status":"UP"}`          |
| `/api/predictions`   | POST   | Recibe datos y devuelve predicción | `{ "churn": true }` |

**Ejemplo de body para `/api/predictions`:**
json
{
  "customerId": 123,
  "features": { "age": 35, "contract": "monthly" }
}


**Ejemplo de respuesta:**
json
{
  "churn": true,
  "confidence": 0.87
}


*(Agrega aquí más endpoints según lo que tengas implementado: usuarios, contratos, métricas, etc.)*



## ⚙️ Configuración
- **Variables de entorno:**
  - `JAVA_OPTS` → configuración de memoria (ejemplo: `-Xms256m -Xmx1024m`)
  - `SPRING_PROFILES_ACTIVE` → perfil de ejecución (`dev`, `prod`)
- **Archivos de configuración:**
  - `application.properties` o `application.yml` en `src/main/resources`



## 🧪 Pruebas
- Ejecutar tests unitarios:
  bash
  mvn test
  
- Validar endpoints con Postman o curl:
  bash
  curl http://localhost:8080/actuator/health
  



## 📂 Estructura del proyecto
- `controller/` → controladores REST  
- `service/` → lógica de negocio  
- `dto/` → objetos de transferencia de datos  
- `repository/` → acceso a datos (si aplica)  
- `resources/` → configuración y properties  



## 🤝 Contribución
1. Crear una rama desde `main` para tus cambios.  
2. Hacer commit con mensajes claros.  
3. Subir la rama y abrir un Pull Request.  
4. Seguir el estilo de código y convenciones del equipo. 
