import React from "react";
import {View, Text, StyleSheet} from "react-native";

export const Profile = () => {
  return(
    <View style={styles.outerView}>
      <Text>Profile page</Text>
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