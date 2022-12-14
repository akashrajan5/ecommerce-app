import React from "react";
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity, StatusBar} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useDrawerStatus} from '@react-navigation/drawer';


export const Header = () => {
  const navigation = useNavigation(); 
  const isDrawerOpen = useDrawerStatus();
  return(
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          {isDrawerOpen === "open" ?
            <MaterialCommunityIcons style={styles.iconColor} name="menu-open" size={27} />
            : <MaterialCommunityIcons style={styles.iconColor} name="menu" size={27} />}
        </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <MaterialCommunityIcons style={styles.iconColor} name="magnify" size={27} />
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
      height: hp('6.5%'),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: 16,
      paddingLeft: 12,
      marginTop: StatusBar.currentHeight
    },
    iconColor: {
      color: '#000'
    }
})