import { StyleSheet, Image,Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { colors } from '../../../res'

const BoxRelateditems = ({image,name,price,bgColor}) => {
  return (
    <TouchableOpacity style={{height:120,width:120,backgroundColor:bgColor,borderRadius:5,marginRight:15}}>
      <View style={{justifyContent: 'center',alignItems: 'center',flex:1}}>
      <Image source={image} style={{height:50,width:50,resizeMode:'contain'}}/>
      </View>
      <View style={{justifyContent: 'flex-end'}}>
            <View style={{backgroundColor:colors.white,height:25,width:'100%',borderRadius:20,paddingHorizontal:10,alignItems:'center',flexDirection:'row', justifyContent: 'space-between'}}>
               <Text> 
                {name}
               </Text> 
               <Text style={{fontSize:12}}> 
                ${price}
               </Text> 
            </View>
      </View>
    </TouchableOpacity>
  )
}

export default BoxRelateditems

const styles = StyleSheet.create({})