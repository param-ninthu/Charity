import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {windowHeight, windowWidth} from './../utils/Dimensions.js';


const FormInput = ({labelValue,placeholderText,iconType, ...rest}) => {
    return (
        <View style={styles.inputcontainer}>
            <View style={styles.iconStyle}>
            <AntDesign name={iconType} size={24} color="black" />
            </View>
            <TextInput
                value={labelValue}
                style={styles.input}
                numberOfLines={1}
                placeholder={placeholderText}
                placeholderTextColor="#e5e5e5"
                {...rest}
            />
        </View>
        
        );
}

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
      marginTop: 5,
      marginBottom: 10,
      width: '100%',
      height:15,
      borderColor: '#ccc',
      borderRadius: 3,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    iconStyle: {
      padding: 10,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightColor: '#ccc',
      borderRightWidth: 1,
      width: 50,
    },
    input: {
      padding: 10,
      flex: 1,
      fontSize: 16,
      // fontFamily: 'Lato-Regular',
      color: '#333',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputField: {
      padding: 10,
      marginTop: 5,
      marginBottom: 10,
      width: 150,
      height: 15,
      fontSize: 16,
      borderRadius: 8,
      borderWidth: 1,
    },
  });
  