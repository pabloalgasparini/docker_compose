# Utiliza la imagen oficial de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json (si existen)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todos los archivos de tu aplicación al contenedor
COPY . .

# Expone el puerto 3000 (el mismo que está configurado en tu servidor)
EXPOSE 80

# Define el comando para iniciar tu aplicación
CMD ["node", "server.js"]
