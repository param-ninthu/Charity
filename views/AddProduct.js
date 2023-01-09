import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Button,
    StyleSheet,
    Text,
    ScrollView,
    TextInput
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import COLORS from './../const/colors.js'

const AddProduct =({navigation}) =>{
    return(
        <ScrollView>
            <View style={styles.container}>
            <Image 
       source={require('./../assets/backgroundfilters/bg2.jpg')}
       style={{position:'absolute',zIndex:-1,top:150,left:100}}
       />
       <Image 
       source={require('./../assets/backgroundfilters/bg7.jpg')}
       style={{position:'absolute',zIndex:-1,top:500,left:150}}
       />
                <View style={{left:-80,marginTop:40,}}>
                   <Text style={{fontSize: 30, color: COLORS.blue, fontWeight: 'bold'}}>
                        Add Products
                    </Text>
                </View>
                <View style={{height:200,width:300,borderWidth:2,borderColor:'lightgray',borderStyle:'dashed',borderRadius:1,marginTop:30,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('./../assets/icons/Upload.png')} 
                            style={{height:60,width:60}}
                        />
                        <Text style={{color:'gray',fontWeight:'bold'}}>Upload upto 3 images</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{height:60,width:60,borderWidth:2,borderColor:'lightgray',borderStyle:'dashed',borderRadius:1,marginTop:10,marginLeft:15,backgroundColor:'white'}}></View>
                    <View style={{height:60,width:60,borderWidth:2,borderColor:'lightgray',borderStyle:'dashed',borderRadius:1,marginTop:10,marginLeft:15,backgroundColor:'white'}}></View>
                    <View style={{height:60,width:60,borderWidth:2,borderColor:'lightgray',borderStyle:'dashed',borderRadius:1,marginTop:10,marginLeft:15,backgroundColor:'white'}}></View>
                </View>
                <View>
                    <Text style={{color:'gray',marginTop:10,marginLeft:-23}}>Product Name*</Text>
                    <TextInput 
                        placeholder='Product Name'
                        padding={7}
                        height={50}
                        width={320}
                        borderColor='darkgray'
                        borderStyle='solid'
                        borderWidth={2}
                        borderRadius={8}
                        style={{marginTop:5,marginLeft:-23,backgroundColor:'white'}}
                        >

                    </TextInput>
                </View>
                <View style={{flexDirection:'row',marginLeft:20}}>
                    <View style={{paddingRight:60}}>
                        <Text style={{color:'gray',marginTop:10,marginLeft:-40}}>Price *</Text>
                        <TextInput 
                            placeholder='Price'
                            padding={7}
                            height={50}
                            width={150}
                            borderColor='darkgray'
                            borderStyle='solid'
                            borderWidth={2}
                            borderRadius={8}
                            style={{marginTop:5,marginLeft:-40,backgroundColor:'white'}}
                            >

                        </TextInput>
                    </View>
                    <View>
                        <Text style={{color:'gray',marginTop:10,marginLeft:-40}}>Discount</Text>
                        <TextInput 
                            placeholder='Discount Rate'
                            padding={7}
                            height={50}
                            width={150}
                            borderColor='darkgray'
                            borderStyle='solid'
                            borderWidth={2}
                            borderRadius={8}
                            style={{marginTop:5,marginLeft:-40,backgroundColor:'white'}}
                            >

                        </TextInput>
                    </View>
                </View>
                <View>
                    <Text style={{color:'gray',marginTop:10,marginLeft:-23}}>Description*</Text>
                        <TextInput 
                            placeholder='About the product'
                            padding={7}
                            height={100}
                            width={320}
                            borderColor='darkgray'
                            borderStyle='solid'
                            borderWidth={2}
                            borderRadius={8}
                            style={{marginTop:5,marginLeft:-23,backgroundColor:'white'}}
                            >
                        </TextInput>

                        
                    </View>
                    <View>
                         <Text style={{color:'gray',marginTop:10,marginLeft:-170,fontWeight:'bold',fontSize:15}}>Delivery Details</Text>
                    </View>
                    <View style={{flexDirection:'row',marginLeft:20}}>
                    
                    <View style={{paddingRight:60}}>
                        <Text style={{color:'gray',marginTop:10,marginLeft:-40}}>Method</Text>
                        <TextInput 
                            placeholder='Method'
                            padding={7}
                            height={50}
                            width={150}
                            borderColor='darkgray'
                            borderStyle='solid'
                            borderWidth={2}
                            borderRadius={8}
                            style={{marginTop:5,marginLeft:-40,backgroundColor:'white'}}
                            >
                        </TextInput>
                    </View>
                    <View>
                        <Text style={{color:'gray',marginTop:10,marginLeft:-40}}>No_Of Days</Text>
                        <TextInput 
                            placeholder='No_Of Days'
                            padding={7}
                            height={50}
                            width={150}
                            borderColor='darkgray'
                            borderStyle='solid'
                            borderWidth={2}
                            borderRadius={8}
                            style={{marginTop:5,marginLeft:-40,backgroundColor:'white'}}
                            >
                        </TextInput>
                    </View>
                </View>
            <TouchableOpacity onPress={() => {alert('Product Added');}}>
                <View style={{backgroundColor:COLORS.blue,height:50,width:300,justifyContent:'center',alignItems:'center',borderRadius:10,marginTop:10,marginBottom:20}}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>Add Product</Text>
                </View>
            </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


export default AddProduct;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    }
})