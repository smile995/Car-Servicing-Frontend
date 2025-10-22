# Car Servicing (Car Doctor) — Frontend

Minimal React + Vite frontend for a car servicing application with authentication, booking, products and reviews.

## Features
- Client-side routing and protected routes via React Router. See [`router`](src/Routers/Routers.jsx) — [src/Routers/Routers.jsx](src/Routers/Routers.jsx)
- Auth context and Firebase integration via [`CarContextAuth`](public/UseContext/CarContext.jsx) — [public/UseContext/CarContext.jsx](public/UseContext/CarContext.jsx)
- Service booking form and order submission using Axios: component [`Booked`](src/Pages/ServiceBook/Booked.jsx) — [src/Pages/ServiceBook/Booked.jsx](src/Pages/ServiceBook/Booked.jsx)
- Home / landing page with service/product lists and sections: [`HomePage`](src/Pages/HomePage/HomePage.jsx) — [src/Pages/HomePage/HomePage.jsx](src/Pages/HomePage/HomePage.jsx)
- Product pages, details and order flows (routes defined in the router) — [src/Routers/Routers.jsx](src/Routers/Routers.jsx)
- Protected pages using a PrivateRoute wrapper — [`PrivateRoute`](public/PrivateRoute/PrivateRoute.jsx) — [public/PrivateRoute/PrivateRoute.jsx](public/PrivateRoute/PrivateRoute.jsx)
- JWT exchange to backend for tokens (see [`CarContextAuth`](public/UseContext/CarContext.jsx)) — [public/UseContext/CarContext.jsx](public/UseContext/CarContext.jsx)
- Notifications using SweetAlert2 (used in booking flow) — [src/Pages/ServiceBook/Booked.jsx](src/Pages/ServiceBook/Booked.jsx)

## Technologies
- React (Vite starter) — [vite.config.js](vite.config.js)
- React Router (client routing) — see [src/Routers/Routers.jsx](src/Routers/Routers.jsx)
- Firebase Auth (client) — [public/Firebase/Firebase.Config.js](public/Firebase/Firebase.Config.js)
- Axios (HTTP client) — used in [public/UseContext/CarContext.jsx](public/UseContext/CarContext.jsx) and [src/Pages/ServiceBook/Booked.jsx](src/Pages/ServiceBook/Booked.jsx)
- Tailwind CSS (styling) — [tailwind.config.js](tailwind.config.js), [postcss.config.js](postcss.config.js)
- SweetAlert2 (alerts) — used in [src/Pages/ServiceBook/Booked.jsx](src/Pages/ServiceBook/Booked.jsx)

## Quick Start
1. Install dependencies:
   ```sh
   npm install