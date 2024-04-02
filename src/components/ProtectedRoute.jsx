import useAuthStore from '../store/auth';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
