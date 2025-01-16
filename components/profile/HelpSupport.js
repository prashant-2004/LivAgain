import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Linking } from 'react-native';

// Get screen dimensions for responsive design
const { width } = Dimensions.get('window');

const HelpSupport = () => {
  // State to manage expanded sections
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Functions to handle contact actions
  const handleEmailPress = () => {
    Linking.openURL('mailto:support@livagain.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+1234567890');
  };

  const handleWhatsAppPress = () => {
    const phoneNumber = '9529695968';
    const message = 'Hello, I need some help with the LIVAGAIN platform.';
    const url = `whatsapp://send?text=${encodeURIComponent(message)}&phone=${phoneNumber}`;
    Linking.openURL(url).catch(() => {
      alert('Make sure WhatsApp is installed on your device');
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Help & Support</Text>

      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>Contact Us</Text>

        <TouchableOpacity style={styles.option} onPress={handleEmailPress}>
          <Text style={styles.optionText}>📧 Email Us</Text>
          <Text style={styles.optionDescription}>support@livagain.com</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={handlePhonePress}>
          <Text style={styles.optionText}>📞 Call Us</Text>
          <Text style={styles.optionDescription}>+1 234 567 890</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={handleWhatsAppPress}>
          <Text style={styles.optionText}>💬 WhatsApp Us</Text>
          <Text style={styles.optionDescription}>9529695968</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>Frequently Asked Questions (FAQ)</Text>

        {/* Payment Related Queries */}
        <TouchableOpacity style={styles.faqCategory} onPress={() => toggleSection('payment')}>
          <Text style={styles.faqCategoryText}>💳 Payment Related Queries</Text>
        </TouchableOpacity>
        {expandedSection === 'payment' && (
          <View style={styles.faqItemContainer}>
            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>Q: where my refund goes?</Text>
              <Text style={styles.faqAnswer}>A: ypur refund will be come in wallet.</Text>
            </View>
            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>Q: What should I do if my payment fails?</Text>
              <Text style={styles.faqAnswer}>A: Please try again with a different payment method. if it look lime problem frm our side report a problem by email or whatsapp.</Text>
            </View>
          </View>
        )}

        {/* Account Related Queries */}
        <TouchableOpacity style={styles.faqCategory} onPress={() => toggleSection('account')}>
          <Text style={styles.faqCategoryText}>🔐 Account Related Queries</Text>
        </TouchableOpacity>
        {expandedSection === 'account' && (
          <View style={styles.faqItemContainer}>
            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>Q: How can I reset my password?</Text>
              <Text style={styles.faqAnswer}>A: Go to profile page and it profile page click on first section where ypur names displays after that edit profile opens in that you will get a forgot or change password option</Text>
            </View>
            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>Q: How do I update my profile information?</Text>
              <Text style={styles.faqAnswer}>A: Navigate to "Profile" under that click on your details card and here you can update your details there.</Text>
            </View>
          </View>
        )}

        {/* Other Queries */}
        <TouchableOpacity style={styles.faqCategory} onPress={() => toggleSection('other')}>
          <Text style={styles.faqCategoryText}>❓ Other Queries</Text>
        </TouchableOpacity>
        {expandedSection === 'other' && (
          <View style={styles.faqItemContainer}>
            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>Q: How do I contact a mentor?</Text>
              <Text style={styles.faqAnswer}>A: You can reach out to mentors directly through the "Booking session with mentor" on the app</Text>
            </View>
            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>Q: What are the subscription plans?</Text>
              <Text style={styles.faqAnswer}>A: We offer Various mentorship plans. Visit the "Subscription" section for detailed information.</Text>
            </View>
          </View>
        )}
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
    paddingBottom: 20,
  },
  title: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  optionContainer: {
    marginBottom: 20,
  },
  optionTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 10,
  },
  option: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  optionText: {
    fontSize: width * 0.045,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  optionDescription: {
    fontSize: width * 0.04,
    color: '#666',
    marginTop: 5,
  },
  faqCategory: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  faqCategoryText: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  faqItemContainer: {
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  faqItem: {
    marginBottom: 10,
  },
  faqQuestion: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  faqAnswer: {
    fontSize: width * 0.04,
    color: '#555',
    marginTop: 5,
    paddingLeft: 10,
  },
});

export default HelpSupport;
