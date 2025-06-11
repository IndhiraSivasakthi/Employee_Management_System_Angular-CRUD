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


## 🧑‍💻 Developer Notes

1.Uses Angular’s HttpClient to perform asynchronous HTTP operations.

2.Clean separation of concerns: UI logic in components, API logic in services, types in models.

3.Easily extensible to integrate a real backend in place of JSONPlaceholder.
