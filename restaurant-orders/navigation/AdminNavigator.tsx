import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeAdmin from '../screens/Admin/HomeAdmin';
import UsersScreen from '../screens/Admin/UsersScreen';
import MenusScreen from '../screens/Admin/MenusScreen';
import OrdersScreen from '../screens/Admin/OrdersScreen';
import LogoutScreen from '../screens/Admin/LogoutScreen';

const Drawer = createDrawerNavigator();

const AdminNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Inicio">
      <Drawer.Screen name="Inicio" component={HomeAdmin} />
      <Drawer.Screen name="Gestión Clientes" component={UsersScreen} />
      <Drawer.Screen name="Gestión Menú" component={MenusScreen} />
      <Drawer.Screen name="Gestión Órdenes" component={OrdersScreen} />
      <Drawer.Screen name="Cerrar Sesión" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

export default AdminNavigator;
