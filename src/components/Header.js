import React from "react";
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity, StatusBar} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Header = () => {
  const navigation = useNavigation(); 
  return(
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons style={styles.iconColor} name="menu" size={27} />{/*onclick change name="menu-open" */}
        </TouchableOpacity>
        <View style={styles.rightView}>
          <View style={{marginRight: 20}}>
            <TouchableOpacity>
              <MaterialCommunityIcons style={styles.iconColor} name="message-badge" size={24} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <MaterialCommunityIcons style={styles.iconColor} name="magnify" size={27} />
            </TouchableOpacity>
          </View>
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
      paddingRight: 18,
      paddingLeft: 12,
      marginTop: StatusBar.currentHeight
    },
    rightView: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    iconColor: {
      color: '#000'
    }
})