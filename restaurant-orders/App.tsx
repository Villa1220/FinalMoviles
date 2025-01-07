import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import UserNavigator from './navigation/UserNavigation';
import AdminNavigator from './navigation/AdminNavigator';
import { AuthProvider, useAuth } from './context/AuthContext';

const AppContent = () => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) return <AuthNavigator />;
  return role === 'admin' ? <AdminNavigator /> : <UserNavigator />;
};

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
