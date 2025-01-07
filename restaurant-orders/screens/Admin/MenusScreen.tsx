import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenusScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Estamos en Gestión Menú</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default MenusScreen;
