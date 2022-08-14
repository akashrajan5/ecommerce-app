import React from "react";
import {View, Text, StyleSheet} from "react-native";

export const Home = () => {
  return(
    <View style={styles.outerView}>
      <Text>Home Page</Text>
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