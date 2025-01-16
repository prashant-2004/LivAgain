import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import MainTabs from '../../MainTabs';
import Student_Home from './Student_Home'; // Your existing HomePage component

function HomePageWithTabs() {
  return (
    <View style={styles.container}>
      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Student_Home />
      </ScrollView>

      {/* Fixed bottom tabs */}
      <View style={styles.tabs}>
        <MainTabs />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1, // Ensures the ScrollView takes available space
    paddingBottom: 70, // Adjust to avoid overlapping tabs
  },
  tabs: {
    height: 70, // Match the tab bar height
  },
});

export default HomePageWithTabs;
