# Username & Password Generator API

A simple REST API built with **Node.js, Express 5, and TypeScript** that generates username suggestions and random passwords based on user preferences.

## Features

- Generate at least 3 username suggestions from a provided name.
- Generate random passwords with customizable length.
- Choose between uppercase, lowercase, numbers, and symbols.
- Validate inputs and reject invalid configurations.
- Cryptographically secure random generation using Node.js `crypto`.

## Requirements

- Node.js (LTS)
- npm

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd <repository-name>
```

Install dependencies:

```bash
npm install
```

## Running the API

Start the development server:

```bash
npm run dev
```

The API will be available at:

`http://localhost:3000`

## API Endpoints

### 1. GET `/`

Returns a welcome message and API description.

### 2. POST `/username`

Generates username suggestions.

**Request:**

```json
{
  "name": "Akram"
}
```

**Response:**

```json
{
  "usernames": [
    "akram_42",
    "real.akram",
    "akram_dev"
  ]
}
```

### 3. POST `/password`

Generates a random password based on the provided preferences.

**Request:**

```json
{
  "length": 16,
  "include_uppercase": true,
  "include_lowercase": true,
  "include_numbers": true,
  "include_symbols": true
}
```

**Response:**

```json
{
  "password": "aB7@kP2!xM9#qL4z",
  "length": 16
}
```

## Testing

You can test the endpoints using:

- VS Code REST Client extension.
- Postman.
- Any HTTP client.

A ready-to-use `api.http` file is included in the project.

## Technologies

- Node.js
- Express 5
- TypeScript
- Oxlint
- Node.js Crypto API

---

**Made for the ITC Backend Bonus Challenge.**