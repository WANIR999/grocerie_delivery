import {ScrollView, StyleSheet,StatusBar, Text, View,useColorScheme,SafeAreaView} from 'react-native'
import React from 'react'
import { colors, fonts, IL_Brinjal, IL_Brokoli, IL_Cauliflawer_PNG, IL_Grapes_PNG, IL_Pumpkin, IL_RedOnion, IL_Tomato_PNG } from '../../res'
import {Header,Gap} from '../../components';
import {BoxItemTopProduct} from '../../components'

const Categories = ({route,navigation}) => {
    const isDarkMode = useColorScheme() === 'dark'
    const dataCategories = [
        {
            name: 'Tometo',
            icon: IL_Tomato_PNG,
            bgColor: 'rgba(255,234,232,0.5)',
            price: 1.53,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia lorem euismod purus viverra eleifend. Curabitur egestas mauris a eleifend mollis. Suspendisse potenti. Vestibulum',
          },
          {
            name: 'Pumpkin',
            icon: IL_Pumpkin,
            bgColor: 'rgba(238,244,143,0.5)',
            price: 1.53,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia lorem euismod purus viverra eleifend. Curabitur egestas mauris a eleifend mollis. Suspendisse potenti. Vestibulum',
          },
          {
            name: 'Brinjal',
            icon: IL_Brinjal,
            bgColor: 'rgba(238,224,248,0.51)',
            price: 1.53,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia lorem euismod purus viverra eleifend. Curabitur egestas mauris a eleifend mollis. Suspendisse potenti. Vestibulum',
          },
          {
            name: 'Caulifower',
            icon: IL_Cauliflawer_PNG,
            bgColor: 'rgba(148,250,145,0.5)',
            price: 1.53,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia lorem euismod purus viverra eleifend. Curabitur egestas mauris a eleifend mollis. Suspendisse potenti. Vestibulum',
          },
 
          {
            name: 'Red Onion',
            icon: IL_RedOnion,
            bgColor: 'rgba(251,216,224,0.5)',
            price: 1.53,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia lorem euismod purus viverra eleifend. Curabitur egestas mauris a eleifend mollis. Suspendisse potenti. Vestibulum',
          },
          {
            name: 'Brokoli',
            icon: IL_Brokoli,
            bgColor: 'rgba(148,250,145,0.5)',
            price: 1.53,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia lorem euismod purus viverra eleifend. Curabitur egestas mauris a eleifend mollis. Suspendisse potenti. Vestibulum',
          }

    ]

    
  return (
    <SafeAreaView style={styles.flex1}>
        <StatusBar barStyle={isDarkMode ? "light-content":"dark-content"} />
        <View style={styles.flex1}>
            {/* header */}
            <Header back cart onPress={()=>navigation.goBack()}/>
            <View style={styles.wrapperTitle}>
                <Text style={styles.title}> {route.params}</Text>
            </View>
            <Gap height={10}/>
           {/* content */}
            <ScrollView showsVerticalScrollIndicator={false}>
               <View style={styles.sectionBoxTopProduct}>
                {
                 dataCategories.map((item,index)=>{
                    return(
                        <BoxItemTopProduct 
                        key={index}
                        bgColor={item.bgColor} 
                        icon={item.icon}
                        text={item.name}
                        price={item.price}
                        onPress={()=>navigation.navigate('Detail',item)}
                      />
                                        )
                 })   
                }
               </View>
            </ScrollView>
            
        </View>
    </SafeAreaView>
  )
}

export default Categories

const styles = StyleSheet.create({
    flex1:{
        flex:1,
    },
    wrapperTitle:{
paddingHorizontal:20,
    },
    title:{
      fontSize:20,
      fontFamily:fonts.SemiBold,
      color:colors.primary
    },
    sectionBoxTopProduct:{
      flex:1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  
})