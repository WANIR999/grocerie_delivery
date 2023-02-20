import React,{useState} from 'react'
import { StyleSheet, StatusBar,Text,Image, useColorScheme, View, ScrollView } from 'react-native'
import {Header,Counter,BoxRelateditems,Gap,Button} from '../../components'
import { colors, fonts, IL_Brokoli, IL_Cauliflawer_PNG, IL_Greentea_PNG, IL_RedOnion, IL_Tomato_PNG } from '../../res';

const Detail = ({route,navigation}) => {
  const dataParams = route.params;
  const bgColor = route.params.bgColor

  const isDarkMode = useColorScheme()==='dark'
  const [totalihems,SetTotalihems] = useState(1)
  const dataTopProducts = [
    {
      name: 'Grapes',
      icon: IL_Greentea_PNG,
      bgColor: 'rgba(277,286,243,0.5)',
      price: 1.53,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia lorem euismod purus viverra eleifend. Curabitur egestas mauris a eleifend mollis. Suspendisse potenti. Vestibulum',
    },
    {
      name: 'Tometo',
      icon: IL_Tomato_PNG,
      bgColor: 'rgba(255,234,232,0.5)',
      price: 1.53,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia lorem euismod purus viverra eleifend. Curabitur egestas mauris a eleifend mollis. Suspendisse potenti. Vestibulum',
    },
    {
      name: 'Drinkes',
      icon:IL_Greentea_PNG,
      bgColor: 'rgba(187,288,2136,0.5)',
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
      bgColor: 'rgba(251,216,224,0.5)',
      price: 1.53,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia lorem euismod purus viverra eleifend. Curabitur egestas mauris a eleifend mollis. Suspendisse potenti. Vestibulum',
    }
  ]

  const onCounterChange = value =>{
    SetTotalihems(value)
  }
  return (
    <ScrollView style={styles.flex1(bgColor)}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {/* header */}
  <Header back cart onPress={()=> navigation.goBack()}/>
    <View style={styles.wrapperImg}>
      <Image source={dataParams.icon} style={styles.image}/>
    </View>
    {/* content */}
    <View style={styles.content}>
        <View style={styles.wrapperTopContent}>
          <View style={styles.rowTopContent}>
           <Text style={styles.name}> {dataParams.name} </Text>
             <Counter onValueChange={onCounterChange}/>
          </View>
          <View>
           <Text style={styles.price}> {dataParams.price} /Kg</Text>
          </View>
          <Text style={styles.description}> {dataParams.description} </Text>
          {/* related items */}
          <View style={styles.wrapperRelatedItems}>
          <Text style={styles.titleRelatedItems}>titleRelatedItems </Text>
          {/* scroll view */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
              <View style={{flexDirection:'row',marginTop:20,paddingLeft:20}}>
              {/* <BoxRelateditems/> */}
              {
             dataTopProducts.map((item,index)=>{
              return (
                <BoxRelateditems
                key={index}
                image={item.icon}
                name={item.name}
                price={item.price}
                bgColor={item.bgColor}

                
                />
              )

             })
              }
                
              </View>

            </ScrollView>

          </View>
{/* button */}
<Gap height={50}/>
<Button text="Add To cart"/>



        </View>
    </View>


    </ScrollView>
  )
}

export default Detail

const styles = StyleSheet.create({
  flex1:bgColor=>({
    backgroundColor:bgColor,
  }),
  wrapperImg:{
    justifyContentcenter: 'center',
    alignItems:'center'
  },
  image:{
    height:150,
    width:150,
    resizeMode:'contain'
  },
  content:{
    width:'100%',
    height: 560,
    backgroundColor:colors.white,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    marginTop:30,
    paddingTop:34,
  },
  wrapperTopContent:{
    marginBottom:28,
    paddingHorizontal:20,
  },
  rowTopContent:{
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  name:{
    fontFamily:fonts.SemiBold,
    fontSize:20
  },
  price:{
    fontFamily:fonts.Regular,
    fontSize:14,
    color:colors.gray


  },
  description:{
    paddingHorizontal:20,
    fontFamily:fonts.SemiBold,
  },
  wrapperRelatedItems:{
    marginTop:25,

  },
  titleRelatedItems:{
    fontFamily:fonts.SemiBold,
    fontSize:14,
    color:colors.primary,
    paddingHorizontal:20




  }


})