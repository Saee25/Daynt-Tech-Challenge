Description
A simple user management system built with React and Express, featuring user authentication, registration, and dashboard functionality. The system uses local storage for data persistence and includes CRUD operations for user management.
Features
User Registration
User Authentication
Dashboard with User Management
CRUD Operations
Local Storage Persistence
Responsive Design with Material-UI
Technologies Used
React.js
Express.js
Material-UI
React Router DOM
React Toastify
JSON Web Tokens (JWT)
Cors
Dotenv


Usage
Registration Credentials
To use the system, register with these credentials:
javascript


Name: John Doe
Email: john.doe@example.com
Password: Test123!
Date of Birth: 1990-01-01
Login Process
Register using the above credentials
Login with the same email and password
Access the dashboard


Dashboard Features
Create new users
View all users in a table format
Edit existing users
Delete users
Logout functionality
Important Notes
Users must register before logging in
Only registered users can access the dashboard
All data is stored in local storage
Password requirements:
Minimum 8 characters
Must include uppercase and lowercase letters
Must include at least one number
Must include at least one special character
Running the Application
Start the backend server (runs on port 5000)
Start the React frontend (runs on port 3000)
Access the application at http://localhost:3000
Error Handling
Form validation for all inputs
Toast notifications for success/error messages
Protected routes for authenticated users
Contributing
Fork the repository
Create your feature branch
Commit your changes
Push to the branch
Create a new Pull Request