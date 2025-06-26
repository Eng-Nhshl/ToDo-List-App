# Todo List Application - Backend

A backend service for a Todo List application built with Node.js and Express.

## Features

- RESTful API endpoints for managing tasks
- MongoDB integration with Mongoose
- Environment configuration support
- Error handling middleware
- Request logging
- CORS support

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## API Endpoints

### Tasks
- GET `/api/tasks` - Get all tasks
- POST `/api/tasks` - Create a new task
- GET `/api/tasks/:id` - Get a specific task
- PUT `/api/tasks/:id` - Update a task
- DELETE `/api/tasks/:id` - Delete a task

## Project Structure

```
backend/
├── controllers/      # API controllers
├── models/          # Database models
├── utils/           # Utility functions and middleware
├── tests/           # Test files
├── app.js           # Main application file
├── index.js         # Application entry point
├── mongoose.js      # MongoDB configuration
└── package.json     # Project dependencies
```

## Testing

Run tests using:
```bash
npm test
```

## Linting

Run ESLint using:
```bash
npm run lint
```
