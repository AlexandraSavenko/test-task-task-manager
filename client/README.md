TaskMan -- Board management app

A board management application built with React, TypeScript, Redux Toolkit, and Node.js/Express with MongoDB. This app allows users to create boards, manage columns and tasks, and drag & drop tasks between columns.

🛠 Features

Create, edit, and delete boards

Add, edit, and delete columns within boards

Add, edit, and delete tasks within columns

Drag and drop tasks between columns

Responsive layout

Global loading and error handling with Redux and toast notifications

Form validation using Formik + Yup/Joi

Backend API with Express, MongoDB, and Mongoose

Clean error handling and validation on the backend

🧰 Tech Stack

Frontend:

React + TypeScript

Redux Toolkit

Formik + Yup

react-hot-toast

@dnd-kit for drag-and-drop

CSS Modules

Backend:

Node.js + Express

MongoDB + Mongoose

Joi for validation

async/await with centralized error handling

🚀 Installation

Clone the repository

git clone <https://github.com/AlexandraSavenko/test-task-task-manager.git>
cd <test-task-task-manager>


Install dependencies

# frontend
cd client
npm install

# backend
cd server
npm install


Set up environment variables
Create a .env file in server with your MongoDB connection string:

MONGO_URI=your_mongo_connection_string
PORT=5000
> ⚠️ Replace `your_mongo_connection_string` with your own MongoDB URI.  
> Never commit your `.env` file containing credentials to GitHub.

Run the project

# start backend
cd server
npm run dev

# start frontend
cd client
npm start

📦 Project Structure
client/               # Frontend (React + TS)
  src/
    app/              # axios initiation
    components/       # Reusable components
    hooks/            # Redux reusable type hooks
    pages/            # Pages / views
    redux/            # Redux slices and store
    schemas/          # Yup schemas
    types/            # typescript reused interfaces
    utils/            # functions
    values/           # Form initial values
  


server/               # Backend (Express + TS)
  controllers/        # API controllers
  db/                 # Mongoose schemas
  middlewares/        # Validation & error handling
  routes/             # Express routes
  services/           # Functions
  types/              # Reusable interfaces
  utils/              # Functions
  validation/         # Joi schemas
       

⚡ Usage

Open the app in your browser (http://localhost:3000)

Create a new board with a name

Add columns to your board

Add tasks to columns

Drag tasks between columns

Edit or delete boards, columns, and tasks as needed

🔧 Notes

Task and column IDs are used to maintain relationships — editing a board or column does not break task connections.

Drag-and-drop updates task status in real time.

Global loader and error notifications help track backend operations.

📜 License

This project is open-source and available under the MIT License.