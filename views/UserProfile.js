import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Image,
    Button,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import {Avatar , Title , Caption, Text,TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from './../const/colors.js';
import EditProfile from './EditProfile.js'

const UserProfile =({navigation}) =>{
  const edit = () =>{
    navigation.navigate('EditProf')
  }
    return(
        <SafeAreaView style={styles.container}>
          <Image 
              source={require('./../assets/backgroundfilters/bg3.png')}
              style={{position:'absolute',zIndex:-1,top: 400,left:250}}
              /> 
            <View style={styles.userInfoSection}>
                <View style={{flexDirection:'row',marginTop:15}} >
                    <Avatar.Image
                        source={{
                            uri:
                              'https://api.adorable.io/avatars/80/abott@adorable.png',
                          }} 
                          size={80}
                          top={50}
                          left={120}
                          />
                          
                    <View style={{marginLeft:20}}>
                        <Title style={[styles.title,{ marginBottom:5}]}>Van_Gogh</Title>
                        <Caption style={styles.caption}>@van-gogh</Caption>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <Icon name="map-marker-radius" color="#777777" size={20}/>
                <Text style={{color:"#777777", marginLeft: 20}}>Vavuniya , SriLanka</Text>
            </View>
            <View style={styles.row}>
                <Icon name="phone" color="#777777" size={20}/>
                <Text style={{color:"#777777", marginLeft: 20}}>+94 0766194332</Text>
            </View>
             <View style={styles.row}>
                <Icon name="email" color="#777777" size={20}/>
                <Text style={{color:"#777777", marginLeft: 20}}>van_gogh@email.com</Text>
            </View>
            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1
                }]}>
                    <Title>Rs.50000</Title>
                    <Caption>Donated Amount</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>12</Title>
                    <Caption>No of Purchsed Items</Caption>
                </View>
            </View>
        <View style={[styles.menuWrapper],{marginTop:110}}>
        
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color={COLORS.blue} size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color={COLORS.blue} size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color={COLORS.blue} size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="cog-outline" color={COLORS.blue} size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
        <TouchableOpacity style={styles.buttonContainer} onPress={edit}>
          <View >
          <Feather name="edit" size={24} color={COLORS.blue} /></View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    )
}


export default UserProfile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff'
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      top:150,
      justifyContent:'center'
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
      top:150,
      left:15
    },
    row: {
      top:110,
      flexDirection: 'row',
      marginBottom: 10,
      left:10
    },

    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
      top:110,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:COLORS.lightblue
    },
    menuWrapper: {
      marginTop: 10,
      top:90,
      right:20
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },

    buttonContainer: {
      borderRadius:60,
      height:30,
      width:30,
      alignItems:'center',
      justifyContent:'center',
      left:361,
      top:-355
    }
  });