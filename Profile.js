import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, PixelRatio } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

// Function to normalize size based on screen dimensions
const normalize = (size) => {
  const scale = width / 375; // 375 is the base width for scaling
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Profile Card */}
      <View style={styles.profileCard}>
        <TouchableOpacity style={styles.profileHeader} onPress={() => navigation.navigate('EditProfile')}>
          <Image source={require('./assets/cartoonimg46r7r785898968.jpg')} style={styles.profileImage} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>Vaibhav Hiremath</Text>
            <Text style={styles.subHeader}>Neet Aspirant</Text>
          </View>
          <FontAwesome name="chevron-right" size={normalize(24)} color="#4B8EF4" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>

      {/* Menu Items */}
      <ScrollView contentContainerStyle={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Transactions')}>
          <FontAwesome name="money" size={normalize(24)} color="#4B8EF4" />
          <Text style={styles.menuText}>Transactions</Text>
          <FontAwesome name="chevron-right" size={normalize(24)} color="#4B8EF4" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('History')}>
          <FontAwesome name="history" size={normalize(24)} color="#4B8EF4" />
          <Text style={styles.menuText}>History</Text>
          <FontAwesome name="chevron-right" size={normalize(24)} color="#4B8EF4" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SavedMentors')}>
          <FontAwesome name="users" size={normalize(24)} color="#4B8EF4" />
          <Text style={styles.menuText}>Saved Mentors</Text>
          <FontAwesome name="chevron-right" size={normalize(24)} color="#4B8EF4" style={styles.arrowIcon} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('HelpSupport')}>
          <FontAwesome name="support" size={normalize(24)} color="#4B8EF4" />
          <Text style={styles.menuText}>Help & Support</Text>
          <FontAwesome name="chevron-right" size={normalize(24)} color="#4B8EF4" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AboutUs')}>
          <FontAwesome name="info-circle" size={normalize(24)} color="#4B8EF4" />
          <Text style={styles.menuText}>About Us</Text>
          <FontAwesome name="chevron-right" size={normalize(24)} color="#4B8EF4" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('PrivacyPolicies')}>
          <FontAwesome name="file-text" size={normalize(24)} color="#4B8EF4" />
          <Text style={styles.menuText}>Privacy Policies</Text>
          <FontAwesome name="chevron-right" size={normalize(24)} color="#4B8EF4" style={styles.arrowIcon} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F6FC',
  },
  profileCard: {
    padding: normalize(20),
    backgroundColor: '#fff',
    borderRadius: normalize(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: normalize(2),
    },
    shadowOpacity: 0.1,
    shadowRadius: normalize(4),
    elevation: 5,
    margin: normalize(10),
    marginBottom: normalize(20),
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(30),
    marginRight: normalize(15),
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: normalize(24),
    fontWeight: 'bold',
    color: '#333',
  },
  subHeader: {
    fontSize: normalize(14),
    color: '#666',
    marginTop: normalize(5),
  },
  arrowIcon: {
    marginLeft: normalize(10),
  },
  menuContainer: {
    padding: normalize(10),
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(15),
    backgroundColor: '#fff',
    borderRadius: normalize(10),
    marginVertical: normalize(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: normalize(1),
    },
    shadowOpacity: 0.1,
    shadowRadius: normalize(2),
    elevation: 2,
  },
  menuText: {
    marginLeft: normalize(15),
    fontSize: normalize(16),
    color: '#333',
    flex: 1,
  },
});

export default Profile;
