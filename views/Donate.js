import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Button,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';


import COLORS  from '../const/colors';

const Donate =({navigation}) =>{
    return(
    <View style={{flex:1,flexDirection:'column',alignItems:'center',backgroundColor:'white'}}>
        <Image 
       source={require('./../assets/backgroundfilters/bg7.jpg')}
       style={{position:'absolute',zIndex:-1,top:130,left:150}}
       />
        <View style={style.Imagecontainer}>
            <Image 
            source={require('./../assets/img/don3-removebg.png')}
            style={{height:250,width:250, marginTop:20,borderRadius:80}}
            />
        </View>
        <View style={style.Amountcontainer}>
            <View style={{alignItems:'center',justifyContent:'center', flexDirection:'row',right:-10}}>
                <Image
                source={require('./../assets/icons/target.png')}
                style={{width:40,height:40,marginLeft:5}}
                />
                <View style={{flexDirection:'column', margin:20,left:-10}}>
                    <Text style={{fontWeight:'bold',color:COLORS.blue,left:9,fontSize:15}}>Rs100000</Text>
                    <Text style={{color:COLORS.dark,fontWeight:'bold'}}>Target Amount</Text>
                </View>
            </View>
            <View style={{alignItems:'center',justifyContent:'center', flexDirection:'row',right:-10}}>
                <Image
                source={require('./../assets/icons/current.png')}
                style={{width:40,height:40}}
                />
                <View style={{flexDirection:'column', margin:20,left:-10}}>
                    <Text style={{fontWeight:'bold',color:COLORS.blue,left:9,fontSize:15}}>Rs50300</Text>
                    <Text style={{color:COLORS.dark,fontWeight:'bold'}}>Received so far</Text>
                </View>
            </View>
        </View>
        <View style={style.ContentContainer}>
            <Text style={{color:COLORS.blue,fontSize:20,fontWeight:'bold',margin:10}}>
                Select Amount
            </Text>
            <ScrollView horizontal={true}>
                <TouchableOpacity>
                    <View style={style.MoneyContainer}>
                        <Image
                        source={require('./../assets/icons/givecash.png')}
                        style={{height:50,width:50,bottom:13}}
                        
                        />
                        <Text style={{color:COLORS.lightblue,fontWeight:'bold'}}>Rs 500</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity> 
                    <View style={style.MoneyContainer}>
                    <Image
                        source={require('./../assets/icons/givecash.png')}
                        style={{height:50,width:50,bottom:13}}
                        
                        />
                        <Text style={{color:COLORS.lightblue,fontWeight:'bold'}}>Rs 1000</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={style.MoneyContainer}>
                    <Image
                        source={require('./../assets/icons/givecash.png')}
                        style={{height:50,width:50,bottom:13}}
                        
                        />
                        <Text style={{color:COLORS.lightblue,fontWeight:'bold'}}>Rs 1500</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={style.MoneyContainer}>
                    <Image
                        source={require('./../assets/icons/givecash.png')}
                        style={{height:50,width:50,bottom:13}}
                        
                        />
                        <Text style={{color:COLORS.lightblue,fontWeight:'bold'}}>Rs 2000</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <Text style={{color:COLORS.blue,fontSize:20,fontWeight:'bold',margin:10,bottom:30}}>
                Payment Method
            </Text>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <TouchableOpacity>
                <View style={style.PaymentContainer}>
                    <Image
                        source={require('./../assets/icons/visa.png')}
                        style={{height:50,width:50}}
                    />
                    <Text style={{fontWeight:'bold',fontSize:13,margin:10}}>Visa</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={style.PaymentContainer}>
                    <Image
                            source={require('./../assets/icons/master.png')}
                            style={{height:50,width:50}}
                        />
                        <Text style={{fontWeight:'bold',fontSize:13,margin:10}}>Master</Text>
                    </View>
                </TouchableOpacity>
            </View>
        <TouchableOpacity>
            <View style={{alignItems:'center',bottom:50}}>
                <View style={style.btnPrimary}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22}}>
                        Donate
                    </Text>
                        <Image
                            source={require('./../assets/icons/heart.png')}
                            style={{width:25,height:25,marginLeft:10,marginTop:2}}
                        />
                
                </View>
            </View>
        </TouchableOpacity>
        </View>
    </View>
    
    )
}


export default Donate;

const style = StyleSheet.create({
    Imagecontainer: {
        alignItems:'center',
        backgroundColor:'transparent',
    },
    
    Amountcontainer:{
        height:80,
        width:'85%',
        backgroundColor:'#E5E5E5',
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        
    },

    ContentContainer:{
        backgroundColor:'#e5e5e5',
        marginTop:40,
        height:420,
        width:'100%',
        borderRadius:30,
    },
    MoneyContainer:{
        height:100,
        width:100,
        backgroundColor:'white',
        borderRadius:20,
        margin:10,
        alignItems:'center',
        justifyContent:'center',
       
    },
    PaymentContainer:{
        height:60,
        width:150,
        backgroundColor:'white',
        borderRadius:20,
        margin:10,
        bottom:35,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    btnPrimary: {
        backgroundColor: COLORS.blue,
        height: 50,
        width: 300,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        flexDirection:'row',
      },

})