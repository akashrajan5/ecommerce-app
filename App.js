/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home} from './components/screens/Home';
import {Profile} from './components/screens/Profile';
import {Cart} from './components/screens/Cart';
import {Wishlist} from './components/screens/Wishlist';
import {Search} from './components/screens/Search';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      tabBarInactiveTintColor: 'grey',
      tabBarActiveTintColor: '#e91e63',
      headerShown: false,
      tabBarShowLabel: false
    }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => {return <MaterialCommunityIcons name="home" color={color} size={25} />}
      }} />
      <Tab.Screen name="Wishlist" component={Wishlist} options={{
        tabBarLabel: 'Wishlist',
        tabBarIcon: ({color}) => {return <MaterialCommunityIcons name="heart" color={color} size={25} />}
      }} />
      <Tab.Screen name="Search" component={Search} options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({color}) => {return <MaterialCommunityIcons name="magnify" color={color} size={25} />}
      }} />
      <Tab.Screen name="Cart" component={Cart} options={{
        tabBarLabel: 'Cart',
        tabBarIcon: ({color}) => {return <MaterialCommunityIcons name="cart" color={color} size={25} />}
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color}) => {return <MaterialCommunityIcons name="account-circle" color={color} size={25} />}
      }} />
    </Tab.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};


export default App;