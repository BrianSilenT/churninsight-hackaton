$ # ChurnInsight Hackathon

## Estructura del monorepo
- `/backend` → API Java Spring Boot (predicciones y lógica de negocio).
- `/frontend` → Aplicación web para ingresar datos y visualizar resultados.
- `/data-science` → Notebooks/Scripts Python para preparación de datos y exportación del modelo a ONNX.
- `README.md` → Documentación general y guías del proyecto.

## Convenciones de ramas
- `feature/backend-<tarea>` → cambios del backend.
- `feature/frontend-<tarea>` → cambios del frontend.
- `feature/data-<tarea>` → cambios de data science.
- Antes de hacer merge a `main`, validar que la parte afectada compila/funciona.

## Cómo levantar cada parte (resumen)
- **Backend:**
  ```bash
  cd backend
  mvn spring-boot
