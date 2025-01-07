import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useAuth } from '../../context/AuthContext';

const LogoutScreen = ({ navigation }) => {
  const { logout } = useAuth();

  useEffect(() => {
    const performLogout = async () => {
      await logout();
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }], // Redirigir al login
      });
    };

    performLogout();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cerrando sesión...</Text>
      <ActivityIndicator size="large" color="#007bff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default LogoutScreen;
