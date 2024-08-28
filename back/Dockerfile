#Usando uma imagem oficial do node.js como base
FROM node:20

#Criando um diretorio de trabalho para o back
WORKDIR /back

#Copiando os arquivos package-lock.json e package.json
COPY package*.json ./

#Apagando a pasta node_modules
RUN rm -rf node_modules

#Instalando as dependencias do projeto
RUN npm i

#Copiando o restante do codigo da aplicação
COPY . .


#Expondo a porta na qual o servidor vai rodar
EXPOSE 8080

#Comando para iniciar o servidor
CMD ["npm", "start"]