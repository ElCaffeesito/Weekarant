import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute, NavigationProp, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

export function Navbar() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList>>();

  const handleNavigate = (screen: keyof RootStackParamList) => {
    if (route.name !== screen) {
      navigation.navigate(screen);
    }
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => handleNavigate('Home')}>
        <Text style={styles.link}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigate('Profile')}>
        <Text style={styles.link}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'black',
  },
  link: {
    color: 'white',
    fontSize: 16,
  },
});
