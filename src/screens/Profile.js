import React from "react";
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Header} from "../components/Header";

export const Profile = () => {
  return(
    <>
      <Header />
      <ScrollView>

        <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 13, marginTop: 10,marginBottom: 20}}>
          <View>
            <Text style={{fontSize: 32, fontWeight: '700', color: '#000'}}>My Account</Text>
          </View>
        </View>

        <View style={{display: 'flex', flexDirection: 'row', paddingHorizontal: 12}}>
          <View>
            <Image source={require('../assets/images/profile-pic.jpg')} style={styles.profilePic} />
          </View>
          <Text style={{marginStart: 15}}>
            <Text style={{color: '#000', fontSize: 23, fontWeight: '500', marginBottom: 5}}>Anonymous user</Text>{'\n'}
            <Text style={{color: '#999999'}}>anonymoususer@gmail.com</Text>
          </Text>
        </View>

        <View style={{height: 35}} />

        <TouchableOpacity>
          <View style={styles.profileMenu}>
            <View>
              <Text style={{color: '#000', fontSize: 20, marginBottom: 2}}>My Orders</Text>
              <Text style={{color: '#999999', fontSize: 13}}>Already have 3 pending orders</Text>
            </View>
            <View style={{alignSelf: 'center'}}>
              <MaterialCommunityIcons name="chevron-right" style={{color: '#000'}} size={22} />
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.hr} />

        <TouchableOpacity>
          <View style={styles.profileMenu}>
            <View>
              <Text style={{color: '#000', fontSize: 20, marginBottom: 2}}>Shipping Address</Text>
              <Text style={{color: '#999999', fontSize: 13}}>Saved 2 addresses</Text>
            </View>
            <View style={{alignSelf: 'center'}}>
              <MaterialCommunityIcons name="chevron-right" style={{color: '#000'}} size={22} />
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.hr}/>

        <TouchableOpacity>
          <View style={styles.profileMenu}>
            <View>
              <Text style={{color: '#000', fontSize: 20, marginBottom: 2}}>Payment Methods</Text>
              <Text style={{color: '#999999', fontSize: 13}}>Visa  ***34</Text>
            </View>
            <View style={{alignSelf: 'center'}}>
              <MaterialCommunityIcons name="chevron-right" style={{color: '#000'}} size={22} />
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.hr}/>

        <TouchableOpacity>
          <View style={styles.profileMenu}>
            <View>
              <Text style={{color: '#000', fontSize: 20, marginBottom: 2}}>Promocodes</Text>
              <Text style={{color: '#999999', fontSize: 13}}>You have special promocodes</Text>
            </View>
            <View style={{alignSelf: 'center'}}>
              <MaterialCommunityIcons name="chevron-right" style={{color: '#000'}} size={22} />
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.hr}/>

        <TouchableOpacity>
          <View style={styles.profileMenu}>
            <View>
              <Text style={{color: '#000', fontSize: 20, marginBottom: 2}}>Settings</Text>
              <Text style={{color: '#999999', fontSize: 13}}>Notifications, Password ...</Text>
            </View>
            <View style={{alignSelf: 'center'}}>
              <MaterialCommunityIcons name="chevron-right" style={{color: '#000'}} size={22} />
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.hr} />

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 50,
    resizeMode: 'contain'
  },
  hr: {
    borderColor: '#999999',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  profileMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 22
  }
})