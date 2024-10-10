import React from "react";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import img from "../../assets/images/login/login.svg"
import { Link } from "react-router-dom";
const SignUp = () => {
  const handleSignUp=(e)=>{
e.preventDafault()
  }
  return (
    <div className="md:flex justify-around items-center">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="card bg-base-100 h-full w-full max-w-sm border-2 shadow-2xl">
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <h1 className="text-5xl font-bold text-center">SignUp</h1>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
      
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
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
            <Link className="text-[#FF3811] font-bold">SignUp</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
