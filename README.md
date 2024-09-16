# Chernobyl Miniseries TV Show Web 

This project is a full-stack web application for managing and displaying show data for the HBO miniseries, Chernobyl, including episodes, cast, and user comments. The frontend is built with React, and the backend is built with Node.js, using MongoDB for data storage. The project is deployed on Vercel.

## Features
- Browse TV show episodes and cast.
- User-generated comments for each episode.
  
## Table of Contents
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running Locally](#running-locally)
- [Project Structure](#project-structure)

## Technologies Used
- Frontend: React.js, CSS
- Backend: Node.js, Express
- Database: MongoDB (Atlas)
- Deployment: Vercel
- API Calls: REST API (using `fetch`)

## Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB Atlas** account (or local MongoDB instance)
- **Vercel** account (optional for deployment)

## Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install Dependencies:**

    Navigate to the project root directory and install backend dependencies:

    ```bash
    cd server
    npm install
    ```

    Navigate to the `client` directory and install frontend dependencies:

    ```bash
    cd ../client
    npm install
    ```

## Environment Variables

You'll need to set up environment variables in both the backend and frontend for local development.

### Backend `.env` (Server)
Create a `.env` file in the `server` directory:

```bash
MONGODB_URI=your-mongodb-connection-string
PORT=5000
```

Replace `your-mongodb-connection-string` with the MongoDB connection string (from MongoDB Atlas or your local MongoDB instance).

### Frontend `.env` (Client)
Create a `.env` file in the `client` directory:

```bash
REACT_APP_API_URL=http://localhost:5000/api
```

This points your React app to your local backend server.

## Running Locally

### Step 1: Start the Backend Server

1. In the `server` directory, run:

    ```bash
    npm start
    ```

   The server will start at `http://localhost:5000`.

### Step 2: Start the Frontend Client

1. In the `client` directory, run:

    ```bash
    npm start
    ```

   The React app will start at `http://localhost:3000`.

### Step 3: Access the Application

1. Open your browser and navigate to `http://localhost:3000`.

   You should be able to interact with the application and view data.

## Project Structure

```
.
├── client
│   ├── public
│   ├── src
│   ├── .env
│   ├── .env.production
│   └── package.json
├── server
│   ├── models
│   ├── routes
│   ├── .env
│   └── server.js
└── vercel.json
```

- `client/`: Contains the React frontend.
- `server/`: Contains the Node.js backend and Express API routes.
- `models/`: Contains MongoDB data models (for episodes, cast, comments, etc.).
- `routes/`: Contains the API endpoints.
- `.env`: Configuration files for environment variables.
- `vercel.json`: Configuration file for deployment on Vercel.

## Running Tests (Optional)

If you have tests set up in your project (e.g., using Jest), you can run them by navigating to the `client` or `server` directory and using:

```bash
npm test
```

## Deployment

To deploy the app to Vercel:

1. Push your code to a GitHub repository.
2. Link your GitHub repo to Vercel.
3. Ensure you have the correct environment variables set in Vercel.

Refer to Vercel's documentation for detailed deployment instructions.

## Contributions

If you would like to contribute to this project, feel free to submit a pull request. Any improvements or suggestions are welcome!

## License

This project is open-source and available under the [MIT License](LICENSE).
