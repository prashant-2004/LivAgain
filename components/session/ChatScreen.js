import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

// Normalize function for responsive scaling
const normalize = (size) => {
  const scale = width / 375;
  return Math.round(size * scale);
};
const MentorCard = [
  {
    id: '1',
    name: 'Vaibhav',
    details: 'IT Engineer\nEnglish, Hindi, Marathi\nExp: 6 Years',
    price: '₹ 24/min',
    Guidence: '632 Guidence',
    rating: 5,
    image: require('../../assets/cartoonimg46r7r785898968.jpg'),
  },
  {
    id: '2',
    name: 'Vaibhav N',
    details: 'MBBS \nEnglish, Hindi, Marathi\nExp: 4 Years',
    price: '₹ 20/min',
    Guidence: '3743 Guidence',
    rating: 5,
    image: require('../../assets/cartoonimg46r7r785898968.jpg'),
  },
  {
    id: '3',
    name: 'Vedant',
    details: 'AI Engineer\nEnglish, Hindi, Marathi\nExp: 3 Years',
    price: '₹ 20/min',
    Guidence: '6747 Guidence',
    rating: 5,
    image: require('../../assets/cartoonimg46r7r785898968.jpg'),
  },
  {
    id: '4',
    name: 'Vedant',
    details: 'AI Engineer\nEnglish, Hindi, Marathi\nExp: 3 Years',
    price: '₹ 20/min',
    Guidence: '6747 Guidence',
    rating: 5,
    image: require('../../assets/cartoonimg46r7r785898968.jpg'),
  },
  {
    id: '5',
    name: 'Vedant',
    details: 'AI Engineer\nEnglish, Hindi, Marathi\nExp: 3 Years',
    price: '₹ 20/min',
    Guidence: '6747 Guidence',
    rating: 5,
    image: require('../../assets/cartoonimg46r7r785898968.jpg'),
  },
  {
    id: '6',
    name: 'Vedant',
    details: 'AI Engineer\nEnglish, Hindi, Marathi\nExp: 3 Years',
    price: '₹ 20/min',
    Guidence: '6747 Guidence',
    rating: 5,
    image: require('../../assets/cartoonimg46r7r785898968.jpg'),
  },
];

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <FontAwesome name="search" size={normalize(20)} color="#888" style={styles.searchIcon} />
      <TextInput
        placeholder="Search for mentors"
        placeholderTextColor="#888"
        style={styles.searchInput}
      />
    </View>
  );
};

const ChatScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToMentorProfile = (mentor) => {
    navigation.navigate('MentorProfile', { mentor }); // Pass mentor details to MentorProfile
  };

  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        data={MentorCard}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleNavigateToMentorProfile(item)}
          >
            <View style={styles.cardContent}>
              <View style={styles.leftSection}>
                <Image source={item.image} style={styles.avatar} />
                <View style={styles.ratingContainer}>
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <FontAwesome key={index} name="star" size={12} color="#FFD700" />
                  ))}
                </View>
                <Text style={styles.Guidence}>{item.Guidence}</Text>
              </View>
              <View style={styles.rightSection}>
                <View style={styles.textInfo}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.details}>{item.details}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.chatButton}
                    onPress={() => handleNavigateToMentorProfile(item)}
                  >
                    <Text style={styles.chatButtonText}>Free Chat</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSection: {
    alignItems: 'center',
    marginRight: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#2392d1',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  Guidence: {
    fontSize: 12,
    color: '#777',
    marginTop: 3,
  },
  rightSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  details: {
    fontSize: 12,
    color: '#777',
    marginVertical: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  chatButton: {
    backgroundColor: '#2392d1',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 5,
  },
  chatButtonText: {
    color: '#fff',
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

export default ChatScreen;