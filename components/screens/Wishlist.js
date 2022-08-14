import React from "react";
import {View, Text, StyleSheet} from "react-native";

export const Wishlist = () => {
  return(
    <View style={styles.outerView}>
      <Text>Wishlist</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})