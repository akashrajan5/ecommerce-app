import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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

function CustomDrawer(props) {
    return(
        <View style={{flex: 1, backgroundColor: "#000"}}>
            <DrawerContentScrollView {...props} style={{backgroundColor: "#fff"}}>
                <View style={styles.drawerView}>
                    <Image source={require('../assets/images/profile-pic.jpg')} style={styles.profilePic}/>
                    <Text style={{color: '#000', fontSize: 23, fontWeight: '500', marginBottom: 1, marginTop: 9}}>Annonymous</Text>
                    <Text style={{color: '#999999'}}>annonymoususer@gmail.com</Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    );
}

export const DrawerComponent = () => {
    return(
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} screenOptions={{
            headerShown: false,
            drawerActiveTintColor: '#000',
            drawerLabelStyle: { marginLeft: -25}
            }}>
            <Drawer.Screen name="Home" component={HomeScreen} options={{drawerIcon: ({color}) => 
                <MaterialCommunityIcons name="home-outline" color={color} size={25} />
            }}/>
            <Drawer.Screen name="New Collections" component={NewCollection} options={{drawerIcon: ({color}) => 
                <MaterialCommunityIcons name="bookmark-box-multiple-outline" color={color} size={25} />
            }}/>
            <Drawer.Screen name="Categories" component={Categories} options={{drawerIcon: ({color}) => 
                <MaterialCommunityIcons name="shape-outline" color={color} size={25} />
            }}/>
            <Drawer.Screen name="Notifications" component={Notifications} options={{drawerIcon: ({color}) => 
                <MaterialCommunityIcons name="message-badge-outline" color={color} size={25} />
            }}/>
            <Drawer.Screen name="Help" component={Help} options={{drawerIcon: ({color}) => 
                <MaterialCommunityIcons name="help-circle-outline" color={color} size={25} />
            }}/>
            <Drawer.Screen name="About Us" component={AboutUs} options={{drawerIcon: ({color}) => 
                <MaterialCommunityIcons name="account-group-outline" color={color} size={25} />
            }}/>
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    profilePic: {
        width: 70,
        height: 70,
        borderRadius: 50,
        resizeMode: 'contain'
    },
    drawerView: {
        marginHorizontal: 17,
        marginTop: 25,
        marginBottom: 13
    }
})