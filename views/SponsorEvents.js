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
    TextInput,
} from 'react-native';

import COLORS from './../const/colors.js'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SponsorEvents =({navigation}) =>{
    return(
        <SafeAreaView style={styles.container}>
           <ScrollView> 
            <View style={styles.header}>
             <View>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>Sponsor Events</Text>
             </View>
            </View>     
            <View style={{marginTop: 30, flexDirection: 'row',marginLeft:20,width:300}}>
                <View style={styles.searchContainer}>
                    <Icon name="search" size={25} style={{marginLeft: 20}} />
                    <TextInput placeholder="Search Events" style={styles.input} />
                </View>
            </View>
            <View style={{flexDirection:'column'}}>       
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
                        <Text style={{fontSize:19,color:'white',fontWeight:'bold',left:20,width:200}}>Donation Campaign</Text>
                        <View style={{flexDirection:'row',alignItems:'center',right:20}}>
                            <FontAwesome name="building-o" size={24} color="white" style={{padding:5}} />
                            <Text style={{fontSize:15,color:'white',fontWeight:'bold',}}>Serve Trust</Text>
                        </View>
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
                <View style={{borderRadius:5,backgroundColor:COLORS.blue,alignItems:'center',justifyContent:'center',height:25,width:70,left:310,top:5}}>
                    <TouchableOpacity> 
                        <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>
                            Sponsor
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>    
            <View style={{flexDirection:'column'}}>            
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
                        <Text style={{fontSize:19,color:'white',fontWeight:'bold',left:20,width:200}}>Shramadhana Campaign</Text>
                        <View style={{flexDirection:'row',alignItems:'center',right:20}}>
                            <FontAwesome name="building-o" size={24} color="white" style={{padding:5}} />
                            <Text style={{fontSize:15,color:'white',fontWeight:'bold',}}>Serve Trust</Text>
                        </View>
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
                           
                <View style={{borderRadius:5,backgroundColor:COLORS.blue,alignItems:'center',justifyContent:'center',height:25,width:70,left:310,top:5}}>
                    <TouchableOpacity> 
                        <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>
                            Sponsor
                        </Text>
                    </TouchableOpacity>
                </View>
                        
                </View>             
                <View style={{flexDirection:'column'}}>
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
                        <Text style={{fontSize:19,color:'white',fontWeight:'bold',left:20,width:200}}>Blood Campaign</Text>
                        <View style={{flexDirection:'row',alignItems:'center',right:20}}>
                            <FontAwesome name="building-o" size={24} color="white" style={{padding:5}} />
                            <Text style={{fontSize:15,color:'white',fontWeight:'bold',}}>Serve Trust</Text>
                        </View>
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
                <View style={{borderRadius:5,backgroundColor:COLORS.blue,alignItems:'center',justifyContent:'center',height:25,width:70,left:310,top:-45}}>
                    <TouchableOpacity> 
                        <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>
                            Sponsor
                        </Text>
                    </TouchableOpacity>
                </View>
                </View>

           
                </ScrollView>  
        </SafeAreaView>
    )
}



export default SponsorEvents;

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
    header: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft:20
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
    searchContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    
      },
      input: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        color: COLORS.dark,
      },
    
})