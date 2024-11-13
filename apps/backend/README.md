# Backend

## Description

This is the backend for the course and user management application. It is built with NestJS and uses Prisma for interaction with the MySQL database.

## Requirements

- Node.js 20.x
- Docker
- MySQL

## Installation

1. Clone the repository:

```sh
git clone https://github.com/devalexanderdaza/etraining.git etraining-backend-devalexanderdaza
```

```sh
cd etraining-backend-devalexanderdaza
```

2. Install the dependencies:

```sh
pnpm install
```

3. Configure the environment variables by creating a `.env` file in the root of the project and adding your values:

```env
DATABASE_URL=mysql://USER:PASSWORD@localhost:3306/DATABASE
SECRET_KEY=your_jwt_secret
TOKEN_EXPIRATION=
```

4. Run the database migrations:

```sh
pnpm prisma:deploy
```

```sh
pnpm prisma generate
```

5. Seed the database with initial data:

```sh
pnpm prisma db seed
```

## Docker

You can build and run the application using Docker.

1. Build the Docker image:

```sh
docker build -t nestjs-app .
```

2. Run the container:

```sh
docker run -p 5000:5000 --env-file .env nestjs-app
```

## Usage

The application exposes several endpoints for managing courses and users. You can use tools like Postman or cURL to interact with these endpoints.

### Authentication

To authenticate, send a POST request to `/auth/login` with the credentials:

```sh
curl --location 'http://127.0.0.1:5000/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "<your-first-user>",
    "password": "any-password"
}'
```

This will return a JWT token that should be used in subsequent requests.

### Endpoints

- **POST /auth/login**: Authenticate user.
- **GET /courses**: Get the list of courses.
- **POST /courses**: Create a new course.
- **GET /users**: Get the list of users.
- **POST /users**: Create a new user.

---

*This project is maintained by [devalexanderdaza](https://github.com/devalexanderdaza).*
