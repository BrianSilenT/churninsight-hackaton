# Backend (Java Spring Boot)

## Estado actual
- Proyecto movido a la carpeta `/backend` dentro del monorepo.
- Estructura limpia con `pom.xml` y `src/`.
- Endpoints iniciales definidos para predicción.

## Endpoints generados
### `POST /api/predict`
- **Request (ejemplo):**
  ```json
  {
    "tiempoContratoMeses": 12,
    "retrasosPago": 2,
    "usoMensual": 14.5,
    "plan": "Premium"
  }