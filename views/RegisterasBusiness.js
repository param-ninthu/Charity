import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, TextInput, Image ,CheckBox} from 'react-native';
import COLORS from '../const/colors.js';
import STYLES from '../components/style.js';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const BusinessSignUpScreen = ({navigation}) => {

  const Businesshome = () =>{
    navigation.navigate('BusinessHome')
  }

  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Image 
       source={require('./../assets/backgroundfilters/bg2.jpg')}
       style={{position:'absolute',zIndex:-1,top: 300,left:40}}
       />
        <View style={{marginTop: 70}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: COLORS.dark}}>
            Hi There !
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.blue}}>
            Register as Business
          </Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Image style={{height:200,width:200}} source={require('./../assets/img/donation.jpg')} />
        </View>
        <View style={{marginTop: 20}}>
          <View style={STYLES.inputContainer}>
          <Feather name="at-sign" size={24} color={COLORS.blue} />
            <TextInput placeholder="UserName" style={STYLES.input} />
          </View>
          <View style={STYLES.inputContainer}>
          <FontAwesome name="building-o" size={24} color={COLORS.blue}  />
            <TextInput placeholder="Business-Name" style={STYLES.input} />
          </View>

          <View style={STYLES.inputContainer}>
          <FontAwesome name="registered" size={24} color={COLORS.blue} />
            <TextInput
              placeholder="Business Register No"
              style={[STYLES.input]}
            />
          </View>
          <View style={STYLES.inputContainer}>
          <Feather name="calendar" size={24} color={COLORS.blue} />
            <TextInput
              placeholder="Business Registered Date"
              style={[STYLES.input]}
            />
          </View>

          <View style={STYLES.inputContainer}>
          <Feather name="lock" size={24} color={COLORS.blue} />
            <TextInput
              placeholder="Password"
              style={[STYLES.input]}
              secureTextEntry
            />
          </View>
          <View style={STYLES.inputContainer}>
            <Feather name="lock" size={24} color={COLORS.blue} />
              <TextInput
                placeholder="Confirm Passowrd"
                style={[STYLES.input]}
                secureTextEntry
              />
           </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={Businesshome}>
            <View style={STYLES.btnPrimary}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22}}>
                Sign Up
              </Text>
            </View>
            </TouchableOpacity>
          </View> 
        </View>      

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.blue, fontWeight: 'bold'}}>
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: COLORS.pink, fontWeight: 'bold'}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BusinessSignUpScreen;