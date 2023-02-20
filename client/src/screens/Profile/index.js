import { ScrollView,ImageBackground, StyleSheet, Image,TouchableOpacity,Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/FontAwesome5'



import { profil, IL_GetStarted_PNG,colors} from '../../res'

const Profile = () => {
  return (
    <View>
    <ScrollView>
        <View style={{padding:10,width:'100%',backgroundColor:colors.black,height:200}}>
        
          <TouchableOpacity>

              <Icon2  name='logoute' size={30} paddingHorizontal={10} color={colors.white} width={50} height={30}/>

          </TouchableOpacity>
        </View>
        <View style={{alignItems:'center' }}>
        <Image source={profil} style={styles.profile}>
           </Image>
           <Text style={{fontSize:30 ,paddingLeft:50,fontWeight:'bold', padding:10}}>   EL Mehdi        </Text>

        </View>
        <View style={{alignSelf:'center',
         flexDirection:'row',
         justifyContent: 'center',
         backgroundColor:'#fff',
         width:'90%',
         gap:6,
         padding:20,
         borderRadius:10,
         shadowOpacity:80,
         elevation:15,
         marginTop:20
         }}>
        <Icon   name='old-phone' size={40}  color={colors.darkGreen} width={40} height={40}/>
        <Text style={{fontSize:30}}> 077778770 </Text>
        </View>
        
        
        <View style={{alignSelf:'center',
         flexDirection:'row',
         justifyContent: 'center',
         backgroundColor:'#fff',
         width:'90%',
         gap:6,
         padding:20,
         borderRadius:10,
         shadowOpacity:80,
         elevation:15,
         marginTop:20
         }}>
        <Icon   name='user' size={40}  color={colors.darkGreen} width={40} height={40}/>
        <Text style={{fontSize:30}}> El Mehdi Nainia </Text>
        </View>


        <View style={{alignSelf:'center',
         flexDirection:'row',
         justifyContent: 'center',
         backgroundColor:'#fff',
         width:'90%',
         gap:6,
         padding:20,
         borderRadius:10,
         shadowOpacity:80,
         elevation:15,
         marginTop:20
         }}>
        <Icon3   name='address-card' size={40}  color={colors.darkGreen} width={50} height={40}/>
        <Text style={{fontSize:20}}> ElMehdiNainia@gmail.com </Text>
        </View>




    </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  profile: {
    width:140,
    height:140,
    borderRadius:100,
    marginTop:-70,
    shadowColor:colors.darkGreen
  }
})