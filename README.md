# Dashboard Tropa Digital

Um painel administrativo moderno e responsivo desenvolvido com React, Vite e Styled Components.

## 🚀 Visão Geral

Este projeto consiste em um painel administrativo completo com sistema de autenticação, rotas protegidas e interface responsiva. Foi desenvolvido como um teste técnico para a Tropa Digital.

## ✨ Funcionalidades

- **Autenticação Segura**
  - Login/Logout
  - Rotas protegidas
  - Validação de formulários
  - Persistência de sessão

- **Dashboard Interativo**
  - Navegação por menu lateral
  - Cards de métricas
  - Tabela de dados
  - Design responsivo para todos os dispositivos

- **Interface Moderna**
  - Tema escuro/claro
  - Componentes estilizados
  - Animações suaves
  - Feedback visual para ações

## 🛠️ Tecnologias Utilizadas

- **Framework Principal**: React 18
- **Build Tool**: Vite
- **Roteamento**: React Router v6
- **Estilização**: Styled Components
- **Ícones**: Lucide React
- **Gerenciamento de Estado**: Context API + Hooks
- **Validação de Formulários**: Validação manual
- **Controle de Versão**: Git

### Por que essas tecnologias?

- **Vite**: Escolhido por sua velocidade de desenvolvimento e hot module replacement.
- **Styled Components**: Permite estilização com CSS-in-JS, garantindo componentes estilizados isolados e fáceis de manter.
- **React Router v6**: Para um sistema de roteamento robusto e intuitivo.
- **Context API**: Para gerenciamento de estado global da aplicação, especialmente para autenticação.

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou Yarn (recomendado)

### Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositório>
   cd TesteTropaDigital
   ```

2. Instale as dependências:
   ```bash
   yarn install
   # ou
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   yarn dev
   # ou
   npm run dev
   ```

4. Acesse a aplicação em:
   ```
   http://localhost:5173
   ```

### Credenciais de Acesso

- **Email**: admin@tropadigital.com
- **Senha**: 123456

## 🎨 Estrutura do Projeto

```
src/
├── components/       # Componentes reutilizáveis
├── contexts/         # Contextos React
├── pages/            # Páginas da aplicação
├── styles/           # Estilos globais e tema
└── App.jsx           # Componente raiz
```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ para o processo seletivo da Tropa Digital

## Recursos Adicionais

Para aprender mais sobre as tecnologias utilizadas neste projeto, consulte:

- [Documentação do React](https://pt-br.reactjs.org/)
- [Documentação do Vite](https://vitejs.dev/guide/)
- [Documentação do Styled Components](https://styled-components.com/)
- [Documentação do React Router](https://reactrouter.com/)

## 🚀 Comandos Úteis

No diretório do projeto, você pode executar:

### `yarn dev` ou `npm run dev`

Inicia o servidor de desenvolvimento.\
Abra [http://localhost:5173](http://localhost:5173) para visualizar no navegador.

### `yarn build` ou `npm run build`

Constrói o aplicativo para produção na pasta `dist`.

### `yarn preview` ou `npm run preview`

Pré-visualiza a versão de produção localmente.

### `yarn lint` ou `npm run lint`

Executa o ESLint para verificar a qualidade do código.

## 🎨 Estilização

Este projeto utiliza Styled Components para estilização, com um tema global configurado em `src/styles/theme.js`. A abordagem de CSS-in-JS permite:

- Estilos escopados por componente
- Facilidade na manutenção
- Suporte a temas dinâmicos
- Melhor desempenho com extração de CSS crítico

## Gerenciamento de Estado

Este projeto utiliza a Context API do React para gerenciamento de estado, especialmente para o estado de autenticação. O contexto principal está localizado em `src/contexts/AuthContext.jsx`.

## Testes

Para executar os testes, utilize:

```bash
yarn test
# ou
npm test
```

## Deploy

Este projeto pode ser implantado em serviços como:
- Vercel
- Netlify
- Qualquer serviço de hospedagem de sites estáticos

## Contribuindo

1. Faça um Fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request
