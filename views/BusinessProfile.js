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


import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {Avatar , Title , Caption, Text,TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from './../const/colors.js';
import Indicator from './Indicator.js';
import EditProfile from './EditProfile.js';


const BusinessProfile =({navigation}) =>{
  const editbusiness = () =>{
    navigation.navigate('EditBusiness')
  }
    return(
        <SafeAreaView style={styles.container}>
           <Image 
       source={require('./../assets/backgroundfilters/bg5.jpg')}
       style={{position:'absolute',zIndex:-1,top:160,left:80}}
       />
            <View style={styles.userInfoSection}>
                <View style={{flexDirection:'row',marginTop:15}} >
                    <Avatar.Image
                        source={{
                            uri:
                              'https://api.adorable.io/avatars/70/abott@adorable.png',
                          }} 
                          size={80}
                          top={50}
                          left={120}
                          />
                          
                    <View style={{justifyContent:'center',alignItems:'center',left:35,marginBottom:10}}>
                        <Title style={[styles.title]}>UniLiver</Title>
                        <Caption style={styles.caption}>@uniliver</Caption>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <Icon name="map-marker-radius" color={COLORS.blue} size={20}/>
                <Text style={{color:"#777777", marginLeft: 20}}>Colombo , SriLanka</Text>
            </View>
            <View style={styles.row}>
                <Icon name="phone" color={COLORS.blue} size={20}/>
                <Text style={{color:"#777777", marginLeft: 20}}>+11 1234567</Text>
            </View>
            <View style={styles.row}>
                <Icon name="email" color={COLORS.blue} size={20}/>
                <Text style={{color:"#777777", marginLeft: 20}}>uniliver@email.com</Text>
            </View>
            <View style={styles.row}>
            <FontAwesome name="link" size={20} color={COLORS.blue} />
                <Text style={{color:"#777777", marginLeft: 20}}>www.uniliver.com</Text>
            </View>
            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1
                }]}>
                    <Title>Rs 100000</Title>
                    <Caption style={{fontWeight:'bold'}}>Earned Profit</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>Rs 40000</Title>
                    <Caption style={{fontWeight:'bold'}} >Donated Profit</Caption>
                </View>
            </View>
            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1
                }]}>
                    <Title>10</Title>
                    <Caption style={{fontWeight:'bold'}}>No of Sponsored events</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>1000</Title>
                    <Caption style={{fontWeight:'bold'}} >No of Sales</Caption>
                </View>
            </View>
            <View style={[styles.menuWrapper],{marginTop:-5,marginLeft:-10}}>
              <TouchableOpacity style={styles.buttonContainer} onPress={editbusiness}>
                <View>
                <Feather name="edit" size={24} color={COLORS.blue} /></View>
              </TouchableOpacity>
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
            <Icon name="cog-outline" color={COLORS.blue} size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
              
        </SafeAreaView>
    )
}


export default BusinessProfile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      top:10,
      backgroundColor:'white'
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
    caption:{
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
      top:150,
      marginBottom:15
    },
    row: {
      top:110,
      flexDirection: 'row',
      marginBottom: 15,
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
      backgroundColor:'#39A2DB'
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
      left:370,
      top:-120,
    },
  });