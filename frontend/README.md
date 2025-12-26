
# Interfaz de Reporte de Cancelación ✅

**Descripción breve**

Interfaz de usuario para el reporte y análisis de cancelaciones (churn). Esta aplicación está construida con React + TypeScript y se configura con Vite. Incluye componentes reutilizables (en `src/components/ui`) para crear vistas interactivas, gráficos y formularios.

---

## 🎯 Objetivos

- Proveer una interfaz visual clara para explorar datos de cancelación.
- Facilitar la identificación de patrones y métricas clave (tasa de churn, segmentos afectados, motivos comunes).
- Ser una base modular y reutilizable para integrar más visualizaciones o conectar con APIs de datos.

---

## ✨ Características principales

- Componentes UI reutilizables (basados en Radix y librerías auxiliares).
- Visualizaciones con `recharts` para análisis rápidos.
- Validación y formularios con `react-hook-form`.
- Notificaciones y toasts (Sonner) y utilidades de accesibilidad.

---

## 🧭 Estructura del proyecto (resumen)

```
/ (root)
  ├─ index.html
  ├─ package.json            # scripts y dependencias
  ├─ tsconfig.json
  ├─ vite.config.ts
  └─ src/
     ├─ main.tsx             # punto de entrada
     ├─ App.tsx              # componente raíz
     ├─ index.css
     ├─ components/
     │   └─ ui/              # componentes UI reutilizables
     └─ styles/
         └─ globals.css      # estilos globales
```

**Archivos clave:**
- `src/main.tsx`: monta la aplicación en el DOM.
- `src/App.tsx`: layout y rutas (si aplica).
- `src/components/ui`: colección de componentes (botones, inputs, modales, tablas, etc.).

---

## 🛠️ Tecnologías

- React 18 + TypeScript
- Vite (bundler de desarrollo)
- Radix UI (componentes accesibles)
- Recharts (gráficas)
- Sonner (notificaciones)

---

## 🚀 Instalación y uso

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd <nombre-del-proyecto>
```

2. Instala dependencias:

```bash
npm install
# o: yarn
```

3. Ejecuta en desarrollo:

```bash
npm run dev
# abre http://localhost:5173 (u otra URL que muestre Vite)
```

4. Compila para producción:

```bash
npm run build
```

5. Revisiones y herramientas de calidad:

```bash
npm run type-check   # TypeScript (sin emitir archivos)
npm run lint         # ESLint (aplica --fix)
npm run lint:ci      # Lint para CI (falla si hay warnings)
```

---

## 🧑‍💻 Cómo contribuir

- Crea una branch por feature/bug: `git checkout -b feature/nombre`
- Haz commits pequeños y descriptivos.
- Asegúrate de ejecutar `npm run lint` y `npm run type-check` antes de crear un PR.

---

> **Nota:** No hay variables de entorno obligatorias en este repositorio (si tu integración requiere API keys u otros secretos, agrégalo en `.env` y documenta los nombres aquí).

---

**Contacto / Licencia**

Para preguntas o contribuciones, abre un issue o PR en el repositorio. Licencia: especificar si aplica.

---
  
