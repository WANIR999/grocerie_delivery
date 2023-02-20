 import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../res';
import {
  IC_Favorite,
  IC_Favorite_color,
  IC_Home,
  IC_Home_color,
  IC_Notification,
  IC_Notification_color,
  IC_Profile,
  IC_Profile_color,
} from '../../../res';

const Icon = ({label, isFocused}) => {
  switch (label) {
    case 'Home':
      return isFocused ? <IC_Home_color /> : <IC_Home />;
    case 'Favorite':
      return isFocused ? <IC_Favorite_color /> : <IC_Favorite />;
    case 'Notifications':
      return isFocused ? <IC_Notification_color /> : <IC_Notification />;
    case 'Profile':
      return isFocused ? <IC_Profile_color /> : <IC_Profile />;

    default:
      return <IC_Home_color />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Icon label={label} isFocused={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingTop: 28,
    paddingBottom: 33,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
  },
});
