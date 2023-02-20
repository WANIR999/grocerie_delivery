import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import {colors} from '../../../res/colors';
import { fonts } from '../../../res';

const Input = (props) => {
  return (
    <View style={styles.inputCountainer}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        style={styles.input}
        />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    inputCountainer:{
        flexDirection: 'row',
        alignItems: 'center', 
          
    },
    label:{
        fontSize:17,
        paddingLeft:20,
        fontFamily:fonts.SemiBold,

        flex:1
    },
    input:{
        fontSize:17,
        color:colors.darkGreen,
        paddingLeft:5,
        paddingRight:5,
        flex:2,
   
    }
})