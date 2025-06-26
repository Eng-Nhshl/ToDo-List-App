# ToDo List App

A full-stack ToDo List application that helps you manage your tasks efficiently.

## Features

- Add new tasks with descriptions
- Mark tasks as complete
- Delete completed tasks
- Real-time task synchronization
- Persistent data storage using backend database
- Responsive design for all devices

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- RESTful API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Eng-Nhshl/ToDo-List-App.git
```

2. Navigate to the project directory:
```bash
cd ToDo-List-App
```

3. Install frontend dependencies:
```bash
cd ToDoListApp
npm install
# or
yarn install
```

4. Install backend dependencies:
```bash
cd ../backend
npm install
# or
yarn install
```

5. Start the backend server:
```bash
cd backend
npm start
# or
yarn start
```

6. Start the frontend development server:
```bash
cd ToDoListApp
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Usage

1. Add a new task by typing in the input field and pressing Enter or clicking the "Add" button
2. Mark tasks as complete by clicking the checkbox
3. Delete tasks by clicking the delete icon
4. Tasks are synchronized with the backend database

## Project Structure

```
ToDo-List-App/
├── ToDoListApp/     # Frontend React application
│   ├── src/
│   │   ├── App.jsx          # Main application component
│   │   ├── components/      # Reusable React components
│   │   ├── styles/          # Global styles and Tailwind configuration
│   │   └── index.css        # Base styles
│   └── ...
│
└── backend/         # Backend Node.js application
    ├── config/      # Configuration files
    ├── controllers/ # API controllers
    ├── models/      # Database models
    ├── routes/      # API routes
    └── server.js    # Main server file
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- React.js
- Vite
- Tailwind CSS
- Icons from Font Awesome

## Support

For support, email eng.nhshl@gmail.com or create an issue in the repository.
