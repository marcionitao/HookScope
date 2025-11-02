# HookScope

HookScope is a tool to monitor, test, and debug webhooks.

## What are webhooks?

Webhooks are automated messages sent from apps when something happens. They have a message (or payload) and are sent to a unique URL—a permanent address for the webhook.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/your_username_/your_project_name.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Start the database with Docker

   ```sh
   docker-compose up -d
   ```

4. Run the database migrations

   ```sh
   npm run db:migrate --workspace=api
   ```

### Running the application

- To run the backend and frontend concurrently:

  ```sh
  npm run dev --workspace=api &
  npm run dev --workspace=web
  ```

## Technologies Used

This project is a monorepo using npm workspaces.

### Backend (api)

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Fastify](https://www.fastify.io/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Schema Validation:** [Zod](https://zod.dev/)
- **API Documentation:** [Scalar](https://github.com/scalar/scalar)
- **UUID Generation:** [uuidv7](https://github.com/LiosK/uuidv7) - Fast, sortable, and spec-compliant UUIDv7 generation.
- **Drizzle Zod Schemas:** [drizzle-zod](https://github.com/drizzle-team/drizzle-orm/tree/main/drizzle-zod) - Generate Zod schemas from Drizzle ORM schemas.
- **Fastify Zod Provider:** [fastify-type-provider-zod](https://github.com/turkerdev/fastify-type-provider-zod) - Type provider for Fastify that uses Zod for validation.

### Frontend (web)

- **Framework:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Routing:** [TanStack Router](https://tanstack.com/router/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Layout:** [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels)
- **Syntax Highlighting:** [Shiki](https://shiki.matsu.io/)
- **Tailwind Merge:** [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Utility to merge Tailwind CSS classes without style conflicts.
- **Tailwind Variants:** [tailwind-variants](https://www.tailwind-variants.org/) - Create variants for Tailwind CSS classes.
- **TanStack Router Devtools:** [@tanstack/react-router-devtools](https://tanstack.com/router/v1/docs/devtools) - Devtools for TanStack Router.

### Tooling

- **Containerization:** [Docker](https://www.docker.com/)
- **Code Formatter & Linter:** [Biome](https://biomejs.dev/)
- **Package Manager:** [npm](https://www.npmjs.com/)
