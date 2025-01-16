import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

// Get screen width and height for responsive adjustments
const { width } = Dimensions.get('window');

const AboutUs = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>About Us</Text>

      <Text style={styles.sectionTitle}>LivAgain</Text>
      <Text style={styles.content}>
        Our goal is to provide <Text style={styles.highlight}>Quality Mentors</Text> for free! From experienced ones to those in need…
      </Text>

      <Text style={styles.sectionTitle}>Who We Are?</Text>
      <Text style={styles.content}>
        We’re MBBS Students! We understand the aspirations of NEET students.
      </Text>

      <Text style={styles.sectionTitle}>Our Team</Text>
      <View style={styles.ceoContainer}>
        <Image source={require('../../assets/CEO_Livagain_Photo.png')} style={styles.ceoImage} />
        <Text style={styles.ceoName}>Mr. Vaibhav Nirgude</Text>
        <Text style={styles.ceoTitle}>Founder & CEO, Livagain</Text>
      </View>

      <Text style={styles.sectionTitle}>Our Story</Text>
      <Text style={styles.content}>
        We started in April 2023. We know the importance of the right guide at the right time. Many of us suffered from a lack of quality guidance during our NEET/JEE Preparation. And thus, we came up with providing ‘Free Mentorship‘ to NEET aspirants!
      </Text>
      <Text style={styles.content}>
        From Experienced one to Needy one…
      </Text>

      <Text style={styles.sectionTitle}>Team Livagain</Text>
      <Text style={styles.content}>
        We offer various modes of communication including live video, email support, and phone calls, to ensure that you can get in touch with us in the most convenient way possible. Our experts are available round the clock, so you can contact us at any time of the Day or Night.
      </Text>
      <Text style={styles.content}>
        At our doubt-solving website, we understand the importance of personalized attention, and we strive to provide each of our users with customized solutions to their specific queries. We believe in empowering our users to learn and grow, and we do everything we can to help them achieve their goals.
      </Text>
      <Text style={styles.content}>
        So if you are looking for reliable and efficient solutions through the LIVAGAIN Website, look no further! Join our community today and take the first step toward unlocking your full potential.
      </Text>

     

      <Text style={styles.sectionTitle}>Meet the Team</Text>
      <View style={styles.teamContainer}>
        <View style={styles.teamMember}>
          <Image source={require('../../assets/Livagain_Team_Jyotiba.jpg')} style={styles.teamImage} />
          <Text style={styles.teamName}>Jyotiba Sadawarte</Text>
          <Text style={styles.teamRole}>MBBS Student @GMC, Nanded</Text>
        </View>
        <View style={styles.teamMember}>
          <Image source={require('../../assets/Livagain_Team_Nikhil.jpg')} style={styles.teamImage} />
          <Text style={styles.teamName}>Nikhil Jogdand</Text>
          <Text style={styles.teamRole}>BDS Student @SDDC, Parbhani</Text>
        </View>
        <View style={styles.teamMember}>
          <Image source={require('../../assets/Livagain_Team_AhmedGaniyani.jpg')} style={styles.teamImage} />
          <Text style={styles.teamName}>Ahmed Ganiyani</Text>
          <Text style={styles.teamRole}>MBBS Student @GMC, Nanded</Text>
        </View>
      </View>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  contentContainer: {
    padding: width * 0.05,
  },
  title: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  sectionTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#444',
  },
  content: {
    fontSize: width * 0.04,
    lineHeight: width * 0.06,
    color: '#555',
    textAlign: 'justify',
    marginTop: 10,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#007BFF',
  },
  ceoContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  ceoImage: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.15,
    marginBottom: 10,
  },
  ceoName: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#333',
  },
  ceoTitle: {
    fontSize: width * 0.04,
    color: '#666',
  },
  statsContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  statText: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: width * 0.05,
    color: '#007BFF',
    marginTop: 5,
  },
  statDescription: {
    fontSize: width * 0.04,
    color: '#555',
    textAlign: 'center',
    marginTop: 5,
  },
  teamContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  teamMember: {
    width: width * 0.4,
    alignItems: 'center',
    marginBottom: 15,
  },
  teamImage: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.15,
  },
  teamName: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  teamRole: {
    fontSize: width * 0.035,
    color: '#666',
  },
});

export default AboutUs;
