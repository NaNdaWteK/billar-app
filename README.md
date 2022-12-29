<h1 align="center">
  👋️ Create Billar App based on Codely template example
</h1>

## 🚀 Run the app

- `yarn install`: Install dependencies
- `cp .env.example .env`: Create the environment variables file based on the example template
- `yarn start`: Run in dev mode on [localhost:3000](http://localhost:3000)
- `yarn build`: Generate production build

## ✅ Testing

### Unit tests

`yarn test`: Run unit tests with Jest and React Testing Library

### End-to-end tests

- `yarn start`: Run in dev mode on [localhost:3000](http://localhost:3000)
- Run end-to-end tests with Cypress choosing one of the following options:
  - `yarn cy:open`: Open Cypress in dev mode
  - `yarn cy:run`: Execute Cypress in CLI

## 🔦 Linting

- `yarn lint`: Run linter
- `yarn lint:fix`: Fix lint issues

## 🌈 Tech Stack

- [TypeScript](https://www.typescriptlang.org)
- [ESLint](https://eslint.org) and [Prettier](https://prettier.io) already configured with the [🤏 Codely's configuration](https://github.com/CodelyTV/eslint-config-codely)
- [Jest](https://jestjs.io) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for the unit tests
- [Cypress](https://www.cypress.io) with [Testing Library](https://testing-library.com/docs/cypress-testing-library) for the end-to-end tests
- [GitHub Action Workflows](https://github.com/features/actions) set up to run tests and linting on push
- [.editorconfig](https://editorconfig.org) for sharing the IDE config

## 🔀 Related information

This application was generated using the [🌱⚛️ Create React App Codely template](https://github.com/CodelyTV/cra-template-codely). Feel free to check it out and star the repo! 🌟😊🙌
