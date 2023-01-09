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


const CharityProfile =({navigation}) =>{
    const edit = () =>{
      navigation.navigate('EditProf')
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
                          
                    <View style={{justifyContent:'center',alignItems:'center',left:25,marginBottom:10}}>
                        <Title style={[styles.title]}>HelpHand</Title>
                        <Caption style={styles.caption}>@help_hand</Caption>
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
                <Text style={{color:"#777777", marginLeft: 20}}>helphand@email.com</Text>
            </View>
            <View style={styles.row}>
            <FontAwesome name="bank" size={20} color={COLORS.blue} />
                <Text style={{color:"#777777", marginLeft: 20}}>Commercial Bank</Text>
            </View>
            <View style={styles.row}>
            <FontAwesome name="book" size={20} color={COLORS.blue} />
                <Text style={{color:"#777777", marginLeft: 20}}>812201365</Text>
            </View>
            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1
                }]}>
                    <Title>20</Title>
                    <Caption style={{fontWeight:'bold'}}>No of Branches</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>150</Title>
                    <Caption style={{fontWeight:'bold'}} >No of Volunteers</Caption>
                </View>
            </View>
            <View style={styles.menuWrapper}>
              <TouchableOpacity style={styles.buttonContainer} onPress={edit}>
                <View>
                <Feather name="edit" size={24} color={COLORS.blue} /></View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:18,color:COLORS.blue,fontWeight:'bold',top: 42}}> Received targeted amount </Text>
              <Indicator/>
            </View>    
        </SafeAreaView>
    )
}


export default CharityProfile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      top:10,
      backgroundColor:'white',
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