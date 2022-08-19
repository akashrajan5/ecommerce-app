import React from "react";
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Header = () => {
  const navigation = useNavigation(); 
  return(
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons name="menu" size={27} />{/*onclick change name="menu-open" */}
        </TouchableOpacity>
        <View style={styles.rightView}>
          <View style={{marginRight: 17}}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="message-badge" size={24} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <MaterialCommunityIcons name="magnify" size={27} />
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
      height: hp('6.5%'),
      backgroundColor: '#ffffff00',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: 15,
      paddingLeft: 12
    },
    rightView: {
      flexDirection: 'row',
      alignItems: 'center'
    }
})