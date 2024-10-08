import { createBrowserRouter } from "react-router-dom";
import { Root } from "../MainRoute/Root";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element:<HomePage></HomePage>
        },
        {
          path: "/about",
          element:<About></About>
        },
        {
          path: "/services",
          element:<Services></Services>
        },
        {
          path: "/blog",
          element:<Blog></Blog>
        },
        {
          path: "/contact",
          element:<Contact></Contact>
        },
      ],
    },
  ]);
  export default router