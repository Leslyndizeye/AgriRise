# AgriRise Project

AgriRise is an e-commerce platform designed to help farmers access agricultural products and services. It includes a user interface for both farmers and admins, a backend for managing data, and utilizes MongoDB Atlas for the database.

## Features
- **Admin Panel**: Manage products, users, and more.
- **Farmer Dashboard**: A user-friendly interface for farmers to purchase products.
- **User Login/Signup**: Authentication for both users and admins.

## Project Setup

### 1. Backend Setup

#### Requirements:
- Node.js (v16 or higher)
- MongoDB Atlas Account
- Express.js

#### Steps:
1. **Navigate to the `backend` folder**:
    ```bash
    cd backend
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Create a `.env` file in the `backend` folder** and add the following environment variables:
    ```env
    MONGO_URI=mongodb://AgriRise:l2wDepUwTUXBmizU@cluster0-shard-00-00.viifw.mongodb.net:27017,cluster0-shard-00-01.viifw.mongodb.net:27017,cluster0-shard-00-02.viifw.mongodb.net:27017/AgriRise?ssl=true&replicaSet=atlas-14ddpe-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0
    JWT_SECRET=l2wDepUwTUXBmizU
    PORT=your_preferred_port (e.g. 4000)
    ```

4. **Start the Backend**:
    ```bash
    node index.js
    ```
    Your backend will now be running on the specified port (e.g., `http://localhost:5000`).

### 2. Frontend Setup

#### Requirements:
- Node.js (v16 or higher)

#### Steps:
1. **Navigate to the `front-end` folder**:
    ```bash
    cd front-end/vite-project/src
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the Frontend**:
    ```bash
    npm run dev
    ```
    Your frontend will now be running at `http://localhost:3000` or whichever port Vite assigns.

### 3. Admin Setup

#### Requirements:
- Admin URL for login and dashboard

#### Steps:
1. **Navigate to the Admin Panel**:
    Visit the admin login page at [https://agririseweb.netlify.app/logins](https://agririseweb.netlify.app/logins).

2. **Login as Admin**:
    Use the admin credentials provided to access the admin dashboard and manage the platform.

3. **Run Admin in Development Mode**:
    If you're running it locally, navigate to the `admin` folder and run the following:
    ```bash
    npm run dev
    ```

### 4. URLs

- **Admin Login**: [https://agririseweb.netlify.app/logins](https://agririseweb.netlify.app/logins)
- **User Homepage**: [https://agririseweb.netlify.app/](https://agririseweb.netlify.app/)
- **Farmer Dashboard**: [https://web-agririse.netlify.app/](https://web-agririse.netlify.app/)

### 5. Testing API Endpoints

You can use **Thunder Client** or **Postman** to test the backend API endpoints.

- **Base URL for API**: `http://localhost:5000` (or the URL of your backend server if deployed)

### 6. Deploying on Netlify

Both the **admin panel** and the **user interface** are deployed on **Netlify** for live usage. The **backend** can be deployed on services like **Heroku**, **Render**, or any cloud provider with Node.js support.

---

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Express.js, Node.js, MongoDB Atlas
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Netlify (for frontend and admin), MongoDB Atlas (for database)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
