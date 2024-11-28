# **AgriRise**

AgriRise is a full-stack e-commerce platform designed to connect Rwandan farmers with buyers, facilitating the sale of agricultural products and enhancing market access. This platform offers an easy way for farmers to list their products, access a broader marketplace, and increase their income.

---

## **Table of Contents**

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Admin Setup](#admin-setup)
- [Running the Application](#running-the-application)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Admin](#admin)
- [Contributing](#contributing)
- [License](#license)

---

## **Project Overview**

AgriRise aims to empower Rwandan farmers by providing them with an e-commerce platform to sell their agricultural products. The platform includes:

- A **backend** for handling product listings, transactions, and user authentication.
- A **frontend** for buyers and farmers to interact with the platform, including searching for products and managing the shopping cart.
- An **admin panel** for managing the platform’s users, products, and orders.

---

## **Tech Stack**

- **Backend**: Node.js, Express.js
- **Frontend**: React, Vite.js, Tailwind CSS
- **Admin Panel**: React, Vite.js, Tailwind CSS
- **Database**: MongoDB(Atlas Mongodb)

---

## **Installation**

To get started with **AgriRise**, follow the steps below to clone and run the project on your local machine.

### **Backend Setup**

1. Clone the repository:
   ```bash
   git clone https://github.com/Leslyndizeye/AgriRise.git


2. Navigate to the backend directory:
   ```bash
   cd AgriRise/backend
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the backend server:
   ```bash
   node index.js
   ```

The backend will now be running locally.

---

### **Frontend Setup**

1. Navigate to the frontend project directory:
   ```bash
   cd AgriRise/front-end/vite-project
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

Your frontend will now be accessible at [http://localhost:3000](http://localhost:3000).

---

### **Admin Setup**

1. Navigate to the admin panel directory:
   ```bash
   cd AgriRise/admin
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the admin panel:
   ```bash
   npm run dev
   ```

The admin panel will now be accessible at [http://localhost:5173](http://localhost:5173).

---

## **Running the Application**

Now that you have set up the backend, frontend, and admin panel, follow these steps to run the entire application.

### **Backend**

1. Start the backend server (if not already running):
   ```bash
   cd AgriRise/backend
   node index.js
   ```

### **Frontend**

1. Start the frontend development server (if not already running):
   ```bash
   cd AgriRise/front-end/vite-project
   npm run dev
   ```

### **Admin**

1. Start the admin panel (if not already running):
   ```bash
   cd AgriRise/admin
   npm run dev
   ```

---

## **Contributing**

If you’d like to contribute to the AgriRise project, feel free to submit issues or pull requests. We welcome contributions to help improve the platform for farmers and buyers.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new pull request.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Notes:

- Make sure all the environment variables and database connections are properly set up.
- The frontend, backend, and admin panel are developed independently, but they work together when running the full application.
- If you encounter any issues during setup or need help with configuration, feel free to raise an issue in the repository.

---

### Instructions for usage:
1. Create a new file in your project’s root directory called `README.md` if it doesn't already exist.
2. Paste the provided code into the new file.
3. Customize any section if necessary, especially where you mention the database (if you're using something specific) or additional configuration steps that might be required for your project.

Let me know if you need any more adjustments!


