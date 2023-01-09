import React  from 'react';
import { StatusBar } from 'expo-status-bar';
import {Image,Text} from 'react-native'
import{
    StyledContainer,
    InnerContainer,
    StyledButton,
    ButtonText,
    ButtonContainer,
} from './../components/button.js';
import COLORS from '../const/colors.js';


import {View , TouchableOpacity , Button} from 'react-native';
//Icons
import {Octicons , Ionicons , Fontisto} from '@expo/vector-icons';
//formik
import { Formik } from 'formik';
//colors


const Registeras =({navigation}) =>{

    const charReg = () =>{
        navigation.navigate('CharRegister')
      }

    const bussReg = () =>{
        navigation.navigate('BusisRegister')
      }
     
      const userReg = () =>{
        navigation.navigate('UserRegister')
      }  


    
    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
            <Text style={{color:'black' , fontSize:30 ,fontWeight:'bold',marginTop:-10, top:-50,left:-110 ,}}> Hi There,</Text>
                <Text style={{color:COLORS.blue , fontSize:30 ,fontWeight:'bold',marginTop:-10, top:-50,left:-25 }}> Who You want to be ?</Text>
                
                <Image 
                  source={require('./../assets/img/Cover.jpg')}
                  style={{height:250,width:250, borderRadius:15,}}
                />

                <ButtonContainer>
                <StyledButton>
                    <ButtonText onPress={userReg}>
                        Register as User
                    </ButtonText>
                </StyledButton>
                
                <StyledButton onPress={charReg}>
                    <ButtonText>
                        Register as Charity
                    </ButtonText>
                </StyledButton>
                
                <StyledButton onPress={bussReg}>
                    <ButtonText>
                        Register as Business Partners
                    </ButtonText>
                </StyledButton>
                </ButtonContainer>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Registeras;

