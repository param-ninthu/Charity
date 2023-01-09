import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';

import {useTheme} from 'react-native-paper';

import COLORS from './../const/colors';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const EditProfile =() =>{
    const  {colors} = useTheme();

   
    return (
        <View style={[styles.container],{marginTop:15,backgroundColor:'white',height:'100%'}}>
            <Image 
       source={require('./../assets/backgroundfilters/bg1.jpg')}
       style={{position:'absolute',zIndex:-1,top:40,left:80}}
       />
            <View style={{margin:20}}>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={() => {}}> 
                            <View style={{
                                height:100,
                                width:100,
                                borderRadius:15,
                                justifyContent:'center',
                                alignItems:'center',
                                backgroundColor:'#453454'
                            }}>

                            <ImageBackground
                                source={{
                                    uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                    }}
                                style={{
                                    width:100,
                                    height:100,
                                }}
                                imageStyle={{
                                    borderRadius:15
                                    }}>
                                        <View style={{
                                            flex:1,
                                            justifyContent:'center',
                                            alignItems:'center'
                                        }}>
                                            <Icon name="camera" size={30} color="#fff" style={{
                                                opacity:0.7,
                                                alignItems:'center',
                                                justifyContent:'center',
                                                borderWidth:1,
                                                borderColor:'#fff',
                                                borderRadius:10,
                                            }} />
                                        </View>
                            </ImageBackground>

                            </View>
                    </TouchableOpacity>
                    <Text style={{marginTop:15,fontSize:18,fontWeight:'bold'}}>Van Gogh</Text>
                </View>
                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} color={COLORS.blue}/>
                    <TextInput
                        placeholder="First Name"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[styles.textInput,{color:colors.text}]}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="at" size={20} color={COLORS.blue}/>
                    <TextInput
                        placeholder="User Name"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[styles.textInput,{color:colors.text}]}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="map-marker" size={20} color={COLORS.blue}/>
                    <TextInput
                        placeholder="Address"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[styles.textInput,{color:colors.text}]}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="mobile" size={20} color={COLORS.blue}/>
                    <TextInput
                        placeholder="Mobile number"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        keyboardType='number-pad'
                        style={[styles.textInput,{color:colors.text}]}
                    />
                </View>
                <View style={[styles.action]}>
                    <FontAwesome name="envelope" size={20} color={COLORS.blue} />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        keyboardType='email-address'
                        style={[styles.textInput,{color:colors.text}]}
                    />
                </View>
                <TouchableOpacity style={styles.commandButton} onPress={()=>{}}>
                    <Text style={styles.panelButtonTitle}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
}


export default EditProfile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor:COLORS.blue,
      alignItems: 'center',
      marginTop: 10,
      top:78,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: COLORS.lightblue,
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
      paddingTop:10
    },
  });