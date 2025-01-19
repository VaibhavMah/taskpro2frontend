import React, { createContext, useState, useEffect } from 'react';

// Create the AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    token: null,
  });

  useEffect(() => {
    // Check for existing token in localStorage
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthState({ isAuthenticated: true, token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
