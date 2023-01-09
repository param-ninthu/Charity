import React , {useState} from 'react'
import {StatusBar} from 'expo-status-bar'
import {StyleSheet,Text,View} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator'
import { setNestedObjectValues } from 'formik';
import { InnerContainer } from '../components/button';

const Indicator= () => {

    const [value, setValue] = useState(0);

    return(
      <View style={styles.container}>
          <View style={styles.InnerContainer}>
          <CircularProgress
            radius={70}
            value={60}
            textColor="blue"
            fontSize={20}
            valueSuffix={'%'}
            inActiveStrokeColor={"green"}
            inActiveStrokeOpacity={0.2}
            duration={2500}
          
          />
          </View>
          
      </View> 
    );
  }


  export default Indicator;

  const styles = StyleSheet.create({
      container: {
          flex:1,
          backgroundColor:'transparent',
          
      },
      InnerContainer:{
        marginTop:100,
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
      }
  });