# E-Learning Full Stack Application

This is a full-stack e-learning web application where users can sign up, log in, explore online courses, add them to a cart, and simulate a checkout experience. The application uses a custom backend (Node.js + Express) with MongoDB for storing user data and course flow. It also includes browser automation testing using Selenium.

---

## Screenshots

**Home Page**  
![Home Page](https://github.com/user-attachments/assets/e617d491-ac4a-40f5-96e3-b3d8c32d4484)

**Login Page**  
![Login Page](https://github.com/user-attachments/assets/f9407001-00df-4b28-9a9f-64eb4703f77a)

**Cart Page**  
![Cart Page](https://github.com/user-attachments/assets/08ade0fb-ba0f-4080-82df-23f6e17b0e9d)


## Technical Overview

- **Frontend**: React.js
- **Backend**: Node.js + Express
- **Database**: MongoDB (via Mongoose)
- **Testing**: Selenium + ChromeDriver
- **Styling**: CSS + Bootstrap

The frontend communicates with backend APIs for user authentication and cart operations. Course previews are embedded using YouTube links.


## Backend Setup (Node + MongoDB)
- cd backend
- npm install
- node server.js


## Selenium Automation Test
The project includes a Selenium-based test that automates:

- Navigating to homepage
- Testing login page
- Clicking through tabs

**Run using**:
node tests/Automation.js

## Authentication Flow
- Passwords stored in plain text (in demo)
- MongoDB stores user credentials
- Conditional rendering for login/logout states

## Future Improvements
- Add JWT-based token authentication
- Real-time course progress tracking
- Integrate Razorpay/PayPal
- Admin dashboard for course management

