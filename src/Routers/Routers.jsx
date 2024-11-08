import { createBrowserRouter } from "react-router-dom";
import { Root } from "../MainRoute/Root";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import AddProduct from "../Pages/Add Product/AddProduct";
import AddService from "../Pages/Services/AddService";
import Details from "../Pages/DetailsPage/Details";
import Booked from "../Pages/ServiceBook/Booked";
import Orders from "../Pages/Orders/Orders";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import ProductOrder from "../Pages/ProductOrder/ProductOrder";
import PrivateRoute from "../../public/PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      
     
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/add-product",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/my-orders",
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: "/add-service",
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: "/service/:id",
        loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`),
        element: <PrivateRoute><Details></Details></PrivateRoute>
      },
      {
        path: "/product/:id",
        loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`),
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
      },
      {
        path: "/book/:id",
        loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`),
        element: <PrivateRoute><Booked></Booked></PrivateRoute>
      },
      {
        path: "/order/product/:id",
        loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`),
        element: <ProductOrder></ProductOrder>
      },
    ],
  },
]);
export default router;
