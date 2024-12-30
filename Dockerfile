# Etapa 1: Construcción de la aplicación
FROM node:18 AS builder

# Configurar el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos necesarios
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa 2: Servir los archivos con Nginx
FROM nginx:stable-alpine

# Copiar los archivos generados al servidor Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuración personalizada de Nginx (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
