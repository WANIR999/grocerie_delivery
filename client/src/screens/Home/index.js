import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import {
  colors,
  fonts,
  IC_Bakery,
  IC_Bakery2,
  IC_Drinks,
  IC_Fruits,
  IC_Search,
  IC_Vegetables,
  IL_Brokoli,
  IL_Cauliflawer_PNG,
  IL_Grapes_PNG,
  IL_Greentea_PNG,
  IL_RedOnion,
  IL_Tomato_PNG,
} from '../../res';
import {BoxItemTopProduct, Gap, Header} from '../../components';
import BoxItemCategories from '../../components/molecules/BoxitemsCategories';

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dataTopProducts = [
    {
      name: 'Grapes',
      icon: IL_Grapes_PNG,
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
      icon:IL_Greentea_PNG ,
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



  ];
  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View styles={styles.flex1}>
        {/* Header */}
        <Header drawer />
        <ScrollView showsHorizontalScrollIndicator={false}>
          {/* search */}
          <View style={{paddingHorizontal: 20}}>
            <View style={styles.wrapperSearch}>
              <TextInput placeholder="Search" style={styles.textInputSearch} />
              <IC_Search />
            </View>
          </View>
          {/* categories */}
          <View>
            <Text style={styles.titleCategories}>Categories</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.scrollViewCategories}>

                      <BoxItemCategories
                        icon={<IC_Fruits />}
                        color="rgba(169, 178, 169, 0.5)"
                        text="Fruits"
                        onPress={() => navigation.navigate('Categories', 'Fruits')}
                      />
                      <BoxItemCategories
                        icon={<IC_Vegetables />}
                        color="rgba(233, 255, 210, 0.5)"
                        text="Vegetables"
                        onPress={() => navigation.navigate('Categories', 'Vegetables')}
                      />
                      <BoxItemCategories
                        icon={<IC_Drinks />}
                        color="rgba(140, 175, 53, 0.5)"
                        text="Drinks"
                        onPress={() => navigation.navigate('Categories', 'Drinks')}
                      />
                      <BoxItemCategories
                        icon={<IC_Bakery />}
                        color="rgba(214, 255, 218, 0.5)"
                        text="Bakery"
                        onPress={() => navigation.navigate('Categories', 'Bakery')}
                      />
                      <BoxItemCategories
                        icon={<IC_Bakery2 />}
                        color="rgba(255, 250, 204, 0.5)"
                        text="Bakery"
                        onPress={() => navigation.navigate('Categories', 'Bakery')}
                      />
                    </ScrollView>
          </View>
          <Gap height={24} />
          {/*top products*/}
          <View>
            <View style={styles.wrapperHeadTopProducts} >
               <Text style={styles.titleTopProducts} >Top Products</Text>
               <TouchableOpacity>
                <Text style={styles.textSeeAll} >See All</Text>
              </TouchableOpacity> 
            </View>
            <View style={styles.sectionBoxTopProduct} >
             { dataTopProducts.map((item,index) => {
                return (
                  <BoxItemTopProduct 
                    key={index}
                    bgColor={item.bgColor} 
                    icon={item.icon}
                    text={item.name}
                    price={item.price}
                  />

                )
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  flex1: {flex: 1},
  wrapperSearch: {
    height: 40,
    backgroundColor: colors.lightGrey,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  titleCategories: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
    padding: 20,
  },
  wrapperHeadTopProducts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,  
  },
  titleTopProducts: {
    color: colors.primary,
    fontFamily: fonts.SemiBold,
    fontSize: 20
  },
  textSeeAll: {
    color: colors.black,
    fontFamily: fonts.Medium,
    fontSize: 12,
  },
  sectionBoxTopProduct:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'center'
  }
});
