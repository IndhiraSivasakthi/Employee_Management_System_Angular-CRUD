# 🧑‍💼 Employee Management System - Angular

A CRUD (Create, Read, Update, Delete) application built using **Angular** and **JSONPlaceholder API**. This project showcases core Angular concepts like data binding, component interaction, form handling, HTTP requests, and dynamic table rendering.

## 🚀 Features

- ✅ **Add Employee**: Add a new employee using form input.
- 🔁 **Update Employee**: Instantly populate form to edit an employee's details.
- ❌ **Delete Employee**: Remove an employee using the API.
- 🧹 **Clear Form**: Reset all input fields in one click.
- 📊 **Employee Table**: View all employees in a structured, scrollable table.
- 📱 **Responsive UI**: Works smoothly on desktops, tablets, and mobile devices.

## 🌐 API Integration

This project uses the free [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) to perform HTTP operations:

- **GET** `/users` – Fetch list of users
- **POST** `/users` – Add a new user
- **PUT** `/users/:id` – Update a user
- **DELETE** `/users/:id` – Delete a user

> ⚠️ JSONPlaceholder is a mock API, so POST/PUT/DELETE won't permanently modify the backend but will return simulated success responses.

## 🛠️ Tech Stack

| Technology     | Description                    |
|----------------|--------------------------------|
| Angular        | Frontend Framework             |
| TypeScript     | Programming Language           |
| HTML/CSS       | UI Structure & Styling         |
| JSONPlaceholder | Mock REST API for testing     |
| RxJS & HttpClient | Angular HTTP operations     |


## 📁 Project Structure

src/
│
├── app/
│   │
│   ├── services/
│   │   └── employee.service.ts      // Handles HTTP operations (can be extended for real APIs)
│   │
│   ├── models/
│   │   └── employee.model.ts        // Defines the Employee data structure (TypeScript interface/class)
│   │
│   ├── app.component.html           // Main HTML layout for the employee management system
│   ├── app.component.ts             // Main TypeScript logic (Add, Update, Delete, Clear functions)
│   ├── app.component.css            // Styling for the entire app (form, table, buttons)
│   ├── app.module.ts                // Declares all components and services used in the app
│   └── app-routing.module.ts         // Optional (if routing is implemented)


