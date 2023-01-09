import React  from 'react';
import {Image,Text,View,StyleSheet,TouchableOpacity , Button,ScrollView,SafeAreaView} from 'react-native'
import 'react-native-gesture-handler';
import COLORS from '../const/colors.js';

const BusinessPage =({navigation}) =>{

    const addproduct = () =>{
        navigation.navigate('AddProducts')
      }

    const bussprof = () =>{
        navigation.navigate('BusinessProfile')
      }
     
    const charview = () =>{
       navigation.navigate('CharityViews')
    }  

    const sponsor = () =>{
        navigation.navigate('Sponsors')
     } 

    return(
        <SafeAreaView>
        <ScrollView>
            <View style={styles.container}>
                <Text style={{color:COLORS.blue , fontSize:30 ,fontWeight:'bold',marginTop:10, top:-50,left:-120,backgroundColor:'white'}}> Hi There,</Text>
                <TouchableOpacity onPress={bussprof}
                    style={{left:140,top:-55}}>
                    <View style={{height:50,width:50,justifyContent:'center',alignItems:'center'}}>
                            <Image 
                            source={require('./../assets/backgroundfilters/bg3.png')}
                            style={{position:'absolute',zIndex:-1,top:180,left:-10}}
                            />  
                            <Image 
                            source={require('./../assets/backgroundfilters/bg3.png')}
                            style={{position:'absolute',zIndex:-1,top:10,right:180}}
                            />  
                            <Image
                                source={require('./../assets/icons/prof.png')}
                                style={{position:'absolute',zIndex:-1,height:55,width:55}}
                            />
                        
                    </View>
                </TouchableOpacity>
                 <Image 
                    source={require('./../assets/backgroundfilters/bg2.jpg')}
                    style={{position:'absolute',zIndex:-1,top:580}}
                    />
                <View style={{height:300,width:250,backgroundColor:'transparent',alignItems:'center'}}>
                        <Image 
                            source={require('./../assets/img/Cover.jpg')}
                            style={{height:200,width:200, borderRadius:15,}}
                        />
                        <View style={{
                            justifyContent:'center',
                            alignItems:'center',
                            height:50,width:200,
                            backgroundColor:COLORS.blue,
                            borderRadius:10,
                            marginTop:10
                            }}>
                            <TouchableOpacity onPress={addproduct}>
                                <Text style={styles.ButtonText}>Add Products</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{height:300,width:250,backgroundColor:'transparent',alignItems:'center'}}>
                        <Image 
                            source={require('./../assets/img/don.jpg')}
                            style={{height:200,width:200, borderRadius:15,}}
                        />
                        <View style={{
                            justifyContent:'center',
                            alignItems:'center',
                            height:50,width:200,
                            backgroundColor:COLORS.blue,
                            borderRadius:10,
                            marginTop:10
                            }}>
                            <TouchableOpacity onPress={charview}>
                                <Text style={styles.ButtonText}>Donate Charities</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{height:300,width:250,backgroundColor:'transparent',alignItems:'center'}}>
                        <Image 
                            source={require('./../assets/img/sponsor.jpg')}
                            style={{height:200,width:200, borderRadius:15,}}
                        />
                        <View style={{
                            justifyContent:'center',
                            alignItems:'center',
                            height:50,width:200,
                            backgroundColor:COLORS.blue,
                            borderRadius:10,
                            marginTop:10
                            }}>
                            <TouchableOpacity onPress={sponsor}>
                                <Text style={styles.ButtonText}>Sponsor Events</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                
            </View>
        </ScrollView>
        </SafeAreaView>
    );
}

export default BusinessPage;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        paddingTop:80,
        
    },
    ButtonText: {
        color:'white',
        fontWeight:'bold',
        fontSize:15
    }
});