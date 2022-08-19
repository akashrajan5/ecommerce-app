/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerComponent} from './src/screens/Drawer';


const App = () => {
  return (
    <NavigationContainer>
      <DrawerComponent />
    </NavigationContainer>
  );
};


export default App;