import React, { useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

// Function to normalize size based on screen dimensions
const normalize = (size) => {
  const scale = width / 375; // 375 is the base width for scaling
  const newSize = size * scale;
  return Math.round(newSize);
};

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Navigate to Main Screen after 3 seconds
    setTimeout(() => {
      navigation.replace('Login'); // Navigate to MainTabs
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="fadeIn"
        duration={3000}
        source={require('./assets/LivAgainAppLOGO.png')} 
        style={{
          width: normalize(250), 
          height: normalize(300), 
        }}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default SplashScreen;
