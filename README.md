# Microsoft SSO Integration

This repository demonstrates the implementation of Single Sign-On (SSO) using Microsoft Azure Active Directory for authentication. The application is built with **React**, **Fastify**, and **MongoDB**.

## Features

- Microsoft Azure AD authentication using MSAL (Microsoft Authentication Library)
- Multi-tenant and personal account support
- Profile management: View and update user details (name, email, avatar)
- Backend API integration with Fastify
- MongoDB for user data storage

---

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [License](#license)

---

## Getting Started

Follow the instructions below to clone the project and set it up for development.

### Prerequisites

Ensure the following tools are installed on your system:
- **Node.js** (v18.x or later)
- **MongoDB** (v6.x or later)
- **Azure AD Tenant** with a registered application
- A modern web browser for running the frontend

---

## Setup Instructions

### 1. Clone the Repository
bash
git clone https://github.com/abhinavrbharadwaj7/microsoft__sso.git
cd microsoft__sso
For Frontend
env
Copy code
REACT_APP_CLIENT_ID=<your-azure-app-client-id>
REACT_APP_AUTHORITY=https://login.microsoftonline.com/<tenant-id>
REACT_APP_REDIRECT_URI=http://localhost:3000
For Backend
env
Copy code
MONGO_URI=mongodb://localhost:27017/microsoft_sso
PORT=5000
3. Install Dependencies
Frontend
bash
Copy code
cd frontend
npm install
Backend
bash
Copy code
cd ../backend
npm install
4. Start the Applications
Frontend
bash
Copy code
npm start
Frontend will run at http://localhost:3000.

Backend
bash
Copy code
cd ../backend
npm run dev
Backend will run at http://localhost:5000.

