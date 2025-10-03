# Bike Servicing Backend

This is the backend for a bike servicing application. It provides APIs for managing customers, bikes, and services.

## Features

*   **Customer Management:** Create, read, update, and delete customers.
*   **Bike Management:** Create and read bikes.
*   **Service Management:** Create, read, and update services.

## Technologies Used

*   [Node.js](https://nodejs.org/)
*   [Express.js](https://expressjs.com/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Prisma](https://www.prisma.io/)
*   [Zod](https://zod.dev/)

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (v14 or later)
*   [pnpm](https://pnpm.io/)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/bike-servicing-backend.git
    ```
2.  Install dependencies:
    ```bash
    pnpm install
    ```
3.  Create a `.env` file in the root directory and add the following environment variables:
    ```
    DATABASE_URL="your-database-url"
    ```
4.  Generate Prisma client:
    ```bash
    pnpm prisma generate
    ```

### Running the Application

```bash
pnpm dev
```

The application will be running at `http://localhost:3000`.

## API Endpoints

### Customer Routes

*   `GET /api/customers`: Get all customers.
*   `POST /api/customers`: Create a new customer.
*   `GET /api/customers/:id`: Get a single customer by ID.
*   `PUT /api/customers/:id`: Update a customer by ID.
*   `DELETE /api/customers/:id`: Delete a customer by ID.

### Bike Routes

*   `GET /api/bikes`: Get all bikes.
*   `POST /api/bikes`: Create a new bike.
*   `GET /api/bikes/:id`: Get a single bike by ID.

### Service Routes

*   `GET /api/services`: Get all services.
*   `POST /api/services`: Create a new service.
*   `GET /api/services/status`: Get service status.
*   `GET /api/services/:id`: Get a single service by ID.
*   `PUT /api/services/:id`: Update a service by ID.

## Project Structure

```
.
├── prisma
│   └── schema.prisma
├── src
│   ├── app.ts
│   ├── server.ts
│   ├── middlewares
│   ├── modules
│   │   ├── bike
│   │   ├── customer
│   │   └── service
│   ├── routes
│   └── shared
├── .env
├── .gitignore
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```
