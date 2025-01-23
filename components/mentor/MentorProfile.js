import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const normalize = (size) => {
  const scale = width / 375;
  return Math.round(size * scale);
};

const MentorProfile = ({ route, navigation }) => {
  const { mentor } = route.params;

  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Mentor Card */}
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.leftSection}>
              <Image source={mentor.image} style={styles.avatar} />
              <View style={styles.ratingContainer}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <FontAwesome
                    key={index}
                    name={
                      index < Math.floor(mentor.rating)
                        ? 'star'
                        : mentor.rating - index > 0.5
                        ? 'star-half-empty'
                        : 'star-o'
                    }
                    size={12}
                    color="#FFD700"
                  />
                ))}
              </View>
              <Text style={styles.guidence}>{mentor.Guidence}</Text>
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.name}>{mentor.name}</Text>
              <Text style={styles.details}>{mentor.details}</Text>
              <Text style={styles.price}>{mentor.price}</Text>
            </View>
          </View>
        </View>

        {/* Bio Section */}
        <View style={styles.biocard}>
        <View style={styles.profileContainer}>
          <Text style={styles.bio}>
            Hello, I am here to help you. I will try my best to solve your doubts and give my 100% to help you. Thank you.
          </Text>
        </View>
        </View>
      </ScrollView>

      {/* Footer with Box Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButtonBox}
          onPress={() => navigation.navigate('ChatSession')}
        >
          <FontAwesome name="comments" size={normalize(24)} color="#2392d1" />
          <Text style={styles.footerButtonText}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButtonBox}
          onPress={() => navigation.navigate('VideoCallRoom')}
        >
          <FontAwesome name="video-camera" size={normalize(24)} color="#2392d1" />
          <Text style={styles.footerButtonText}>Video Call</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButtonBox}
          onPress={() => navigation.navigate('AudioCallSession')}
        >
          <FontAwesome name="phone" size={normalize(24)} color="#2392d1" />
          <Text style={styles.footerButtonText}>Audio Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollContent: {
    paddingBottom: normalize(80), // To avoid overlapping with the footer
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
  guidence: {
    fontSize: 12,
    color: '#777',
    marginTop: 3,
  },
  rightSection: {
    flex: 1,
    justifyContent: 'center',
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
  profileContainer: {
    alignItems: 'center',
    padding: normalize(20),
  },
  bio: {
    fontSize: normalize(18),
    textAlign: 'center',
    color: '#333',
  },
  biocard: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 10,
    padding: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
 
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: normalize(80),
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
  },
  footerButtonBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 8,
    width: normalize(100),
    height: normalize(60),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  footerButtonText: {
    color: '#2392d1',
    fontSize: normalize(12),
    marginTop: 5,
    textAlign: 'center',
  },
});

export default MentorProfile;
