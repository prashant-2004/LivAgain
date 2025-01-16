import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import {Picker} from '@react-native-picker/picker';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
// import Toast from 'react-native-toast-message'; 

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () =>{
    navigation.navigate("Login");
  }
  const handleRegister = async () => {
    try {
      // Register user with email and password
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;
      console.log('User registered with ID:', userId);

      // Map role to role_id
      const role_id = role === 'Student' ? 1 : role === 'Mentor' ? 2 : 0;

      // Save additional user info in Firestore (or use Realtime Database as needed)
      await firestore().collection('users').doc(userId).set({
        name: fullName,
        mobile_number: mobileNo,
        email: email,
        role_id:role_id,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      // Show success toast
      // Toast.show({
      //   type: 'success',
      //   position: 'top',
      //   text1: 'Registration Successful!',
      //   text2: 'You can now log in.',
      //   visibilityTime: 4000,
      // });

      console.log('User details saved to Firestore');
      navigation.navigate("Login");
    } catch (error) {
      console.log('Error during registration:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#999"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        placeholderTextColor="#999"
        keyboardType="phone-pad"
        value={mobileNo}
        onChangeText={setMobileNo}
      />
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
      <View style={styles.pickerContainer}>
          <Picker
            selectedValue={role}
            onValueChange={(itemValue) => setRole(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Role" value="" />
            <Picker.Item label="Student" value="Student" />
            <Picker.Item label="Mentor" value="Mentor" />
          </Picker>
        </View>


      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
      <Text style={styles.alreadyText_2}>Already have an Account.? </Text>


      <TouchableOpacity style={styles.alreadyAccount} onPress={handleLogin}>
              <Text style={styles.alreadyText}> Login </Text>
      </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align buttons vertically in the center
    marginTop: 20,
    justifyContent:'center'
  },
  // picker: {
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   borderRadius: 8,
  //   backgroundColor:'#000',
  //   padding: 12,
  //   marginVertical: 8,
  //   color:'#fff',
  // },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden', // Ensures the picker stays within rounded borders
    marginVertical: 8,
  },
  picker: {
    height: 60,
    color: '#333', // Customize text color inside the picker
    paddingHorizontal: 10, // Add padding for better alignment
    backgroundColor: '#f9f9f9',
  },
  
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color:"black"
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    color:'#000'
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  alreadyAccount: {
    marginTop: 'auto',
    alignItems: 'center',
  },
  alreadyText: {
    color: '#007bff',
    fontSize: 14,
  },
  alreadyText_2:{
    color:"#000",
    fontSize:14,
  }
});

export default Register;
