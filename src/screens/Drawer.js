import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from './BottomTab';

const Drawer = createDrawerNavigator();

function Feed() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed Screen</Text>
      </View>
    );
}

function Article() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Article Screen</Text>
        </View>
    );
}

export const DrawerComponent = () => {
    return(
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name="Homescreen" component={HomeScreen} />
            <Drawer.Screen name="Feed" component={Feed} />
            <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
    );
}