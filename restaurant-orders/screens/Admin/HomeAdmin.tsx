import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';

const HomeAdmin = () => {
  const { userName } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenido, {userName}</Text>
      <Text style={styles.instructions}>Usa el menú para navegar por las opciones.</Text>
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
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    color: '#333',
  },
});

export default HomeAdmin;
