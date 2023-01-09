import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './../const/colors.js';
import charities from './../const/Charities.js';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const width = Dimensions.get('window').width / 2 - 30;

const CharityViews = ({navigation}) => {

  const donate = () =>{
    navigation.navigate('Donate')
  }

  const joincom = () => {
    navigation.navigate('Join')
  }

  const Card = ({Charity}) => {
    return (
        <View style={style.card}>
          
          <View
            style={{
              height: 100,
              width: 150,
              alignItems: 'center',
            }}>
            <Image
              source={Charity.img}
              style={{flex: 1, resizeMode: 'contain', borderRadius:10}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {Charity.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
          </View>
          <View style={{flexDirection:'row' , padding: 25,justifyContent:'space-around'}} >
            <View style={{padding:15}}>
            <TouchableOpacity onPress={joincom}>
                <AntDesign name="addusergroup" size={24} color={COLORS.blue} />
            </TouchableOpacity> 
            </View>
            
            <View style={{padding:15}}> 
            <TouchableOpacity onPress={donate}>  
            <Image
                                source={require('./../assets/icons/donate.png')}
                                resizeMode='contain'
                                style={{
                                    width:25,
                                    height:25,
                                    tintColor:COLORS.blue
                                   }}
                                />
            </TouchableOpacity> 
            </View>   
          </View> 
        </View>
      
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white, marginTop:30}}>
        <Image 
       source={require('./../assets/backgroundfilters/bg2.jpg')}
       style={{position:'absolute',zIndex:-1,top:300,left:40}}
       />
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Greetings,</Text>
          <Text style={{fontSize: 38, color: COLORS.blue, fontWeight: 'bold'}}>
            Our Charities
          </Text>
        </View>
        
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
      </View>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={charities}
        renderItem={({item}) => {
          return <Card Charity={item} />;
        }}
      />
    </SafeAreaView>
  );
};
export default CharityViews;

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-around',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: COLORS.blue,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.blue,
  },
  card: {
    height: 235,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 5,
    alignItems:'center'
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
