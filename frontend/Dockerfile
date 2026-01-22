# Etapa 1: Build de frontend
FROM node:20 AS build
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias usando el lockfile (más confiable en Docker)
RUN npm ci

# Copiar el resto del código
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copiar los archivos compilados desde la etapa de build
COPY --from=build /app/build .

# Exponer el puerto
EXPOSE 80