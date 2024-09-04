# Etapa 1: Build da aplicação
FROM node:18-alpine AS builder

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Instale o Nest CLI globalmente
RUN npm install -g @nestjs/cli

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código da aplicação para o diretório de trabalho
COPY . .

# Compile a aplicação NestJS
RUN npm run build

# Etapa 2: Configuração do container final
FROM node:18-alpine AS runner

WORKDIR /app

USER node

# Copie as dependências instaladas do builder
COPY --chown=node:node --from=builder /app/node_modules ./node_modules

# Copie os arquivos de build da aplicação
COPY --chown=node:node --from=builder /app/dist ./dist

# Se necessário, copie outros arquivos (como .env)
COPY --from=builder /app/.env .env

# Exponha a porta que a aplicação utilizará
EXPOSE 8080

# Comando para iniciar a aplicação NestJS
CMD [ "node", "dist/main.js" ]
