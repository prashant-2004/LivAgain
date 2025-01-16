import React, { useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const PaymentPage = ({ route, navigation }) => {
  const { totalAmount, duration } = route.params;

  const initiatePayment = () => {
    const options = {
      description: 'Call Payment',
      image: 'https://yourlogo.com/logo.png',
      currency: 'USD',
      key: 'RAZORPAY_KEY', // Replace with your Razorpay key
      amount: totalAmount * 100, // Convert amount to the smallest currency unit
      name: 'Your App Name',
      prefill: {
        email: 'user@example.com',
        contact: '1234567890',
        name: 'User Name',
      },
      theme: { color: '#F37254' },
    };

    RazorpayCheckout.open(options)
      .then((data) => {
        // Payment successful
        Alert.alert('Success', `Payment ID: ${data.razorpay_payment_id}`);
        // Navigate to the corresponding call page based on duration
        navigation.navigate('AudioCallScreen', { duration }); // Change to 'VideoCallScreen' if needed
      })
      .catch((error) => {
        // Payment failed
        Alert.alert('Payment Failed', error.description);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total Amount: ${totalAmount}</Text>
      <Text style={styles.text}>Call Duration: {duration} minutes</Text>
      <Button title="Proceed to Pay" onPress={initiatePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, marginBottom: 10 },
});

export default PaymentPage;
