import React from "react";
import {View, Text, StyleSheet, Image, Pressable, TouchableOpacity, useWindowDimensions, ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Header} from "../components/Header";

export const Cart = () => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  return(
    <>
      <Header/>
      <View style={styles.outerView}>
        <Image source={require('../assets/images/empty-cart.jpg')} style={{width: width, height: 500, resizeMode: 'contain'}} />
        <TouchableOpacity>
          <Pressable onPress={() => navigation.navigate('Home')} style={styles.shopNow}><Text style={{color: '#fff', fontSize: 15}}>Shop Now</Text></Pressable>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9'
  },
  shopNow: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 55,
    borderRadius: 15
  }
})