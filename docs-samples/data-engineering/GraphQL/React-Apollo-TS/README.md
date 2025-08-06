# React Apollo TypeScript App

A minimal React TypeScript application with Apollo GraphQL Client, powered by Vite for fast development and optimized builds.

## Features

- ⚛️ **React 18** with TypeScript
- ⚡ **Vite** for blazing fast development and build times
- 🚀 **Apollo Client** for GraphQL operations
- 🎨 **CSS** styling with modular approach
- 🔧 **TypeScript** for type safety
- 📦 **ESM** support for modern JavaScript modules

## Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create Fabric GraphQL Endpoint:
   - Step 1:
      - We get started by creating a SQL database in Fabric:
         - In your Fabric workspace, select New Item then SQL database (preview).
         - Give your database a name, then select Sample data to quickly create all the required tables and data in your database.
   - Step 2:
      - Create a GraphQL API:
         - Creating an API from your SQL table is fast, easy, and straightforward. You just need to click the New API for GraphQL button in the ribbon and give your API a name.
         - Next select all tables in your database, then click Load

3. Configure your GraphQL API:
   - Open `src/authConfig.ts`
   - Replace `'https://your-graphql-endpoint.com/graphql'` with your actual GraphQL endpoint
   - Follow the steps from the "Create a Microsoft Entra app" section in the [documentation](https://learn.microsoft.com/en-us/fabric/data-engineering/connect-apps-api-graphql#create-a-microsoft-entra-app) to use in the `AUTH_CONFIG` details.

4. Update the GraphQL schema:
   - Replace `schema.graphql` with your actual GraphQL schema
   - Update the queries in `src/App.tsx` to match your schema
   - for codegen, Update the `src/operations/queries.graphql` to match your schema

### Development

Start the development server:
```bash
npm run dev
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build

Build for production:
```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

### Preview

Preview the production build:
```bash
npm run preview
```

## Migration from Create React App

This project has been migrated from Create React App to Vite for better performance and modern tooling:

### Key Changes:
- **Faster Development**: Vite provides instant server start and lightning-fast HMR
- **Optimized Builds**: Better tree-shaking and smaller bundle sizes
- **Modern Tooling**: Native ESM support and improved TypeScript experience
- **Environment Variables**: Use `VITE_` prefix instead of `REACT_APP_` for environment variables

### Scripts Changes:
- `npm start` → `npm run dev`
- Build command remains the same: `npm run build`
- New `npm run preview` to preview production builds

## Project Structure

```
 src/
    ├── index.tsx          # App entry point
    ├── App.tsx            # Main app component
    ├── App.css            # App styles
    ├── components/        # React components (create as needed)
    ├── operations/        # GraphQL queries and mutations (create as needed)
  graphqlrc.yml            # Intellisense and auto completion config (Update if needed)
  codegen.yml              # Codegen config file (update if needed)
```

## GraphQL client Setup

### Apollo Client Configuration

The Apollo Client is configured in `src/Client.ts` with:
- GraphQL endpoint URL
- In-memory cache
- Authentication headers (commented out by default)


## Technologies Used

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Apollo Client](https://www.apollographql.com/docs/react/) - GraphQL client
- [GraphQL](https://graphql.org/) - Query language for APIs


