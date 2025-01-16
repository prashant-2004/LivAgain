import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';


const BookingPage = ({ navigation }) => {
  const [duration, setDuration] = useState(''); // Input for call duration
  const ratePerMinute = 5; // Example rate
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateRate = () => {
    const amount = parseInt(duration) * ratePerMinute;
    setTotalAmount(amount);
  };

  const proceedToPayment = () => {
    calculateRate();
    navigation.navigate('PaymentPage', { totalAmount, duration });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Duration (in minutes)"
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
      />
      <Button title="Calculate Rate" onPress={calculateRate} />
      <Text style={styles.amountText}>Total Amount: ${totalAmount}</Text>
      <Button title="Proceed to Payment" onPress={proceedToPayment} />
    </View>
  );
};

const styles = StyleSheet.create({
    amountText:{color:'black'},
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', color:'black' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: '80%', color:'black', padding: 10 },
});

export default BookingPage;