# Microservices Express Workspace

This project is a simple microservices architecture built with Node.js, Express, MongoDB, and Docker Compose. It demonstrates separation of concerns using three main services: **Todo Service**, **User Service**, and an **API Gateway**.

## Project Structure

### Services

- **mongodb**: MongoDB database container, shared by both microservices.
- **todo-service**: Handles todo CRUD operations, connects to its own MongoDB database.
- **user-service**: Handles user CRUD operations, connects to its own MongoDB database.
- **api-gateway**: Forwards `/todo` and `/user` requests to the respective services.

## How It Works

- Each microservice is a standalone Express app with its own models, controllers, and routes.
- The API Gateway uses `http-proxy-middleware` to route requests to the correct service.
- MongoDB runs as a Docker container and is accessed by both microservices using different databases.

## Running the Project

1. **Build and start all services:**

   ```sh
   docker-compose up --build
   ```

2. **Make requests**

   Requests to http://localhost:3000/user go to user-service container
   Requests to http://localhost:3000/todo go to todo-service container
