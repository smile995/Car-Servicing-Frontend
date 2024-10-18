import "../../index.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { CarContextAuth } from "../../../public/UseContext/CarContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user,userSignOut } = useContext(CarContextAuth);
  const nabManu = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      <li>
        <NavLink to={"/add-product"}>Add Product</NavLink>
      </li>
      <li>
        <NavLink to={"/add-service"}>Add Service</NavLink>
      </li>
      
    </>
  );
const handleSignOut=()=>{
  userSignOut().then(()=>{
    Swal.fire({
      icon: "success",
      title: "SuccessFully Loged out",
      text: "Something went wrong!",
      
    });
    
  })

  
}
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {nabManu}
            </ul>
          </div>
          <div>
            <Link to={"/"}>
              <img className="md:w-20 w-10" src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nabManu}</ul>
        </div>
        <div className="navbar-end md:gap-5 gap-2">
          {user ? (
           
            <button onClick={handleSignOut} className="btn btn-xs sm:btn-sm md:btn-md   bg-red-600 rounded  text-white font-samibold">Sign Out</button>
          ) : (
            <Link to={'/login'}>
              {/* <button className="btn btn-error rounded  text-white font-samibold">Login</button> */}
              <button  className="btn btn-xs sm:btn-sm md:btn-md   rounded  btn-error  font-samibold text-white font-samibold">Login</button>
            </Link>
          )}
          {user ? (
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content md:w-12 w-8 rounded-full">
                <span>{
                  user.email.slice(0,2)}</span>
              </div>
            </div>
          ) : (
            ""
          )}
         
          <button className="btn btn-outline btn-error btn-xs sm:btn-sm md:btn-md ">Appointment</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
