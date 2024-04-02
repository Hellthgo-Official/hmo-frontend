import { useContext, createContext, useState, useEffect } from 'react';
// import { signinUser, signupUser } from '../api/auth';
import PropTypes from 'prop-types';
import useAuthStore from '../store/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = useAuthStore.getState().user;
    console.log(user);
    if (user) {
      setUser(JSON.parse(user));
    }
  }, [user]);

  const value = {
    user,
    // signinUser,
    // signupUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export const useAuth = () => {
  return useContext(AuthContext);
};
