#Etapa: 01 Build da aplicação React
FROM node:20 AS build

#Criando um diretorio de trabalho para o back
WORKDIR /front

#Copiando os arquivos package-lock.json e package.json
COPY package*.json ./

#Apagando a pasta node_modules
RUN rm -rf node_modules

#Instalando as dependencias do projeto
RUN npm i

#Copiando o restante do codigo da aplicação
COPY . .

RUN npm run build

