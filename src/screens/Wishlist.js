import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Header} from "../components/Header";

export const Wishlist = () => {
  return(
    <>
      <Header/>
      <View style={styles.outerView}>
        <Text>Wishlist</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})