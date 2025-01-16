import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, ImageBackground } from 'react-native';

// Get screen width and height for responsive adjustments
const { width, height } = Dimensions.get('window');

// background image
const backgroundImage = require('./assets/LivAgainAppLOGO.png');

const PrivacyPolicies = () => {
  return (
    <ImageBackground 
      source={backgroundImage} 
      style={styles.backgroundImage}
      imageStyle={styles.backgroundImageStyle} // Additional styling for the image
    >
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Privacy Policy for LIVAGAIN</Text>
        
        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.content}>
          LIVAGAIN is committed to protecting the privacy of its users. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our platform. By using LIVAGAIN, you consent to the data practices described in this policy.
        </Text>

        <Text style={styles.sectionTitle}>Information We Collect</Text>
        <Text style={styles.subTitle}>Personal Information</Text>
        <Text style={styles.content}>
          Account Information: When you register on our platform, we collect information such as your name, email address, phone number, educational background, and other contact details.
        </Text>
        <Text style={styles.content}>
          Payment Information: When you purchase a subscription plan, we collect payment information such as credit/debit card details, billing address, and transaction data.
        </Text>

        <Text style={styles.subTitle}>Usage Data</Text>
        <Text style={styles.content}>
          Log Data: We collect information that your browser sends whenever you visit our platform. This may include your IP address, browser type, browser version, the pages of our platform that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
        </Text>
        <Text style={styles.content}>
          Cookies and Tracking Technologies: We use cookies and similar tracking technologies to track the activity on our platform and hold certain information.
        </Text>

        <Text style={styles.subTitle}>Communications</Text>
        <Text style={styles.content}>
          Customer Support: When you contact us for support, we may collect information about your communication, including your name, email address, the content of your messages, and any other information you choose to provide.
        </Text>

        <Text style={styles.sectionTitle}>How We Use Your Information</Text>
        <Text style={styles.content}>
          We use the information we collect for various purposes, including:
        </Text>
        <Text style={styles.bulletPoint}>• Providing, operating, and maintaining our platform.</Text>
        <Text style={styles.bulletPoint}>• To improve, personalize, and expand our platform.</Text>
        <Text style={styles.bulletPoint}>• To understand and analyze how you use our platform.</Text>
        <Text style={styles.bulletPoint}>• To develop new products, services, features.</Text>

        <Text style={styles.sectionTitle}>How We Share Your Information</Text>
        <Text style={styles.subTitle}>With Service Providers</Text>
        <Text style={styles.content}>
          We may share your information with third-party service providers to perform functions and provide services to us, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
        </Text>
        <Text style={styles.subTitle}>For Business Transfers</Text>
        <Text style={styles.content}>
          We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
        </Text>
        <Text style={styles.subTitle}>With Your Consent</Text>
        <Text style={styles.content}>
          We may disclose your personal information for any other purpose with your consent.
        </Text>
        <Text style={styles.subTitle}>To Comply with Legal Requirements</Text>
        <Text style={styles.content}>
          We may disclose your information if we believe it is necessary to:
        </Text>
        <Text style={styles.bulletPoint}>• Comply with applicable laws, regulations, or legal processes.</Text>
        <Text style={styles.bulletPoint}>• Protect and defend the rights or property of LIVAGAIN.</Text>
        <Text style={styles.bulletPoint}>• Prevent or investigate possible wrongdoing in connection with the platform.</Text>
        <Text style={styles.bulletPoint}>• Protect the personal safety of users of the platform or the public.</Text>
        <Text style={styles.bulletPoint}>• Protect against legal liability.</Text>

        <Text style={styles.sectionTitle}>Data Security</Text>
        <Text style={styles.content}>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure. We cannot guarantee absolute security.
        </Text>

        <Text style={styles.sectionTitle}>Your Data Protection Rights</Text>
        <Text style={styles.content}>
          Depending on your location, you may have the following rights regarding your data:
        </Text>
        <Text style={styles.bulletPoint}>• Access: You have the right to request copies of your data.</Text>
        <Text style={styles.bulletPoint}>• Rectification: You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</Text>

        <Text style={styles.sectionTitle}>Changes to This Privacy Policy</Text>
        <Text style={styles.content}>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </Text>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
  },
  backgroundImageStyle: {
    opacity: 0.5, // Adjust this value to make the logo faint in the background
    resizeMode: 'contain', // Adjusts the image size to cover the entire background
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Make background transparent to show the image
  },
  contentContainer: {
    padding: width * 0.05, // 5% of screen width for consistent padding
    paddingBottom: width * 0.1, // 10% of screen width for extra bottom space
  },
  title: {
    fontSize: width * 0.06, // 6% of screen width
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  sectionTitle: {
    fontSize: width * 0.045, // 4.5% of screen width
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#444',
  },
  subTitle: {
    fontSize: width * 0.04, // 4% of screen width
    fontWeight: 'bold',
    marginTop: 10,
    color: '#666',
  },
  content: {
    fontSize: width * 0.038, // 3.8% of screen width
    color: '#555',
    lineHeight: width * 0.05, // Adjust line height to ensure readability
    textAlign: 'justify',
  },
  bulletPoint: {
    fontSize: width * 0.038, // 3.8% of screen width
    color: '#555',
    lineHeight: width * 0.05,
    marginLeft: 10,
  },
});

export default PrivacyPolicies;
