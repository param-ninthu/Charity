import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Feather } from '@expo/vector-icons';
import COLORS from './../const/colors.js';
import STYLES from './../components/style.js';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Login = ({navigation}) => {

  const user = () =>{
    navigation.navigate('UserPage')
  }
  
  const registerAs = ()=>{
    navigation.navigate('RegisterChoice')
  }

  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      
        <View style={{marginTop: 70}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Welcome Back,
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.blue}}>
            Sign in to continue
          </Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Image style={{height:200,width:200}} source={require('./../assets/img/home.jpg')} />
        </View>
        <View style={{marginTop: 20}}>
          <View style={STYLES.inputContainer}>
          <Feather name="user" size={24} color={COLORS.blue} />
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
          <TouchableOpacity onPress={user}>
          <View style={{alignItems:'center'}}>
            <View style={STYLES.btnPrimary}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22}}>
                Sign In
              </Text>
            </View>
          </View>
          </TouchableOpacity>
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
            Don`t have an account ?  
          </Text>
          <TouchableOpacity onPress={registerAs}>
            <Text style={{color: COLORS.pink, fontWeight: 'bold',paddingLeft:5}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;