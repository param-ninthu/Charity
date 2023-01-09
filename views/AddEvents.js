import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';

import {useTheme} from 'react-native-paper';

import COLORS from './../const/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const AddEvents =() =>{
    const  {colors} = useTheme();

   
    return (
      <ScrollView>
        <View style={[styles.container],{backgroundColor:'white'}}>
            <View style={[styles.ImageContainer] ,{top:40}}>
                <Text style={{fontWeight:'bold',fontSize:24,left:10,color:COLORS.blue}}>Add Events</Text>
                <Image 
                source={require('./../assets/img/Events3.jpg')}
                style={{height:300,width:300,borderRadius:20,left:50}}
                />
            </View>
            <View style={{margin:20}}>
                <View style={{alignItems:'center'}}>
            </View>
                <View style={styles.action}>
                <MaterialIcons name="event-seat" size={21} color={COLORS.blue} />
                    <TextInput
                        placeholder="Event Name"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[styles.textInput,{color:COLORS.blue}]}
                    />
                </View>
                <View style={styles.action}>
                <MaterialIcons name="description" size={21} color={COLORS.blue} />
                    <TextInput
                        placeholder="Description"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[styles.textInput,{color:COLORS.blue}]}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="calendar-o" size={20} color={COLORS.blue}/>
                    <TextInput
                        placeholder="Date"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[styles.textInput,{color:COLORS.blue}]}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="map-marker" size={20} color={COLORS.blue}/>
                    <TextInput
                        placeholder="Address"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[styles.textInput,{color:COLORS.blue}]}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="mobile" size={20} color={COLORS.blue}/>
                    <TextInput
                        placeholder="Mobile Number"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        keyboardType='number-pad'
                        style={[styles.textInput,{color:COLORS.blue}]}
                    />
                </View>
                <View style={[styles.action]}>
                    <FontAwesome name="dollar" size={20} color={COLORS.blue} />
                    <TextInput
                        placeholder="Amount Needed"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        keyboardType='number-pad'
                        style={[styles.textInput,{color:colors.text}]}
                    />
                </View>
                <TouchableOpacity style={styles.commandButton} onPress={()=>{}}>
                    <Text style={styles.panelButtonTitle}>Add Event</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
        )
}


export default AddEvents;

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
      marginBottom: 10,
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
    ImageContainer:{
        alignItems:'center',
        justifyContent:'center',
    }
  });