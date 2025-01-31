import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, StatusBar, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

// Function to normalize size based on screen dimensions
const normalize = (size) => {
  const scale = width / 375; // 375 is the base width for scaling
  return Math.round(size * scale);
};

// MentorCard Component
const MentorCard = ({ image, name, rating, navigation }) => {
  return (
    <TouchableOpacity 
      style={styles.mentorCard} 
      onPress={() => navigation.navigate('MentorProfile', { mentor: { image, name, rating } })}>
      <Image source={image} style={styles.mentorImage} />
      <Text style={styles.mentorName}>{name}</Text>
      <View style={styles.stars}>
        {Array.from({ length: 5 }).map((_, index) => (
          <FontAwesome 
            key={index}
            name={index < Math.floor(rating) ? 'star' : (rating - index > 0.5 ? 'star-half-empty' : 'star-o')}
            size={normalize(16)}
            color="gold"
          />
        ))}
      </View>
    </TouchableOpacity>
  );
};

// PromotionalCard Component with side image
const PromotionalCard = () => {
  return (
    <View style={styles.promoCard}>
      <View style={styles.promoContent}>
        <Text style={styles.promoTitle}>Want a perfect Mentor! Then what are you Waiting for Book Now</Text>
        <Text style={styles.promoSubtitle}>Booked by 1000+ Students</Text>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>Book A Mentor</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../../assets/cartoonimg46r7r785898968.jpg')} style={styles.promoImage} />
    </View>
  );
};

// SubscriptionsPlanCard Component
const SubscriptionsPlanCard = () => {
  return (
    <View style={styles.subPlanCard}>
      <Text style={styles.subPlanBanner}>Exclusive offer for You, Save ₹649</Text>
      <Text style={styles.subPlanTitle}>
        Unlimited* Consultations with <Text style={styles.mediBuddyText}>LivAgain</Text> GOLD
      </Text>
      <View style={styles.subPlanPriceSection}>
        <Text style={styles.subPlanPrice}>₹2999/-</Text>
      </View>
      <View style={styles.subPlanFeatures}>
        <View style={styles.featureRow}>
          <FontAwesome name="video-camera" size={normalize(18)} color="black" />
          <Text style={styles.featureText}>Video Call Consultations</Text>
        </View>
        <View style={styles.featureRow}>
          <FontAwesome name="comment" size={normalize(18)} color="black" />
          <Text style={styles.featureText}>Chat Consultations</Text>
        </View>
      </View>
      <Text style={styles.subPlanSubTitle}>Gold - 1 year price</Text>
      <View style={styles.subPlanDiscountSection}>
        <Text style={styles.discountText}>Save what you paid for last consultation</Text>
        <Text style={styles.discountAmount}>- 649</Text>
      </View>
      <View style={styles.subPlanDiscountSection}>
        <Text style={styles.discountText}>Get 5 Free Deals on Top Brands</Text>
      </View>
      <TouchableOpacity style={styles.subPlanButton}>
        <Text style={styles.subPlanButtonText}>Get GOLD - 1 Year Plan @2350</Text>
      </TouchableOpacity>
    </View>
  );
};

// Home Component with scrollable screen
const Mentor_Home = ({ navigation }) => {
  return (
    // Wrap the ScrollView with KeyboardAvoidingView for better handling on some devices
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView 
        style={styles.container} 
        contentContainerStyle={{ paddingBottom: normalize(80) }} // Add paddingBottom for bottom tabs
      >
        <StatusBar />
        <View style={styles.header}>
          <TouchableOpacity>
            <FontAwesome name="bars" size={normalize(24)} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>
            <Text style={styles.titleHighlight}>Liv</Text>Again FOR MENTOR
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={require('../../assets/cartoonimg46r7r785898968.jpg')} style={styles.profileIcon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Top Mentors</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mentorsScroll}>
          <MentorCard
            image={require('../../assets/temp1233433222323-removebg-preview.png')}
            name="Vedant Ekale"
            rating={4}
            navigation={navigation}
          />
          <MentorCard
            image={require('../../assets/cartoonimg46r7r785898968.jpg')}
            name="Prashant kale"
            rating={3.5}
            navigation={navigation}
          />
          <MentorCard
            image={require('../../assets/cartoonimg46r7r785898968.jpg')}
            name="Vaibahv H"
            rating={5}
            navigation={navigation}
          />
          <MentorCard
            image={require('../../assets/cartoonimg46r7r785898968.jpg')}
            name="Vaibhav Nirgude"
            rating={5}
            navigation={navigation}
          />
        </ScrollView>

        <PromotionalCard />
        <SubscriptionsPlanCard />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// Styles with normalization for responsiveness
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: normalize(20),
  },
  title: {
    fontSize: normalize(24),
    fontWeight: 'bold',
    color:'black'
  },
  titleHighlight: {
    color: 'skyblue',
  },
  profileIcon: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: normalize(20),
  },
  sectionTitle: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    marginBottom: normalize(10),
    color:"black"
  },
  mentorsScroll: {
    marginBottom: normalize(20),
  },
  mentorCard: {
    marginRight: normalize(15),
    width: normalize(120),
    alignItems: 'center',
  },
  mentorImage: {
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(50),
  },
  mentorName: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: normalize(5),
    color:"black"
  },
  stars: {
    flexDirection: 'row',
    marginTop: normalize(5),
  },
  promoCard: {
    backgroundColor: '#fff0f0',
    borderRadius: normalize(10),
    padding: normalize(15),
    marginBottom: normalize(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  promoContent: {
    flex: 1,
    marginRight: normalize(10),
  },
  promoTitle: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color:"black"
  },
  promoSubtitle: {
    fontSize: normalize(14),
    color: '#777',
    marginVertical: normalize(5),
  },
  promoButton: {
    backgroundColor: '#ff6666',
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(20),
    borderRadius: normalize(8),
  },
  promoButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  promoImage: {
    width: normalize(120),
    height: normalize(120),
    borderRadius: normalize(10),
  },
  subPlanCard: {
    backgroundColor: '#ffffff',
    borderRadius: normalize(10),
    padding: normalize(15),
    marginBottom: normalize(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  subPlanBanner: {
    backgroundColor: '#e0f7e8',
    color: '#6da06d',
    fontSize: normalize(12),
    fontWeight: '600',
    padding: normalize(5),
    borderRadius: normalize(8),
    textAlign: 'center',
    marginBottom: normalize(10),
  },
  subPlanTitle: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color:"black",
    marginBottom: normalize(8),
  },
  mediBuddyText: {
    color: '#ff3333',
  },
  subPlanPriceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: normalize(15),
  },
  subPlanPrice: {
    fontSize: normalize(24),
    fontWeight: 'bold',
  },
  subPlanFeatures: {
    marginBottom: normalize(15),
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(8),
  },
  featureText: {
    marginLeft: normalize(8),
    fontSize: normalize(14),
    color:"black"
  },
  subPlanSubTitle: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    marginTop: normalize(10),
    marginBottom: normalize(5),
    color:"black"
  },
  subPlanDiscountSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: normalize(5),
  },
  discountText: {
    fontSize: normalize(14),
    color: '#555',
  },
  discountAmount: {
    fontSize: normalize(14),
    fontWeight: 'bold',
    color: '#333',
  },
  subPlanButton: {
    backgroundColor: '#ffcc66',
    borderRadius: normalize(8),
    paddingVertical: normalize(10),
    alignItems: 'center',
    marginTop: normalize(10),
  },
  subPlanButtonText: {
    color: '#333',
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
});

export default Mentor_Home;
