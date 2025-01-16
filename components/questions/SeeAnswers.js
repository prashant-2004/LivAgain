import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SeeAnswers = ({ route }) => {
  const { question } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.questionTitle}>Question:</Text>
      <Text style={styles.questionText}>{question}</Text>
      <Text style={styles.answersTitle}>Answers:</Text>
      <Text style={styles.answerText}>1. Answer 1...</Text>
      <Text style={styles.answerText}>2. Answer 2...</Text>
      <Text style={styles.answerText}>3. Answer 3...</Text>
      <Text style={styles.answerText}>4. Answer 4...</Text>
      


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  questionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  answersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answerText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default SeeAnswers;
