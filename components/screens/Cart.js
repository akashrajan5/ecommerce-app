import React from "react";
import {View, Text, StyleSheet} from "react-native";

export const Cart = () => {
  return(
    <View style={styles.outerView}>
      <Text>My Cart</Text>
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