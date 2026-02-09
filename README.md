# TechAgency Full-Stack App

Full-stack web app with a React + Vite frontend and an Express + MongoDB backend.

## Project Structure

- `frontend/` React app (Vite)
- `backend/` Express API server

## Prerequisites

- Node.js 18+ recommended
- MongoDB running locally or a hosted MongoDB URI

## Environment Variables

Create or update these files:

`backend/.env`
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/techservices
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_password
CORS_ORIGIN=http://localhost:5173
SEED_ON_START=true
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

`frontend/.env`
```
VITE_API_URL=http://localhost:5000
VITE_CONTACT_EMAIL=hello@techservices.agency
VITE_WHATSAPP_URL=https://wa.me/1234567890
```

Note: On some Macs, port `5000` is used by AirPlay. If so, change `PORT` to `5001`
and update `VITE_API_URL` to `http://localhost:5001`.

## Install Dependencies

```
cd backend
npm install

cd ../frontend
npm install
```

## Run Locally

In one terminal:
```
cd backend
npm run dev
```

In another terminal:
```
cd frontend
npm run dev
```

Frontend: `http://localhost:5173/`  
Backend health check: `http://localhost:5000/health`

## Scripts

Backend:
- `npm run dev` starts the API with file watching
- `npm start` starts the API in normal mode

Frontend:
- `npm run dev` starts Vite dev server
- `npm run build` builds for production
- `npm run preview` previews the production build
