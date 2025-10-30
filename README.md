# HookScope

HookScope is a tool to monitor, test, and debug webhooks.

## What are webhooks?

Webhooks are automated messages sent from apps when something happens. They have a message (or payload) and are sent to a unique URL—a permanent address for the webhook.

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

### Frontend (web)

- **Framework:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Routing:** [TanStack Router](https://tanstack.com/router/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Layout:** [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels)
- **Syntax Highlighting:** [Shiki](httpshttps://shiki.matsu.io/)

### Tooling

- **Containerization:** [Docker](https://www.docker.com/)
- **Code Formatter & Linter:** [Biome](https://biomejs.dev/)
- **Package Manager:** [npm](https://www.npmjs.com/)
