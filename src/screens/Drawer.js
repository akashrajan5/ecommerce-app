import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from './BottomTab';

const Drawer = createDrawerNavigator();

function NewCollection() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>New Collection Screen</Text>
      </View>
    );
}

function Categories() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Categories Screen</Text>
        </View>
    );
}

function Notifications() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications Screen</Text>
        </View>
    );
}

function Help() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Help Screen</Text>
        </View>
    );
}

function AboutUs() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>About Us Screen</Text>
        </View>
    );
}

export const DrawerComponent = () => {
    return(
        <Drawer.Navigator screenOptions={{
            headerShown: false,
            drawerActiveTintColor: '#000'
            }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="New Collections" component={NewCollection} />
            <Drawer.Screen name="Categories" component={Categories} />
            <Drawer.Screen name="Notifications" component={Notifications} />
            <Drawer.Screen name="Help" component={Help} />
            <Drawer.Screen name="About Us" component={AboutUs} />
        </Drawer.Navigator>
    );
}