# VUN Tech – Full-Stack Tech Agency Web Application

A production-ready full-stack web application built using **React (Vite)**, **Node.js**, **Express.js**, and **MongoDB Atlas**, deployed on **Netlify** and **Render**. The platform provides a modern tech agency interface with a secure admin panel to manage services, projects, categories, and trending products.

---

##  Live Demo

**Frontend (Netlify):**  
https://vun-tech.netlify.app/

---

##  Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Axios
- Responsive UI

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose ODM
- JWT Authentication
- REST API Architecture

### Deployment
- Frontend deployed on Netlify
- Backend deployed on Render
- Database hosted on MongoDB Atlas

---

##  Project Structure


VUN-tech/

- frontend/ # React frontend (Netlify)

- backend/ # Express backend API (Render)

- README.md


---

##  Features

- Full-stack production deployment
- Secure admin authentication using JWT
- Admin panel functionality to:
  - Manage services
  - Manage projects
  - Manage categories
  - Manage trending products
- MongoDB Atlas cloud database integration
- RESTful API architecture
- Security middleware:
  - Helmet
  - CORS protection
  - Rate limiting
- Razorpay payment integration ready
- Fully responsive modern UI
- Production-ready deployment architecture

---

## Environment Variables

### Backend (.env)


- PORT=5001
- MONGO_URI=mongodb_atlas_connection_string
- JWT_SECRET=your_jwt_secret

- ADMIN_EMAIL=admin_email
- ADMIN_PASSWORD=admin_password

- CORS_ORIGIN=https://vun-tech.netlify.app

- SEED_ON_START=true

- RAZORPAY_KEY_ID=razorpay_key
- RAZORPAY_KEY_SECRET=razorpay_secret


---

### Frontend (.env)


- VITE_API_URL=https://backend
- VITE_CONTACT_EMAIL=hello@techservices.agency

- VITE_WHATSAPP_URL=https://wa.me/my_number


---

##  Run Project Locally

### Run Backend


cd backend
npm install
npm run dev


Backend runs on:  
http://localhost:5001

---

### Run Frontend


cd frontend
npm install
npm run dev


Frontend runs on:  
http://localhost:5173

---

##  Deployment Architecture


User
│
 - Netlify (Frontend)
│

 - Render (Backend API)
│

 - MongoDB Atlas (Database)


---

##  Contributors

This project was developed as a collaborative full-stack contribution project.

### Uday Chandra
- Backend development
- MongoDB Atlas integration
- Render deployment
- REST API architecture
- Authentication and admin system
- Production deployment and backend configuration

### Vaani Sharma
- Frontend development
- UI implementation
- React component development
- Frontend-backend integration
- Responsive design implementation

### Nitesh Pal
- Project collaboration and coordination
- Frontend and backend integration support
- Testing and project setup assistance
- Repository management and project maintenance

---

## License

This project is created for portfolio, learning, and professional development purposes.
