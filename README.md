# Car Servicing (Car Doctor) — Frontend

Minimal React + Vite frontend for a car servicing application with authentication, booking, products and reviews.

## Features
- Client-side routing and protected routes via React Router (see [`router`](src/Routers/Routers.jsx)) — [src/Routers/Routers.jsx](src/Routers/Routers.jsx)
- Firebase authentication and global auth context via [`CarContextAuth`](public/UseContext/CarContext.jsx) — [public/UseContext/CarContext.jsx](public/UseContext/CarContext.jsx)
- Service booking form and order submission (component: [`Booked`](src/Pages/ServiceBook/Booked.jsx)) — [src/Pages/ServiceBook/Booked.jsx](src/Pages/ServiceBook/Booked.jsx)
- Protected pages using a PrivateRoute wrapper (`PrivateRoute`) — [public/PrivateRoute/PrivateRoute.jsx](public/PrivateRoute/PrivateRoute.jsx)
- Product listing, details and order flows (routes defined in the router) — [src/Routers/Routers.jsx](src/Routers/Routers.jsx)
- JWT exchange with backend for tokens (triggered in [`CarContextAuth`](public/UseContext/CarContext.jsx)) — [public/UseContext/CarContext.jsx](public/UseContext/CarContext.jsx)
- Notifications via SweetAlert2 (used in booking flow) — [src/Pages/ServiceBook/Booked.jsx](src/Pages/ServiceBook/Booked.jsx)
- Data fetching utility / custom hooks used across pages (see Hooks folder) — [src/Pages/HomePage/HomePage.jsx](src/Pages/HomePage/HomePage.jsx)

## Technologies
- React + Vite — [vite.config.js](vite.config.js)
- React Router — [src/Routers/Routers.jsx](src/Routers/Routers.jsx)
- Firebase Auth (client) — [public/Firebase/Firebase.Config.js](public/Firebase/Firebase.Config.js)
- Axios (HTTP client) — used in [public/UseContext/CarContext.jsx](public/UseContext/CarContext.jsx) and [src/Pages/ServiceBook/Booked.jsx](src/Pages/ServiceBook/Booked.jsx)
- Tailwind CSS — [tailwind.config.js](tailwind.config.js), [postcss.config.js](postcss.config.js)
- SweetAlert2 — [src/Pages/ServiceBook/Booked.jsx](src/Pages/ServiceBook/Booked.jsx)

## Quick Start
1. Install dependencies:
   ```sh
   npm install

