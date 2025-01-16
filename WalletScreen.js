import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const WalletScreen = () => {
  const transactions = [
    { id: 1, description: 'Mentor Session', amount: -20, date: 'Oct 15, 2024' },
    { id: 2, description: 'Added Funds', amount: 50, date: 'Oct 12, 2024' },
    { id: 3, description: 'Mentor Session', amount: -15, date: 'Oct 10, 2024' },
    { id: 4, description: 'Added Funds', amount: 100, date: 'Oct 8, 2024' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Wallet</Text>
      
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Balance</Text>
        <Text style={styles.balanceAmount}>₹120.00</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.withdrawButton]}>
          <Text style={styles.buttonText}>Withdraw</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.transactionsTitle}>Recent Transactions</Text>

      <ScrollView style={styles.transactionsContainer}>
        {transactions.map((transaction) => (
          <View key={transaction.id} style={styles.transactionItem}>
            <Text style={styles.transactionDescription}>{transaction.description}</Text>
            <Text style={styles.transactionDate}>{transaction.date}</Text>
            <Text
              style={[
                styles.transactionAmount,
                { color: transaction.amount < 0 ? '#ff6f61' : '#007BFF' },
              ]}
            >
              {transaction.amount < 0 ? `-₹${Math.abs(transaction.amount)}` : `+₹${transaction.amount}`}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6D1D1',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  balanceContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
  },
  balanceText: {
    fontSize: 16,
    color: '#777',
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007BFF',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  withdrawButton: {
    backgroundColor: '#ff6f61',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  transactionsContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  transactionDescription: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  transactionDate: {
    fontSize: 14,
    color: '#777',
    flex: 1,
    textAlign: 'center',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'right',
  },
});

export default WalletScreen;
