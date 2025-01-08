# Orders Management App

A full-stack application built using React, Node.js, Express, TypeScript, and MongoDB. This application allows users to create, view, update, and delete orders.

**Table of Contents**

-   [Project Overview](#project-overview)
-   [Technologies Used](#technologies-used)
-   [Getting Started](#getting-started)
    -   [Frontend Setup](#frontend-setup)
    -   [Backend Setup](#backend-setup)
-   [Project Structure](#project-structure)
    -   [Frontend](#frontend-structure)
    -   [Backend](#backend-structure)
-   [Environment Variables](#environment-variables)
-   [Run the Application Locally](#run-the-application-locally)


## Project Overview

This is an **Orders Management System** built to manage customer orders. The application includes a backend built with **Node.js** and **MongoDB**, providing an API to create, update, view, and delete orders. The frontend is developed using **React**, **React Query**, and **TypeScript**.

## Features:

-   Create, update, and delete orders.
-   View detailed order information.
-   API communication handled via React Query.
-   Data persistence with MongoDB.

## Technologies Used

-   **Frontend:**
    -   React (with TypeScript)
    -   React Query for data fetching
    -   Material UI (for UI components)
-   **Backend:**
    -   Node.js (with TypeScript)
    -   Express.js
    -   MongoDB (with Mongoose)

# Getting Started

## Frontend Setup

  - "Navigate to the frontend directory"
    command: 
    ```bash 
    "cd frontend"
     ```
  - "Install frontend dependencies"
    command: 
    ```bash 
    "npm install"
     ```
  - "Start the frontend development server"
    command:
    ```bash  
    "npm start"
     ```
    note: "This will start the React app on http://localhost:3000"

## Backend Setup

  - "Navigate to the backend directory"
    command:
     ```bash  
    "cd backend"
     ```
  - "Install backend dependencies"
    command:
     ```bash
       "npm install"
     ```
  - "Create a .env file in the /backend directory"
    content: |
      MONGO_URI=mongodb://localhost:27017/ordersdb
      PORT=5000
  - "Start the backend server"
    command: 
    ```bash  
    "npm run dev"
     ```
    note: "This will start the server on http://localhost:5000"

# Project Structure

## Frontend Structure


├── /src

├── /components

├── OrdersList.tsx \# Component to list all orders

├── CreateEditOrder.tsx \# Component to create or edit an order

├── OrderDetails.tsx \# Component to view order details

├── /api

├── ordersApi.ts \# API functions for interacting with the backend

├── /Layout

├── Footer.tsx \# Footer component

├── Header.tsx \# Header component

├── Sidebar.tsx \# Sidebar component

├── App.tsx \# Main application component

├── index.tsx \# Entry point for React

├── react-app-env.d.ts \# TypeScript environment definitions

├── routes.ts \# Frontend routes configuration

├── package.json \# Frontend dependencies and scripts

## Backend Structure


```bash

backend/
```

├── server.ts \# Main entry point for the backend

├── .env \# Environment variables (MongoDB URI, etc.)

├── models/

├── Order.ts \# Mongoose schema for Order

├── routes/

├── orderRoutes.ts \# API routes for orders

├── controllers/

├── orderController.ts \# Logic for handling order operations

## Environment Variables

Create a .env file in the backend folder to configure the MongoDB connection string:

env

```bash

MONGODB_URI=mongodb://localhost:27017/orders

```

You can also configure other environment variables if needed.

**Run the Application Locally**

To run the full-stack application locally, follow these steps:

1.  **Set up MongoDB:** Make sure MongoDB is installed and running on your local machine or configure the MONGODB_URI environment variable to point to a remote MongoDB instance.
2.  **Start the backend:**
    -   Navigate to the backend folder and run:

```bash
npm start
```

-   The backend API will run on <http://localhost:5000>.
3.  **Start the frontend:**
    -   Navigate to the frontend folder and run:



```bash

npm start

```

-   The frontend will be served at http://localhost:3000.

You can now interact with the Orders Management App by visiting the frontend URL.

