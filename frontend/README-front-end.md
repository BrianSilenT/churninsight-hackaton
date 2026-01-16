
# Interfaz de Reporte de Cancelación ✅

**Descripción breve**

Interfaz de usuario profesional para el reporte y análisis de cancelaciones (churn). Esta aplicación está construida con **React + TypeScript** y configurada con **Vite**. Utiliza una arquitectura modular que separa la lógica de servicios, esquemas de validación y componentes UI reutilizables para garantizar escalabilidad y mantenibilidad.

---

## 🎯 Objetivos

- Proveer una interfaz visual clara para explorar datos de cancelación.
- Facilitar la identificación de patrones y métricas clave (tasa de churn, segmentos afectados, motivos comunes).
- Ser una base modular y reutilizable para integrar más visualizaciones o conectar con APIs de datos.

---

## ✨ Características principales

- **Componentes UI Reutilizables:** Basados en Radix UI y Tailwind CSS (Shadcn/UI).
- **API Mocking:** Entorno de desarrollo independiente mediante **MSW (Mock Service Worker)** para interceptar peticiones de red.
- **Validación de Datos:** Gestión de formularios y validación de esquemas con **Zod**.
- **Custom Hooks:** Lógica de negocio y fetching de datos centralizada (ej. `useClients`).
- **Arquitectura Limpia:** Separación estricta entre presentación (UI), lógica (Hooks) y datos (Services).

---

## 🧭 Estructura del proyecto (resumen)

```text
/ (root)
  ├─ index.html
  ├─ package.json            # Scripts y dependencias
  ├─ tsconfig.json           # Configuración de TypeScript
  ├─ vite.config.ts          # Configuración de Vite
  ├─ tailwind.config.ts      # Configuración de estilos (Tailwind)
  └─ src/
     ├─ main.tsx             # Punto de entrada principal
     ├─ App.tsx              # Componente raíz y Layout
     ├─ components/
     │  └─ ui/               # Componentes atómicos (botones, diálogos, etc.)
     ├─ hooks/               # Custom hooks para lógica de estado
     ├─ lib/                 # Configuración de librerías (API client, utils)
     ├─ mocks/               # Configuración de MSW (Handlers, browser y server)
     ├─ schemas/             # Esquemas de validación de datos (Zod)
     ├─ services/            # Lógica de peticiones API y servicios (.test.ts incluido)
     ├─ styles/
     │  └─ globals.css       # Estilos globales y variables de CSS
     ├─ types/               # Interfaces y definiciones de TypeScript
     └─ utils.ts             # Funciones de utilidad general

**Archivos clave:**
- `src/main.tsx`: monta la aplicación en el DOM.
- `src/App.tsx`: layout y rutas (si aplica).
- `src/components/ui`: colección de componentes (botones, inputs, modales, tablas, etc.).

---

## 🛠️ Tecnologías

- Core: React 18 + TypeScript + Vite
- Estilos: Tailwind CSS,  Lucide React(iconos)
- UI & Accesibilidad: Radix UI, Soner(Notificaciones)
- Manejo de datos: MSW (Mocking), Zos (Validación)

---

## Requisitos Previos:

Antes de ejecutar el proyecto en local es necesario contar con lo siguiente:

- Node:  versión 24.11.0
- npm: 11.6.1
- nvm: 1.2.2

---

## 🚀 Instalación y uso

1. Clona el repositorio:

```bash
git clone [https://github.com/tu-usuario/churninsight.git](https://github.com/tu-usuario/churninsight.git)
cd churninsight
```

2. Instala dependencias:

```bash
npm install
# o: yarn
```

3. Ejecuta en desarrollo:

```bash
npm run dev
# abre http://localhost:3000 
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
- Abre un Pull Request describiendo tus cambios 

---

> **Nota:** El proyecto utiliza un archivo .env.development. Asegúrate de configurar las variables necesarias para el entorno local.

---

**Contacto / Licencia**

Para preguntas o contribuciones, abre un issue o PR en el repositorio. Licencia: especificar si aplica.

---
  
