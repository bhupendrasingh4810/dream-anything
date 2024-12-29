# Project Structure for NestJS Application

This document outlines the structure of a comprehensive NestJS application with modular design, emphasizing scalability, reusability, and maintainability.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Folder Structure](#folder-structure)
3. [Core Features](#core-features)
4. [Business Logic Modules](#business-logic-modules)
5. [Infrastructure](#infrastructure)
6. [Testing](#testing)
7. [Versioning](#versioning)
8. [Global Features](#global-features)

---

## Introduction
This project is designed using the **NestJS framework** to ensure a clean architecture. It includes modularized features, core utilities, infrastructure support, and a structured approach to business logic, testing, and versioning.

---

## Folder Structure

```
/src
├── /core                     # Core modules used across the app
│   ├── /auth                 # Authentication-related logic
│   ├── /security             # Security utilities like guards and strategies
│   ├── /validation           # Shared validation logic
│   ├── /utils                # Shared utilities (logger, constants)
├── /modules                  # Domain-specific modules
│   ├── /users                # User management
│   ├── /sports               # Sports management
│   ├── /matches              # Matches-related features
│   ├── /contests             # Contests-related logic
│   ├── /transactions         # Transaction-related features
│   ├── /leaderboards         # Leaderboard-related features
│   ├── /notifications        # Notification management
│   ├── /promotions           # Promotional campaigns
│   ├── /support              # Support ticketing system
│   ├── /reports              # Report generation
│   ├── /analytics            # Analytics and insights
├── /infrastructure            # Cross-cutting infrastructure modules
│   ├── /database             # Database connection, migrations, seeders
│   ├── /cache                # Caching mechanism
│   ├── /jobs                 # Job scheduling and processing
├── /tests                    # Unit and E2E tests
│   ├── /unit                 # Unit tests
│   └── /e2e                  # End-to-end tests
├── /versioning               # API versioning structure
└── app.module.ts             # Root module
```

---

## Core Features

### Authentication (`core/auth`):
- **Controllers**: Manage auth-related endpoints (e.g., login, registration).
- **Services**: Business logic for authentication.
- **Guards**: Role-based and JWT authentication guards.
- **DTOs**: Data transfer objects for user input validation.

### Security (`core/security`):
- Guards and decorators for role-based access control (RBAC).
- JWT strategy for token management.

### Validation (`core/validation`):
- Centralized DTO validators.
- Custom validation pipes for request data.

### Utilities (`core/utils`):
- Logging middleware.
- Constants and helper functions.

---

## Business Logic Modules

### Domain Modules (`modules`):
Each domain module contains:
- **Controllers**: Define RESTful endpoints.
- **Services**: Implement business logic.
- **DTOs**: Define request/response structures.
- **Entities**: Database schema representation.

Example: `modules/users`
```
/modules/users
├── controllers
├── services
├── modules
├── dto
├── entities
```

---

## Infrastructure

### Database:
- Module for database configuration.
- Providers for repository patterns.
- Support for migrations and seeders.

### Cache:
- Centralized caching mechanism using Redis.
- Cache service for reusable functionality.

### Jobs:
- Background jobs using Bull.
- Email and notification job processors.

---

## Testing

- **Unit Tests**: Validate individual components (e.g., services, controllers).
- **End-to-End Tests**: Test the entire flow of the application.
- Test files are structured under `tests/unit` and `tests/e2e`.

---

## Versioning

- Supports multiple API versions (`v1`, `v2`).
- Controllers are separated by version for backward compatibility.

---

## Global Features

- **Swagger Documentation**: API documentation is available for all endpoints.
- **Global Middleware**: Logging and authentication middleware.
- **Exception Filters**: Centralized error handling.

---

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the application:
   ```bash
   npm run start:dev
   ```
3. Swagger documentation is available at `/api/docs`.

---

## License
This project is licensed under the MIT License.
