import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import { IC_Btn_Min, IC_Btn_Plus } from '../../../res'

const Counter = ({onValueChange}) => {
 const [value,SetValue] = useState(1)
 useEffect(()=>{
    onValueChange(value)
 },[onValueChange,value])

 const onCounter = type =>{
    let result = value
    if(type ==='plus'){
    result = value + 1;
    }
    if(type ==='moins'){
    result = value - 1;
      }
      SetValue(result) 
      onValueChange(result)

  }

  return (
    <View style={{flexDirection: 'row',justifyContent: 'center', alignItems:'center'}}>
        <TouchableOpacity onPress={() =>onCounter('moins')}>
            <IC_Btn_Min/>
        </TouchableOpacity>
        <Text style={{marginHorizontal:10}}>{value}</Text>
        <TouchableOpacity  onPress={() =>onCounter('plus')}>
            <IC_Btn_Plus/>
        </TouchableOpacity>

    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})