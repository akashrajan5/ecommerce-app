import React from "react";
import {View, Text, StyleSheet} from "react-native";

export const Search = () => {
  return(
    <View style={styles.outerView}>
      <Text>Search page</Text>
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