import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {colors,fonts} from '../../res'
import {IL_pack} from '../../res/images/Illustrations';
import {Button,Input} from '../../components';
import Icon from 'react-native-vector-icons/Fontisto'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'

const Login = ({navigation}) => {
  return (
    <ImageBackground source={IL_pack} resizeMode="cover" style={styles.screen}>
      <View style={styles.content}>
      <Text style={styles.textSlogan}>Login</Text>

          <Input
            label="email"
            placeholder="Entry your email"
            secureTextEntry={false}
          />
           <Input
            label="password"
            placeholder="Entry your password"
            secureTextEntry={true}
          />
          <View style={styles.regis}>
          <Icon3   name='account' size={24} paddingHorizontal={10} color={colors.bule}/>

          <Text onPress={() => navigation.navigate('Register')} style={styles.Texto}>Creat account</Text>

          </View>
          <View style={styles.icoons}>
            <Icon2 name='facebook-square' size={40} color={colors.bule}/>
            <Icon2 name='google' size={40}/>
            <Icon2 name='android1' size={40} color={colors.darkGreen}/>
            <Icon name='react' size={40} color={colors.bule}/>

          </View>
          <Button  onPress={()=>navigation.replace('MainApp')}   text="LOGIN" />



        </View>
              <Button  onPress={()=>navigation.replace('MainApp')}   text="LOGIN" />

    </ImageBackground>
  );
};

export default Login;

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
