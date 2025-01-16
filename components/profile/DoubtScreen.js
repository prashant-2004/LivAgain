import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Get screen dimensions
const { width } = Dimensions.get('window');

// Normalize function for responsive scaling
const normalize = (size) => {
  const scale = width / 375; // 375 is the base width for scaling
  return Math.round(size * scale);
};

// Reusable QuestionsCard Component
const QuestionsCard = ({ profileImage, questionText, isAnswered, onSeeAnswers }) => {
  return (
    <View style={styles.questionContainer}>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
      <View style={styles.QuestionsCard}>
        <Text style={styles.questionText}>{questionText}</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity
            style={styles.answeredButton}
            onPress={onSeeAnswers} // Trigger navigation
          >
            <Text style={styles.answeredButtonText}>
              {isAnswered ? 'See Answers' : ''}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Main DoubtScreen Component
const DoubtScreen = ({ navigation }) => {
  const questions = [
    {
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      questionText: 'How Many Score I need to get admission in AIIMS Delhi?',
      isAnswered: true,
    },
    {
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
      questionText: 'How Many Score I need to get admission in AIIMS Nagpur?',
      isAnswered: true,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <SearchBar />
      {/* Buttons Section */}
      <View style={styles.buttonContainer}>
      <TouchableOpacity 
  style={styles.postButton} 
  onPress={() => navigation.navigate('PostQuestion')}
>
  <Text style={styles.buttonText}>Post a Question</Text>
</TouchableOpacity>

<TouchableOpacity 
  style={styles.yourQuestionsButton} 
  onPress={() => navigation.navigate('YourPostedQuestion')}
>
  <Text style={styles.buttonText}>Your posted Questions</Text>
</TouchableOpacity>

      </View>
      {/* Questions List */}
      <ScrollView contentContainerStyle={styles.content}>
        {questions.map((question, index) => (
          <QuestionsCard
            key={index}
            profileImage={question.profileImage}
            questionText={question.questionText}
            isAnswered={question.isAnswered}
            onSeeAnswers={() => navigation.navigate('SeeAnswers', { question: question.questionText })}
          />
        ))}
      </ScrollView>
    </View>
  );
};

// SearchBar Component
const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <FontAwesome name="search" size={normalize(20)} color="#888" style={styles.searchIcon} />
      <TextInput placeholder="Search Questions" placeholderTextColor="#888" style={styles.searchInput} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f8f9fa',
  },
  postButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  yourQuestionsButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    padding: 15,
  },
  questionContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  QuestionsCard: {
    flex: 1,
    backgroundColor: '#FFE4C4',
    borderRadius: 15,
    padding: 15,
  },
  questionText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
    lineHeight: 18,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  answeredButton: {
    backgroundColor: '#007BFF',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginLeft: 'auto',
  },
  answeredButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: normalize(10),
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: normalize(10),
    marginBottom: normalize(5),
    height: normalize(40),
  },
  searchIcon: {
    marginRight: normalize(10),
  },
  searchInput: {
    flex: 1,
    fontSize: normalize(14),
    color: '#333',
  },
});

export default DoubtScreen;
