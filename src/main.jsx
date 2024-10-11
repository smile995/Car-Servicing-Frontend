import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/Routers.jsx";
import CarContext from "../public/UseContext/CarContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CarContext>
      <RouterProvider router={router}></RouterProvider>
    </CarContext>
  </StrictMode>
);
