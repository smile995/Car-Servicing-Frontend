import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../../src/Hooks/useAuthContext";

const PrivateRoute = ({ children }) => {

  const { loading, user } = useAuthContext()
  const location=useLocation()

  if (loading) {
    return (
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} replace />;
};

export default PrivateRoute;
