import { useContext, createContext } from 'react';
// import { signinUser, signupUser } from '../api/auth';
import PropTypes from 'prop-types';
import useAuthStore from '../store/auth';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const user = useAuthStore((state) => state.user);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
