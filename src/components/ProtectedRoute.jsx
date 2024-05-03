import useAuthStore from '../store/auth';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const ProtectedRoute = () => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return (
    <>
      <Navbar />
      <div className="w-full flex">
        <Sidebar />
        <div className="w-full lg:w-[75%] lg:ml-auto lg:flex lg:items-center lg:justify-center  mt-10 p-5 lg:p-10">
          <div className="w-full lg:w-3/4 lg:p-5 lg:rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProtectedRoute;

