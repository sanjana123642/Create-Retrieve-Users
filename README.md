# Create and Retrieve Users API

## About the Project

This project is a REST API built using Express.js, MongoDB, and Mongoose.

The application allows users to:

- Add new users to MongoDB using a POST request.
- Retrieve all users from MongoDB using a GET request.

The project follows a proper folder structure with separate files for schema, model, and router logic.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman
- MongoDB Compass

## Project Structure

```text
Create-Retrieve-Users/
│
├── model/
│   └── userModel.js
│
├── router/
│   └── userRouter.js
│
├── schema/
│   └── userSchema.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js

User Schema

The user schema contains the following fields:

name - User's name
email - User's email
age - User's age
course - User's course
API Endpoints
Create User

Method: POST

Endpoint:

/api/users

URL:

http://localhost:3000/api/users

Request Body:

{
    "name": "Rahul",
    "email": "rahul@gmail.com",
    "age": 22,
    "course": "MCA"
}
Retrieve Users

Method: GET

Endpoint:

/api/users

URL:

http://localhost:3000/api/users

This API retrieves all users stored in MongoDB.

MongoDB Database

Database name:

userDB

Collection name:

users

MongoDB Compass can be used to view the stored user data.

How to Run the Project
Install Dependencies
npm install
Start MongoDB

Make sure MongoDB is running on your system.

Start the Server
node server.js

The server will run on:

http://localhost:3000

A successful MongoDB connection displays:

MongoDB connected successfully
Testing

The APIs can be tested using Postman.

POST Request
POST http://localhost:3000/api/users
GET Request
GET http://localhost:3000/api/users

MongoDB Compass can be used to verify the stored user data.

Conclusion

This project demonstrates how to create a REST API using Express.js and connect it with MongoDB using Mongoose. It implements separate schema, model, and routing files and performs Create and Retrieve operations on user data.
