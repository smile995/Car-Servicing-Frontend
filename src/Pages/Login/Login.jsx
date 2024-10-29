import { FaFacebook, FaGoogle } from "react-icons/fa";
import img from "../../assets/images/login/login.svg";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CarContextAuth } from "../../../public/UseContext/CarContext";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const { userLogIn, setUser } = useContext(CarContextAuth);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogIn(email, password)
      .then((result) => {
        const user = result.user;
        const token={email}
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You are successfully login",
          showConfirmButton: false,
          timer: 1500,
        });
        setUser(user);
        // navigate(location?.state ? location?.state : "/");
        // form.reset();
        axios.post("http://localhost:5000/jwt",token,{withCredentials:true})
        .then(res=>{
          console.log(res.data);
          
        }).catch(error=>console.log(error)
        )
      })
      .then((error) => console.log(error));
  };
  return (
    <div className="md:flex justify-around items-center">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="card bg-base-100 h-full w-full max-w-sm border-2 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-error" type="submit" value="Login" />
          </div>
        </form>
        <div className="mb-8 space-y-4">
          <p className="text-center ">Or Sign In with </p>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-circle text-3xl text-[#FF3811] font-semibold border-0 btn-outline">
              <FaFacebook></FaFacebook>
            </button>
            <button className="btn btn-circle text-3xl text-[#FF3811] font-semibold border-0 btn-outline">
              <FaLinkedinIn />
            </button>
            <button className="btn btn-circle text-3xl text-[#FF3811] font-semibold border-0 btn-outline">
              <FaGoogle></FaGoogle>
            </button>
          </div>
          <p className="text-center ">
            {" "}
            You have no account?{" "}
            <Link to={"/signup"} className="text-[#FF3811] font-bold">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
