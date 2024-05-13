# Vital Monitoring Backend

This is the backend project for the Vital Monitoring system, built with NestJS, Fastify, Prisma, PostgreSQL, and TypeScript.

## Features

- User authentication and authorization using JWT and role-based access control
- CRUD operations for doctors, patients, vital signs, thresholds, and alerts
- Secure API endpoints with role-based access control
- Integration with PostgreSQL database using Prisma ORM

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database
- Prisma CLI

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/vital-monitoring-backend.git
   ```
2. Install the dependencies:

   ```
   cd vital-monitoring-backend
   npm install
   ```
3. Create a `.env` file based on the `.env.example` file and update the database connection URL:

   ```
   cp .env.example .env
   ```
4. Update the `DATABASE_URL` in the `.env` file with your PostgreSQL connection URL.
5. Run the database migrations:

   ```
   npx prisma migrate dev
   ```
6. Start the development server:

   ```
   npm run start:dev
   ```

The server will be running at `http://localhost:3000`.

## Configuration

You can configure the application by modifying the `.env` file. The available configuration options are:

- `DATABASE_URL`: The PostgreSQL connection URL.
- `JWT_SECRET`: The secret key used for signing and verifying JWT tokens.
- `JWT_EXPIRES_IN`: The expiration time for JWT tokens (e.g., `1d` for 1 day).

## API Endpoints

The following API endpoints are available:

- Authentication:

  - `POST /auth/login`: Authenticate user and obtain JWT token.
- Doctors:

  - `GET /doctors`: Get all doctors (admin only).
  - `GET /doctors/:id`: Get a specific doctor (admin and the specific doctor).
  - `POST /doctors`: Create a new doctor (admin only).
  - `PATCH /doctors/:id`: Update a doctor (admin and the specific doctor).
  - `DELETE /doctors/:id`: Delete a doctor (admin only).
- Patients:

  - `GET /patients`: Get all patients (admin and doctors).
  - `GET /patients/:id`: Get a specific patient (admin, doctors, and the specific patient).
  - `POST /patients`: Create a new patient (admin and doctors).
  - `PATCH /patients/:id`: Update a patient (admin, doctors, and the specific patient).
  - `DELETE /patients/:id`: Delete a patient (admin only).
- Vital Signs:

  - `GET /vital-signs`: Get all vital signs (admin and doctors).
  - `GET /vital-signs/:id`: Get a specific vital sign (admin, doctors, and the specific patient).
  - `POST /vital-signs`: Create a new vital sign (admin and doctors).
  - `PATCH /vital-signs/:id`: Update a vital sign (admin and doctors).
  - `DELETE /vital-signs/:id`: Delete a vital sign (admin only).
- Thresholds:

  - `GET /thresholds`: Get all thresholds (admin and doctors).
  - `GET /thresholds/:id`: Get a specific threshold (admin, doctors, and the specific patient).
  - `POST /thresholds`: Create a new threshold (admin and doctors).
  - `PATCH /thresholds/:id`: Update a threshold (admin and doctors).
  - `DELETE /thresholds/:id`: Delete a threshold (admin only).
- Alerts:

  - `GET /alerts`: Get all alerts (admin and doctors).
  - `GET /alerts/:id`: Get a specific alert (admin, doctors, and the specific patient).
  - `POST /alerts`: Create a new alert (admin and doctors).
  - `PATCH /alerts/:id`: Update an alert (admin and doctors).
  - `DELETE /alerts/:id`: Delete an alert (admin only).

For detailed information about request and response formats, refer to the `requests.http` file.

## Testing

To run the tests, use the following command:

```
npm test
```

## Deployment

To deploy the application, you can use platforms like Heroku, AWS, or any other hosting provider that supports Node.js applications.

Make sure to set the necessary environment variables in the production environment.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
