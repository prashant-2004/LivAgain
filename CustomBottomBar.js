// CustomBottomBar.js
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomBottomBar = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <View style={styles.buttonContainer}>
          <Image source={require('./home.png')} style={styles.tabIcon} />
          <Text style={styles.tabText}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Wallet')}>
        <View style={styles.buttonContainer}>
          <Image source={require('./wallet.png')} style={styles.tabIcon} />
          <Text style={styles.tabText}>Wallet</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Winners')}>
        <View style={styles.buttonContainer}>
          <Image source={require('./winners.png')} style={styles.tabIcon} />
          <Text style={styles.tabText}>Winners</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Profile')}>
        <View style={styles.buttonContainer}>
          <Image source={require('./profile.png')} style={styles.tabIcon} />
          <Text style={styles.tabText}>Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ECEDFF', // Customize the background color
    height: 50,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  tabIcon: {
    width: 25, // Adjust the width of the image
    height: 25, // Adjust the height of the image
  },
  tabText: {
    color: 'black', // Customize the text color
    marginTop: 0, // Adjust the spacing between image and text
  },
});

export default CustomBottomBar;
