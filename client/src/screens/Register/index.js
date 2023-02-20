import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {colors,fonts} from '../../res'
import {IL_pack} from '../../res/images/Illustrations';
import {Button,Input} from '../../components';

import Icon from 'react-native-vector-icons/AntDesign'


const Register = ({navigation}) => {
  return (
    <ImageBackground source={IL_pack} resizeMode="cover" style={styles.screen}>
  
      <View style={styles.content}>
      <Icon onPress={()=> navigation.goBack()}  name='leftcircle' size={30} paddingHorizontal={10} color={colors.darkGreen}/>
      <Text style={styles.textSlogan}>Register</Text>

          <Input
            label="UserName"
            placeholder="Entry your email"
            secureTextEntry={false}
          />
          <Input
            label="email"
            placeholder="Entry your email"
            secureTextEntry={false}
          />
             <Input
            label="Phone"
            placeholder="enter your"
            secureTextEntry={false}
          />
           <Input
            label="password"
            placeholder="Entry your password"
            secureTextEntry={true}
          />
     
      

     <Button  onPress={()=>navigation.replace('MainApp')}   text="Signup" />


        </View>

    </ImageBackground>
  );
};

export default Register;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    
  },
  textSlogan: {
    fontSize: 40,
    color: 'green',
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  content:{
    width:'100%',
    height: '100%',
    flexDirection: 'column',
    gap: 20,
    backgroundColor:colors.white,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    marginTop:270,
    // alignItems:'flex-end',
    paddingTop:34,
  },
  icoons:{
     flexDirection: 'row',
     justifyContent: 'center',
     gap:12

  },
  Texto:{

 fontSize:17,
  color:colors.bule,
  textDecorationLine: 'underline',
  borderColor:colors.darkGreen  

  },
  regis:{
    flexDirection: 'row',

  }
});
