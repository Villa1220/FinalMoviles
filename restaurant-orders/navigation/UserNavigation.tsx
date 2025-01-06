import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeUser from '../screens/User/HomeUser';
import MenuScreen from '../screens/User/MenuScreen';
import OrderScreen from '../screens/User/OrderScren';
import StatusScreen from '../screens/User/StatusScreen';
import HistoryScreen from '../screens/User/HistoryScreen';

const Drawer = createDrawerNavigator();

const UserNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Inicio">
      <Drawer.Screen name="Inicio" component={HomeUser} />
      <Drawer.Screen name="Ver Menú" component={MenuScreen} />
      <Drawer.Screen name="Realizar Pedido" component={OrderScreen} />
      <Drawer.Screen name="Estado del Pedido" component={StatusScreen} />
      <Drawer.Screen name="Historial de Pedidos" component={HistoryScreen} />
    </Drawer.Navigator>
  );
};

export default UserNavigator;
