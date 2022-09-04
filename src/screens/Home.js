import React, {useState} from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text, StyleSheet, ImageBackground, StatusBar, TouchableOpacity, Image, ScrollView} from "react-native";
import {Header} from "../components/Header";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Home = () => {
  const [liked, setLiked] = useState(false)

  return(
    <>
      <StatusBar barStyle='dark-content' backgroundColor="transparent" translucent={true} />
      <ScrollView stickyHeaderIndices={[0]}>
        <Header />
        <ImageBackground source={require('../assets/images/cover.png')} style={styles.coverImageStyle}>
          <View style={{flex: 1, justifyContent: 'center',marginLeft: 30}}>
            <Text style={styles.coverText}>Make yourself{'\n'}at home</Text>
          </View>
        </ImageBackground>


        <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 13, marginTop: 18,marginBottom: 8}}>
          <View>
            <Text style={{fontSize: 32, fontWeight: '700', color: '#000'}}>Categories</Text>
          </View>
          <View>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 13,fontWeight: '700', color: '#000'}}>Show all</Text>
              <MaterialCommunityIcons name="menu-right" size={22} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <View style={styles.categoryPill}>
                <Text style={{color: '#fff'}}>All Categories</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.categoryPill}>
                <Text style={{color: '#fff'}}>Mens</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.categoryPill}>
                <Text style={{color: '#fff'}}>Womens</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.categoryPill}>
                <Text style={{color: '#fff'}}>Kids</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.categoryPill}>
                <Text style={{color: '#fff'}}>T-Shirts</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.categoryPill}>
                <Text style={{color: '#fff'}}>Jeans</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.lastCategoryPill}>
                <Text style={{color: '#fff'}}>Accessories</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>


        <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 13, marginTop: 18,marginBottom: 8}}>
          <View>
            <Text style={{fontSize: 32, fontWeight: '700', color: '#000'}}>New Arrivals</Text>
          </View>
          <View>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 13,fontWeight: '700', color: '#000'}}>Show all</Text>
              <MaterialCommunityIcons name="menu-right" size={22} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.prodMarginLeft}>
              <View>
                <TouchableOpacity style={styles.prodLikeIcon} onPress={() => setLiked(!liked)}>
                  {liked ? <MaterialCommunityIcons name="heart" style={{color: '#000'}} size={22} /> :<MaterialCommunityIcons name="heart-outline" size={22} />}
                </TouchableOpacity>
                <Image source={require('../assets/images/prod-1.png')} style={styles.productImg} resizeMode='cover' />
              </View>
              <View>
                <Text style={styles.prodName}>Wooden Lamp</Text>
                <Text style={styles.prodPrice}>$19.00</Text>
              </View>
            </View>
            <View style={styles.prodMarginLeft}>
              <View>
                <TouchableOpacity style={styles.prodLikeIcon} onPress={() => setLiked(!liked)}>
                  {liked ? <MaterialCommunityIcons name="heart" style={{color: '#000'}} size={22} /> :<MaterialCommunityIcons name="heart-outline" size={22} />}
                </TouchableOpacity>
                <Image source={require('../assets/images/prod-2.png')} style={styles.productImg} resizeMode='cover' />
              </View>
              <View>
                <Text style={styles.prodName}>Metal Lamp</Text>
                <Text style={styles.prodPrice}>$29.50</Text>
              </View>
            </View>
            <View style={styles.prodMarginHoriz}>
              <View>
                <TouchableOpacity style={styles.prodLikeIcon}>
                  <MaterialCommunityIcons name="heart-outline" size={22} />
                </TouchableOpacity>
                <Image source={require('../assets/images/prod-3.png')} style={styles.productImg} resizeMode='cover' />
              </View>
              <View>
                <Text style={styles.prodName}>Ikea Lamp</Text>
                <Text style={styles.prodPrice}>$109.60</Text>
              </View>
            </View>
          </ScrollView>
        </View>


        <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 13, marginTop: 18,marginBottom: 8}}>
          <View>
            <Text style={{fontSize: 32, fontWeight: '700', color: '#000'}}>Best Selling</Text>
          </View>
          <View>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 13,fontWeight: '700', color: '#000'}}>Show all</Text>
              <MaterialCommunityIcons name="menu-right" size={22} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.prodMarginLeft}>
              <View>
                <TouchableOpacity style={styles.prodLikeIcon}>
                  <MaterialCommunityIcons name="heart-outline" size={22} />
                </TouchableOpacity>
                <Image source={require('../assets/images/prod-4.png')} style={styles.productImg} resizeMode='cover' />
              </View>
              <View>
                <Text style={styles.prodName}>Noisy Chair</Text>
                <Text style={styles.prodPrice}>$19.00</Text>
              </View>
            </View>
            <View style={styles.prodMarginLeft}>
              <View>
                <TouchableOpacity style={styles.prodLikeIcon}>
                  <MaterialCommunityIcons name="heart-outline" size={22} />
                </TouchableOpacity>
                <Image source={require('../assets/images/prod-5.png')} style={styles.productImg} resizeMode='cover' />
              </View>
              <View>
                <Text style={styles.prodName}>Wooden Chair</Text>
                <Text style={styles.prodPrice}>$29.50</Text>
              </View>
            </View>
            <View style={styles.prodMarginHoriz}>
              <View>
                <TouchableOpacity style={styles.prodLikeIcon}>
                  <MaterialCommunityIcons name="heart-outline" size={22} />
                </TouchableOpacity>
                <Image source={require('../assets/images/prod-6.png')} style={styles.productImg} resizeMode='cover' />
              </View>
              <View>
                <Text style={styles.prodName}>Ikea Chair</Text>
                <Text style={styles.prodPrice}>$109.60</Text>
              </View>
            </View>
          </ScrollView>
        </View>


      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  coverImageStyle: {
    width: wp('100%'),
    height: hp('35%')
  },
  coverText: {
    fontSize: 48,
    fontWeight: '700',
    color: '#fff'
  },
  productImg: {
    height: wp('40%'),
    aspectRatio: 1/1,
    borderRadius: 3
  },
  prodMarginLeft: {
    marginLeft: 14
  },
  prodMarginHoriz: {
    marginHorizontal: 14
  },
  prodLikeIcon: {
    color: '#000',
    zIndex: 1,
    position: 'absolute',
    left: 122,
    top: 11
  },
  prodName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000'
  },
  prodPrice: {
    fontSize: 14,
    fontWeight: '400'
  },
  categoryPill: {
    backgroundColor: '#000',
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: 20,
    marginStart: 13
  },
  lastCategoryPill: {
    backgroundColor: '#000',
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: 20,
    marginStart: 13,
    marginEnd: 13
  }
})