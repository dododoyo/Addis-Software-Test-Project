# Addis Software Test Project

This is a full-stack application that displays a list of songs and allows users to create, update, and delete songs.

## Project Overview

The project consists of two main parts: the **client** and the **server**. The client is a React application, and the server is an Express-based API.

## Client

The client is a React application built with Vite and uses Redux Toolkit for state management along with Redux Saga for handling side effects. Emotion, Tailwind and Styled System are used for styling the application.

### Directory Structure

```
client/
  .gitignore
  eslint.config.js
  index.html
  package.json
  postcss.config.js
  public/
  README.md
  src/
    App.tsx
    components/
    containers/
    index.css
    lib/
    main.tsx
    pages/
    ...
  tailwind.config.js
  tsconfig.app.json
  tsconfig.json
  tsconfig.node.json
  vite.config.ts
```

### Key Files

- **src/lib/store.ts**: Configures the Redux store and integrates Redux Saga.
- **src/main.tsx**: Entry point of the React application.
- **vite.config.ts**: Configuration file for Vite.

### Setup and Run

1. **Install dependencies:**

   ```bash
   cd client
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**

   ```bash
   npm run build
   ```

## Server

The server is an Express-based API that uses TypeScript and various middleware for handling requests and errors.

### Directory Structure

```
server/
  .gitignore
  controllers/
  core/
  errors/
  index.ts
  middleware/
  models/
  nodemon.json
  package.json
  README.md
  repositories/
  routes/
  tsconfig.json
```

### Key Files

- **index.ts**: Entry point of the server application.
- **tsconfig.json**: TypeScript configuration file.
- **package.json**: Contains scripts and dependencies for the server.

### Setup and Run

1. **Install dependencies:**

   ```bash
   cd server
   npm install
   ```

2. **Run the server:**

   ```bash
   npm start
   ```

3. **Development mode:**

   ```bash
   npm run dev
   ```

## Technologies Used

- **express**: To build the API.
- **MongoDB**: To store and interact with data.
- **ReactJS**: To build the user interface.
- **Redux Toolkit**: To manage the state of the app.
- **Redux Saga**: To make calls to the REST API.
- **Emotion, Tailwind, and Styled System**: To style the app.

For more details, refer to the individual README files in the [`client`] and [`server`] directories.
