# Fastify Synchronous Study API

A lightweight, synchronous REST API built with the **Fastify** framework for educational purposes. It demonstrates routing, controller architecture, and basic data persistence utilizing a local **JSON file**.

## Features

- **Fastify Framework:** Engineered using high-performance architecture.
- **MVC-like Architecture:** Clean separation of concerns with dedicated folders for routes, controllers, and database utils.
- **Synchronous JSON Persistence:** Custom file synchronization via `itemsStore.js` utilizing a local JSON database.
- **Swagger Documentation:** Automated API specification integration for visual endpoint testing.

## Project Structure

```text
fastify-api/
├── controllers/
│   └── itemsController.js   # Handles business logic and file sync
├── data/
│   └── items.json          # Local JSON database storage
├── routes/
│   └── items.js            # API route mappings
├── utils/
│   └── itemsStore.js       # Utility for reading/writing JSON synchronously
└── server.js               # Application entry point & Fastify initialization
```

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org) (v18 or higher recommended)
- [npm](https://npmjs.com)

## Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone <your-repository-url>
   cd fastify-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server (with live-reload via nodemon):**
   ```bash
   npm run dev
   ```

## API Endpoints

The API handles collection actions through the `/api/items` context.

| Method   | Endpoint     | Description                                                       |
| :------- | :----------- | :---------------------------------------------------------------- |
| **GET**  | `/api/items` | Retrieves the entire collection from the JSON database            |
| **POST** | `/api/items` | Creates a new entry and appends it synchronously to the JSON file |

### API Swagger Docs

When the server is running, you can explore and test the endpoints directly from your browser by visiting:

```text
http://localhost:3000/docs
```

## Database Schema sample

The data is saved locally inside `data/items.json` using the following structural baseline:

```json
[
  {
    "id": "c6b1514f-f8c4-0837-b417-cdbf88ace15a",
    "title": "Study Fastify Architecture",
    "createdAt": "2026-10-13T02:14:31.635Z"
  }
]
```
