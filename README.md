# GuiaTu

GuiaTu é uma aplicação web desenvolvida para gerenciar e facilitar o cadastro e a autenticação de guias turísticos, empreendedores e turistas. A aplicação permite que guias turísticos se cadastrem e atualizem suas informações, enquanto turistas e empreendedores podem criar contas e acessar as funcionalidades da plataforma. Além disso, a plataforma oferece personalização de rotas de passeios, integração com pagamento online e busca de endereços usando a API do ViaCEP.

## Tecnologias Utilizadas

- **Frontend**: React, `styled-components`, `react-router-dom`, `react-hook-form`, `axios`
- **Backend**: Node.js, Express, `nodemon`, `mysql2`
- **Banco de Dados**: MySQL
- **Autenticação**: JWT, bcrypt
- **Bundler**: Vite
- **API de Mapas**: StreetMap
- **Pagamentos Online**: [Nome do serviço de pagamento utilizado, ex: Stripe]
- **API de Endereços**: ViaCEP

## Funcionalidades

- Cadastro e autenticação de diferentes tipos de usuários (Turistas, Empreendedores, Guias)
- Edição de perfil, incluindo foto de perfil
- Formulários de cadastro com validação e tratamento de erros
- Navegação entre páginas usando `react-router-dom`
- **Personalização de Rota**: Turistas podem criar e personalizar rotas de passeios com guias cadastrados na plataforma.
- **Mapas**: Integração com a API de StreetMap para visualização de rotas e pontos turísticos.
- **Pagamentos Online**: Integração com serviço de pagamento online para facilitar transações seguras.
- **Busca de Endereços**: Utiliza a API do ViaCEP para buscar e preencher automaticamente informações de endereço.

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/usuario/guiatu.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd guiatu
    ```

3. Instale as dependências do frontend:
    ```bash
    cd frontend
    npm install
    ```

4. Instale as dependências do backend:
    ```bash
    cd ../backend
    npm install
    ```

5. Configure o banco de dados MySQL conforme o arquivo `config/database.js` e crie as tabelas necessárias.

6. Configure a API de StreetMap com sua chave de API no arquivo `config/map.js`.

7. Configure o serviço de pagamento online com as credenciais necessárias no arquivo `config/payment.js`.

8. Não é necessário configurar a API do ViaCEP, pois ela não requer autenticação. No entanto, certifique-se de que sua aplicação utilize a API corretamente para buscar informações de endereço.

9. Inicie o backend usando `nodemon` para desenvolvimento:
    ```bash
    npm start
    ```

10. Em um novo terminal, inicie o frontend:
    ```bash
    cd frontend
    npm run dev
    ```

## Estrutura do Projeto

- **frontend/**: Contém o código do frontend da aplicação.
- **backend/**: Contém o código do backend da aplicação.
- **config/**: Arquivos de configuração do banco de dados, API de mapas, pagamento e outras configurações.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum bug ou quiser adicionar uma nova funcionalidade, abra uma issue ou um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## Contato

Para mais informações, entre em contato com [seu-email@example.com](mailto:seu-email@example.com).
