import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text, StyleSheet, ImageBackground, StatusBar, TouchableOpacity, Image, ScrollView} from "react-native";
import {Header} from "../components/Header";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Home = () => {
  return(
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      <ScrollView>
        <ImageBackground source={require('../assets/images/cover.png')} style={styles.coverImageStyle}>
          <Header />
          <View style={{flex: 1, marginLeft: 30, marginTop: 40}}>
            <Text style={styles.coverText}>Make yourself{'\n'}at home</Text>
          </View>
        </ImageBackground>

        <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 14, marginTop: 18,marginBottom: 8}}>
          <View>
            <Text style={{fontSize: 30, fontWeight: '600', color: '#000'}}>New Arrivals</Text>
          </View>
          <View>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 14,fontWeight: '700', color: '#000'}}>Show all</Text>
              <MaterialCommunityIcons name="menu-right" size={22} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginHorizontal: 14}}>
          <View>
            <MaterialCommunityIcons style={{color: '#000', zIndex: 1, position: 'absolute', left: 125, top: 6}} name="heart-outline" size={22} />
            <Image source={require('../assets/images/prod-1.png')} style={styles.productImg} resizeMode='cover' />
          </View>
          <View>
            <Text>Noisy Chair</Text>
            <Text>$29.50</Text>
          </View>
        </View>

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  coverImageStyle: {
    width: wp('100%'),
    height: hp('40%')
  },
  coverText: {
    fontSize: 48,
    fontWeight: '700',
    color: '#fff'
  },
  productImg: {
    height: wp('40%'),
    aspectRatio: 1/1
  }
})