import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home} from './Home'
import {Profile} from './Profile';
import {Cart} from './Cart';
import {Wishlist} from './Wishlist';

const Tab = createBottomTabNavigator();

export const HomeScreen = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      tabBarInactiveTintColor: 'grey',
      tabBarActiveTintColor: '#fff',
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: '#000'}
    }}>
      <Tab.Screen name="Homescreen" component={Home} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, focused}) => {return <MaterialCommunityIcons name="home-outline" color={color} size={25} />}
      }} />
      <Tab.Screen name="Wishlist" component={Wishlist} options={{
        tabBarLabel: 'Wishlist',
        tabBarIcon: ({color}) => {return <MaterialCommunityIcons name="cards-heart-outline" color={color} size={25} />}
      }} />
      <Tab.Screen name="Cart" component={Cart} options={{
        tabBarLabel: 'Cart',
        tabBarIcon: ({color}) => {return <MaterialCommunityIcons name="cart-variant" color={color} size={25} />}
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color}) => {return <MaterialCommunityIcons name="account-circle" color={color} size={25} />}
      }} />
    </Tab.Navigator>
  );
}