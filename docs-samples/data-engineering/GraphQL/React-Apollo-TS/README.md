# React Apollo TypeScript App

A minimal React TypeScript application with Apollo GraphQL Client, built with Vite for modern development experience.

## Features

- ⚛️ **React 18** with TypeScript
- 🚀 **Apollo Client** for GraphQL operations
- ⚡ **Vite** for fast development and optimized builds
- 🎨 **CSS** styling with modular approach
- 🔧 **TypeScript** for type safety
- 📦 **ESM** support for modern JavaScript

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

## Environment Variables

When using environment variables in Vite, use the `VITE_` prefix instead of `REACT_APP_`:

```bash
# Instead of REACT_APP_API_URL
VITE_API_URL=your-api-url

# Instead of REACT_APP_CLIENT_ID  
VITE_CLIENT_ID=your-client-id
```

Access them in your code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

## Project Structure

```
 src/
    ├── index.tsx          # App entry point
    ├── App.tsx            # Main app component
    ├── App.css            # App styles
    ├── vite-env.d.ts      # Vite environment types
    ├── components/        # React components (create as needed)
    ├── operations/        # GraphQL queries and mutations (create as needed)
  vite.config.ts           # Vite configuration
  tsconfig.json            # TypeScript configuration for app
  tsconfig.node.json       # TypeScript configuration for Vite
  graphqlrc.yml            # Intellisense and auto completion config (Update if needed)
  codegen.yml              # Codegen config file (update if needed)
```

## GraphQL client Setup

### Apollo Client Configuration

The Apollo Client is configured in `src/Client.ts` with:
- GraphQL endpoint URL
- In-memory cache
- Authentication headers (commented out by default)

## Migration from Create React App

This project has been migrated from Create React App to Vite for:
- ⚡ **Faster development** - Hot Module Replacement (HMR) 
- 🏗️ **Optimized builds** - Better bundling and tree-shaking
- 📦 **Modern tooling** - Native ESM support
- 🔧 **Better TypeScript integration** - Faster type checking

### Key Changes:
- Scripts updated from `react-scripts` to `vite` commands
- Environment variables now use `VITE_` prefix instead of `REACT_APP_`
- `index.html` moved from `public/` to project root
- Enhanced TypeScript configuration for better performance

## Technologies Used

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Apollo Client](https://www.apollographql.com/docs/react/) - GraphQL client
- [GraphQL](https://graphql.org/) - Query language for APIs


