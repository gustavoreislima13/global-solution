# Projeto Frontend - Global Solution

Este projeto é um **Frontend** desenvolvido com **Next.js** e **TypeScript**, projetado para consumir e integrar APIs criadas no backend. O sistema é uma solução abrangente que utiliza as melhores práticas de desenvolvimento, garantindo integração fluida com os endpoints desenvolvidos em **Java**.


# Integrantes do grupo

Leonardo Oliveira Iafrate da Fosneca - RM556857
Julia Brito Ricardo - RM558831
Gustavo Lima Reis - RM555672


# Integração com JAVA

link do projeto java: https://github.com/britojulia/SmartEnergy-Java
Instruções: Para utilizar a API de Java, é necessário rodar o projeto no arquivo main e acessar o localhost com /smartenergy/admin

# Vercel

Link:https://global-solution-hy5g.vercel.app/

# Repositorio
https://github.com/gustavoreislima13/global-solution

# Vídeo do Pitch

Assista ao nosso pitch aqui: https://youtu.be/hxqYGu18iRg?si=HzOp9oL156DerNWi
---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

---

## Sobre o Projeto

Este projeto foi criado para consumir APIs desenvolvidas em disciplinas relacionadas a **Java** e realizar a integração com o backend. Ele serve como a interface de usuário, proporcionando uma experiência dinâmica, rápida e responsiva.

### Objetivos

1. Garantir a **integração perfeita** com APIs desenvolvidas no backend.
2. Proporcionar uma interface intuitiva e fácil de usar.
3. Implementar as melhores práticas com **TypeScript** e **Next.js**.

---

## Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Gerenciamento de Estado:** [React Context API](https://reactjs.org/docs/context.html)
- **Versionamento:** [Git/GitHub](https://github.com/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Integração:** APIs RESTful desenvolvidas em Java

---

## Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** (v16 ou superior)
- **npm** ou **yarn**
- **Git**

---

## Instalação

1. **Clone o repositório do GitHub:**
   ```bash
   git clone https://github.com/gustavoreislima13/global-solution.git
   ```

2. **Navegue até o diretório do projeto:**
   ```bash
   cd global-solution
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

---

## Configuração

1. Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis de ambiente:
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api
   NEXT_PUBLIC_API_KEY=sua_chave_de_api
   ```

2. Configure as variáveis de ambiente conforme a URL e as credenciais fornecidas pelo backend.

3. Verifique a conexão com os endpoints:
   - Teste os endpoints do backend utilizando ferramentas como **Postman** ou **Insomnia** antes de iniciar o frontend.

---

## Uso

Para iniciar o projeto em ambiente de desenvolvimento, execute:

```bash
npm run dev
```

A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## Estrutura do Projeto

```plaintext
├── public/               # Recursos públicos (imagens, ícones, etc.)
├── src/
│   ├── components/       # Componentes reutilizáveis
│   ├── pages/            # Páginas do Next.js
│   ├── services/         # Funções para chamadas à API
│   ├── styles/           # Arquivos de estilo global
│   └── utils/            # Utilitários e funções auxiliares
├── .env.local            # Variáveis de ambiente
├── next.config.js        # Configurações do Next.js
└── tsconfig.json         # Configurações do TypeScript
```

---

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um **fork** do repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-nova-funcionalidade
   ```
3. Realize as alterações e faça commit:
   ```bash
   git commit -m "Descrição das alterações"
   ```
4. Envie as alterações para o repositório remoto:
   ```bash
   git push origin minha-nova-funcionalidade
   ```
5. Abra um **Pull Request**.

---

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE). Consulte o arquivo LICENSE para mais informações.

---


Sinta-se à vontade para entrar em contato para dúvidas ou sugestões. 🚀
