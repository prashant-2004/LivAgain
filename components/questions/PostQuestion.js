import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// Normalize function for responsive scaling
const normalize = (size) => {
  const scale = width / 375;
  return Math.round(size * scale);
};

const PostQuestion = ({ navigation }) => {
  const [question, setQuestion] = useState('');

  const handlePost = () => {
    if (question.trim()) {
      // Add logic to save the question
      console.log('Posted Question:', question);
      setQuestion('');
      navigation.goBack(); // Go back to the previous screen after posting
    } else {
      alert('Please write a question before posting!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post Your Question</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your question here..."
        placeholderTextColor="#888"
        value={question}
        onChangeText={setQuestion}
        multiline
      />
      <TouchableOpacity style={styles.postButton} onPress={handlePost}>
        <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: normalize(20),
  },
  title: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    marginBottom: normalize(15),
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: normalize(10),
    padding: normalize(15),
    fontSize: normalize(14),
    textAlignVertical: 'top',
    height: normalize(100),
    marginBottom: normalize(15),
  },
  postButton: {
    backgroundColor: '#28a745',
    paddingVertical: normalize(10),
    borderRadius: normalize(5),
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
});

export default PostQuestion;
