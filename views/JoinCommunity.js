import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Button,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
} from 'react-native';

import COLORS from './../const/colors.js'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const JoinCommunity =({navigation}) =>{
    return(
        <SafeAreaView style={styles.container}>
            <Image 
              source={require('./../assets/backgroundfilters/bg3.png')}
              style={{position:'absolute',zIndex:-1,left:300}}
              /> 
              <Image 
              source={require('./../assets/backgroundfilters/bg2.jpg')}
              style={{position:'absolute',zIndex:-1,top:400,left:40}}
              />  
            <ScrollView>
             
            <View style={styles.Headercontainer}>
                <Image
                source={require('./../assets/charities/Serve.png')}
                height={200}
                width={200}
                resizeMode='center'
                top={-50}
                />
                <Text style={{color:COLORS.blue,top:-160,fontSize:18,fontWeight:'bold'}}>
                    @Serve
                </Text>
                
                    <View style={{
                        backgroundColor:COLORS.blue, 
                        height:40,
                        width:160,
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:10,
                        marginBottom:10,
                        flexDirection:'row',
                        
                        top:-150,
                        right:-115}}>
                        <AntDesign name="addusergroup" size={24} color='white' />
                        <Text style={{color:'white', fontWeight:'bold',paddingLeft:10}}>
                            JoinCommunity
                        </Text>
                    </View>
            </View>    
            <View style={{flexDirection:'column'}}>
                    <View style={styles.TxtheadContainer}>
                        <Text style={styles.txthead}>
                            About Us
                        </Text>
                    </View>
                    <View style={styles.TxtdecContainer}>
                    <Text style={styles.txtDec}>
                    It is here that Save the Rhino Trust Namibia (SRT) works tirelessly to protect the last, free-roaming population of black rhinos left in the world.
​
Covering an area of 25,000 km2, SRT's trackers come from local communities.
                    </Text>
                    </View>

                    
                    <View
                        style={{
                            borderBottomColor:COLORS.blue,
                            borderBottomWidth: 3,
                            width:200,
                            top: 40,
                            left: 90
                        }}
                        />
                    <View style={[styles.TxtheadContainer],{top:40,left:90}}>
                        <Text style={styles.txthead}>
                            Our Upcoming Events
                        </Text>
                    </View> 
                    
                <View style={{
                        height:150,
                        width:'95%',
                        backgroundColor:'#293A80',
                        marginTop:50,
                        marginLeft:10,
                        borderRadius:20,
                        flexDirection:'row',
                        alignItems:'center',
                        }}>
                       <View>     
                        <Image source={require('./../assets/img/donation.jpg')}
                        style={{height:130,width:150,borderRadius:20,marginLeft:5}} 
                        />
                      </View>
                      <View style={{flexDirection:'column', justifyContent:'center',alignItems:'center',padding:10}}>
                        <Text style={{fontSize:19,color:'white',fontWeight:'bold',bottom:20,left:20,width:200}}>Donation Campaign</Text>
                        <View style={{flexDirection:'row',alignItems:'center',right:20}}>
                            <AntDesign name="calendar" size={24} color="white" style={{padding:5}} />
                            <Text style={{fontSize:15,color:'white',fontWeight:'bold',}}>20-09-2021</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Entypo name="location" size={24} color="white" style={{padding:5}} />
                            <Text style={{fontSize:15,color:'white',fontWeight:'bold',}}>Dehiwala,Colombo</Text>
                        </View>
                    </View>
                    
                </View>    

                <View style={{
                        height:150,
                        width:'95%',
                        backgroundColor:'#293A80',
                        marginTop:50,                        
                        marginLeft:10,
                        borderRadius:20,
                        flexDirection:'row',
                        alignItems:'center',
                        }}>
                       <View>     
                        <Image source={require('./../assets/img/tree.jpg')}
                        style={{height:130,width:150,borderRadius:20,marginLeft:5}} 
                        />
                      </View>
                      <View style={{flexDirection:'column', justifyContent:'center',alignItems:'center',padding:10}}>
                        <Text style={{fontSize:19,color:'white',fontWeight:'bold',bottom:20,left:20,width:200}}>Shramadhana Campaign</Text>
                        <View style={{flexDirection:'row',alignItems:'center',right:20}}>
                            <AntDesign name="calendar" size={24} color="white" style={{padding:5}} />
                            <Text style={{fontSize:15,color:'white',fontWeight:'bold',}}>20-09-2021</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Entypo name="location" size={24} color="white" style={{padding:5}} />
                            <Text style={{fontSize:15,color:'white',fontWeight:'bold',}}>Dehiwala,Colombo</Text>
                        </View>
                    </View>
                    
                </View>              

                <View style={{
                        height:150,
                        width:'95%',
                        backgroundColor:'#293A80',
                        marginTop:50,
                        marginBottom:50,
                        marginLeft:10,
                        borderRadius:20,
                        flexDirection:'row',
                        alignItems:'center',
                        }}>
                       <View>     
                        <Image source={require('./../assets/img/blood.jpg')}
                        style={{height:130,width:150,borderRadius:20,marginLeft:5}} 
                        />
                      </View>
                      <View style={{flexDirection:'column', justifyContent:'center',alignItems:'center',padding:10}}>
                        <Text style={{fontSize:19,color:'white',fontWeight:'bold',bottom:20,left:20,width:200}}>Blood Campaign</Text>
                        <View style={{flexDirection:'row',alignItems:'center',right:20}}>
                            <AntDesign name="calendar" size={24} color="white" style={{padding:5}} />
                            <Text style={{fontSize:15,color:'white',fontWeight:'bold',}}>29-09-2021</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Entypo name="location" size={24} color="white" style={{padding:5}} />
                            <Text style={{fontSize:15,color:'white',fontWeight:'bold',}}>Wellawate,Colombo</Text>
                        </View>
                    </View>
                    
                </View> 


            </View> 
                    
          </ScrollView>
            
        </SafeAreaView>
    )
}



export default JoinCommunity;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    },
    Headercontainer:{
        height:250,
        width:'100%',
        backgroundColor:'transparent',
        alignItems:'center',
    },
    TextContainer:{
        alignItems:'center',
        justifyContent:'center',
    },
    txtDec:{
        fontSize:16,
        color:COLORS.lightblue,
        justifyContent:'center',
        fontWeight:'bold'
        
    },
    txthead:{
        fontSize:20,
        color:COLORS.blue,
        fontWeight:'bold',
    },
    TxtheadContainer:{
        width:100,
        borderBottomWidth:2,
        borderBottomColor:'grey',
        justifyContent:'center',
        position:'absolute',
        left:20
    },

    TxtdecContainer:{
        width:300,
        justifyContent:'center',
        height:150,
        top:30,
        left:20,
        borderColor:'#293A80',
        borderWidth:4,
        padding:4,
        marginTop:5,
        marginBottom:5,
        borderRadius:1,
        borderStyle:'dotted',
    },

    
})