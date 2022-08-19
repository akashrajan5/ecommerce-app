import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Header} from "../components/Header";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Home = () => {
  return(
    <>
      <Header />
      <View style={styles.outerView}>
        <Text>Home Page</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c9adff'
  },
  header: {
    height: hp('20%'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})