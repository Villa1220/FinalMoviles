import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import UserNavigator from './navigation/UserNavigation';
import { AuthProvider, useAuth } from './context/AuthContext';

const AppContent = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <UserNavigator /> : <AuthNavigator />;
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
