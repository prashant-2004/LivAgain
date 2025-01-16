import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddMentorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dout Screen</Text>
      <Text>This is the Q&A screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AddMentorScreen;
