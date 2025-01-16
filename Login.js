import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
// import axios from 'axios';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = async () =>{
    navigation.navigate("Register")
  }
  const handleLogin = async () => {
    // try {
    //   const response = await axios.post('http://192.168.1.36:5000/api/auth/login', {
    //     email,
    //     password,
    //   });
    //   console.log('API Response:', response.data);
    //   const { role_id } = response.data;
    //   console.log("RESPONSE");
    //   if (role_id === 1) {
    //     navigation.navigate('AboutUs'); // Navigate to student_home.js
    //   } else if (role_id === 2) {
    //     navigation.navigate('History'); // Navigate to mentor_home.js
    //   } else {
    //     navigation.navigate('Home');
    //     Alert.alert('Invalid Role ID');
    //   }
    // } catch (error) {
    //   if (error.response) {
    //     // Backend returned an error response (e.g., 400 or 500)
    //     console.log('Error Response:', error.response.data);
    //   } else if (error.request) {
    //     // Request was made but no response received
    //     console.log('No Response:', error.request);
    //   } else {
    //     // Other errors
    //     console.log('Error:', error.message);
    //   }


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
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_2} onPress={handleRegister}>
        <Text style={styles.buttonText_2}>Register</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjust spacing between buttons
    alignItems: 'center', // Align buttons vertically in the center
    marginTop: 20,
  },
  button: {
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
    width:"45%"
  },
  button_2: {
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
    width:"45%"
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonText_2: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 16,
    alignItems: 'center',
  },
  forgotText: {
    color: '#007bff',
    fontSize: 14,
  },
});

export default Login;
