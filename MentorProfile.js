import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const MentorProfile = ({ route, navigation }) => {
  const { mentor } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={mentor.image} style={styles.profileImage} />
        <Text style={styles.name}>{mentor.name}</Text>
        <View style={styles.ratingContainer}>
          {Array.from({ length: 5 }).map((_, index) => (
            <FontAwesome 
              key={index}
              name={index < Math.floor(mentor.rating) ? 'star' : (mentor.rating - index > 0.5 ? 'star-half-empty' : 'star-o')}
              size={20}
              color="gold"
            />
          ))}
        </View>
        <Text style={styles.bio}>
          Hello, I am here to help you. I will try my best to solve your doubts and give my 100% to help you. Thank you.
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.bookButton} 
        onPress={() => navigation.navigate('BookSession')}
      >
        <Text style={styles.bookButtonText}>Book A Session</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6D1D1',
  },
  profileContainer: {
    alignItems: 'center',
    padding: width * 0.05, // Adjust padding based on screen width
  },
  profileImage: {
    width: width * 0.4, // Make profile image size responsive
    height: width * 0.4,
    borderRadius: (width * 0.4) / 2,
    marginBottom: 20,
  },
  name: {
    fontSize: width * 0.06, // Adjust font size based on screen width
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  bio: {
    fontSize: width * 0.04, // Adjust font size based on screen width
    textAlign: 'center',
    paddingHorizontal: width * 0.1, // Adjust padding to keep text within the screen
    marginBottom: 20,
    color: '#333',
  },
  bookButton: {
    backgroundColor: '#007BFF',
    paddingVertical: width * 0.04, // Adjust padding based on screen width
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: width * 0.1, // Add horizontal margin for padding on both sides
    marginBottom: 20,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: width * 0.05, // Adjust font size based on screen width
    fontWeight: 'bold',
  },
});

export default MentorProfile;
