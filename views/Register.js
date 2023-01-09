import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, TextInput, Image , CheckBox} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './../const/colors.js';
import STYLES from './../components/style.js';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';


const SignUpScreen = ({navigation}) => {
  const user = () =>{
    navigation.navigate('UserPage')
  }
  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <View showsVerticalScrollIndicator={false}>
       
        <View style={{marginTop: 70}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: COLORS.dark}}>
            Hi There !
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.blue}}>
            Register as User
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
            <View style={STYLES.btnPrimary}>
              <TouchableOpacity onPress={user}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
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
        <Image 
          source={require('./../assets/backgroundfilters/bg1.jpg')}
          style={{position:'absolute',top: -650,right:-20,zIndex:-1}}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
