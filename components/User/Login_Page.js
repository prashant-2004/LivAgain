import {React, useState} from 'react';
import { View, Text, ToastAndroid, Alert, TouchableOpacity, KeyboardAvoidingView, Image, TextInput, Platform } from 'react-native';
// import { auth, database } from '../../Firebase-config.js';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {ref, get} from 'firebase/database';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import CustomToast from '../CustomToast';
import styles from './Login_Style';

function Login_Page({navigation}) {
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');

  // AFTER DARK-MODE BUTTON CLICKED..-->>
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // AFTER LOGIN BUTTON CLICKED..-->>
  const handleLogin = async () => {
    console.log('Login button pressed');

     // Input validation for email and password
     if (!email.trim()) {
      Alert.alert('Required Field', 'Please enter your email address.');
      return;
    }
    if (!password.trim()) {
      Alert.alert('Required Field', 'Please enter your password.');
      return;
    }

    // Sign in the user with email and password using Firebase Authentication
    try {
      // Sign in the user with email and password using Firebase Authentication
      const userCredential = await auth().signInWithEmailAndPassword(email, password);

      // Get user ID and other user details from Firestore if needed
      const userId = userCredential.user.uid;
      const userDoc = await firestore().collection('users').doc(userId).get();

      if (userDoc.exists) {
        const user = userDoc.data();
        console.log('User logged in:', user);
        const role_id = user.role_id; // Get role_id from user data

        // Navigation logic based on role_id
        if (role_id === 1) {
          navigation.navigate('student_home'); // Navigate to student_home.js
        } else if (role_id === 2) {
          navigation.navigate('mentor_home'); // Navigate to mentor_home.js
        } else {
          // navigation.navigate('Home'); // Default home page
          Alert.alert('Invalid Role ID');
        }
      } 
      else {
        console.log('No additional user details found in Firestore.');
      }
    } catch (error) {
      console.log('Error during login:', error.message);
      Alert.alert('Login Failed', "Invalid Credentials, Please enter correct Email / Password"); // Alert on login failure
    }
  };

  // AFTER REGISTER BUTTON CLICKED..-->>
  const handleRegister = () => {
    // Add your register logic here
    console.log('Register button pressed');
    navigation.navigate('Register');
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.loginContainer, { backgroundColor: !darkMode ? '#fff' : '#000' }]}>

      {/* Dark Mode Toggle Button */}
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={toggleDarkMode}
      >
        <Image
          source={!darkMode ? require('../../assets/Dark_mode/moon-icon.png') : require('../../assets/Dark_mode/sun-icon.png')}
          style={styles.toggleIcon} />
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={require('../../assets/App_Logo/LivAgainAppLOGO.png')}
        style={styles.logo} />

      {/* E-mail ID Field */}
      <TextInput
        style={[styles.input, { backgroundColor: !darkMode ? '#333' : '#eee', color: darkMode ? '#000' : '#fff' }]}
        placeholder="E-mail ID"
        onChangeText={(text) => setEmail(text)}
        placeholderTextColor="#bbb" />

      {/* Password Field */}
      <TextInput
        style={[styles.input, { backgroundColor: !darkMode ? '#333' : '#eee', color: darkMode ? '#000' : '#fff' }]}
        placeholder="Password"
        placeholderTextColor="#bbb"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={!showPassword} />

      <TouchableOpacity
        style={styles.eyeIcon}
        onPress={() => setShowPassword(!showPassword)}
      >
        <Image
          source={showPassword ? require('../../assets/User/eye-open-icon.png') : require('../../assets/User/eye-closed-icon.png')}
          style={styles.eyeIconImage} />
      </TouchableOpacity>

      <View style={styles.buttonContainer}>

        {/* Login Button */}
        <TouchableOpacity
          style={[styles.loginButton]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Register Button */}
        <TouchableOpacity
          style={[styles.registerButton]}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

          {/* <CustomToast message={message} isVisible={showToast} duration={1000} /> */}
      </View>
    </KeyboardAvoidingView>
  );
}

export default Login_Page;