# React Apollo TypeScript App

A minimal React TypeScript application with Apollo GraphQL Client, now powered by Vite for faster development and builds.

## Features

- ⚛️ **React 18** with TypeScript
- 🚀 **Apollo Client** for GraphQL operations
- ⚡ **Vite** for fast development and optimized builds
- 🎨 **CSS** styling with modular approach
- 🔧 **TypeScript** for type safety

## Migration Benefits

This project has been migrated from react-scripts to Vite for:
- ⚡ **Faster development**: Instant hot module replacement
- 🏗️ **Faster builds**: Native ESM and optimized bundling  
- 📦 **Smaller bundles**: Better tree-shaking and optimization
- 🔧 **Modern tooling**: Latest TypeScript and development tools
- 🚀 **Active maintenance**: Vite is actively maintained vs deprecated react-scripts

## Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm run restore
```

2. Create Fabric GraphQL Endpoint:
   - Step 1:
      - We get started by creating a SQL database in Fabric:
         - In your Fabric workspace, select New Item then SQL database (preview).
         - Give your database a name, then select Sample data to quickly create all the required tables and data in your database.
   - Step 2:
      - Create a GraphQL API:
         - Creating an API from your SQL table is fast, easy, and straightforward. You just need to click the New API for GraphQL button in the ribbon and give your API a name.
         - Next select tables in your database, then click Load

3. Configure your GraphQL API:
   - Open `src/authConfig.ts`
   - Replace `'https://your-graphql-endpoint.com/graphql'` with your actual GraphQL endpoint
   - Add authentication related config 

4. Update the GraphQL schema:
   - Replace `schema.graphql` with your actual GraphQL schema
   - Update the queries in `src/App.tsx` to match your schema
   - for codegen, Update the `src/operations/queries.graphql` to match your schema

### Development

Start the development server:
```bash
npm run dev
```

The app will open at [http://localhost:3000](http://localhost:3000) with Vite's fast hot module replacement.

### Build

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

### Preview Production Build

```bash
npm run preview
```

Preview the production build locally.

## Breaking Changes from react-scripts

- **Development script**: Changed from `npm start` to `npm run dev`
- **Environment variables**: Now use `VITE_` prefix instead of `REACT_APP_` (if you add any)
- **Build output**: Remains in `build/` directory for compatibility
- **Imports**: Use `import.meta.env` instead of `process.env` for environment variables

## Project Structure

```
 src/
    ├── index.tsx          # App entry point
    ├── App.tsx            # Main app component
    ├── App.css            # App styles
    ├── components/        # React components (create as needed)
    ├── operations/        # GraphQL queries and mutations (create as needed)
    └── vite-env.d.ts      # Vite type definitions
  index.html               # Entry HTML file (moved from public/)
  vite.config.ts           # Vite configuration
  tsconfig.json            # TypeScript configuration
  tsconfig.node.json       # TypeScript config for Vite tools
  .graphqlrc.yml           # Intellisense and auto completion config (Update if needed)
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


