import React, { createContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('tropa_digital_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse user data', error);
        localStorage.removeItem('tropa_digital_user');
      }
    }
    setLoading(false);
  }, []);

  const login = useCallback(async (credentials) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const defaultEmail = import.meta.env.VITE_DEFAULT_EMAIL || 'admin@tropadigital.com';
      const defaultPassword = import.meta.env.VITE_DEFAULT_PASSWORD || '123456';
      
      if (credentials.email === defaultEmail && credentials.password === defaultPassword) {
        const userData = {
          id: '1',
          name: 'Amanda Maia',
          email: credentials.email,
          role: 'Admin',
        };
        
        setUser(userData);
        localStorage.setItem('tropa_digital_user', JSON.stringify(userData));
        return { success: true };
      } else {
        return { 
          success: false, 
          error: 'Email ou senha incorretos' 
        };
      }
    } catch (err) {
      console.error('Login error:', err);
      return { 
        success: false, 
        error: 'Ocorreu um erro durante o login. Tente novamente.' 
      };
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('tropa_digital_user');
    return { success: true };
  }, []);

  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
