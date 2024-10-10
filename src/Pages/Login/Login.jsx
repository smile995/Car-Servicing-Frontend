import img from "../../assets/images/login/login.svg";

const Login = () => {
  return (
    <div className="md:flex justify-around items-center">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="card bg-base-100 h-full w-full max-w-sm border-2 shadow-2xl">
        <h1 className="text-5xl font-bold">Login</h1>
        <form className="card-body">
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
      </div>
    </div>
  );
};

export default Login;
