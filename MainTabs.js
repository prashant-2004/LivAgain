import React from 'react';
import { View, StyleSheet, Dimensions, Platform, PixelRatio } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { HomeStack, AudioStack, VideoStack, ChatStack} from './App';
import DoubtScreen from './components/profile/DoubtScreen';
// Get screen dimensions for responsive scaling
const { width } = Dimensions.get('window');
const normalize = (size) => {
  const scale = width / 375; // 375 is the base width for scaling
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const Tab = createBottomTabNavigator();

// Main Tabs
function MainTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: 'white',
            height: normalize(70),
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: '#2392d1',
          tabBarInactiveTintColor: '#777',
        }}
      >
        <Tab.Screen
          name="student_home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => <FontAwesome name="home" size={normalize(24)} color={color} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="AudioCall"
          component={AudioStack} // Wrap AudioScreen in a Stack.Navigator
          options={{
            tabBarIcon: ({ color }) => <FontAwesome name="phone" size={normalize(24)} color={color} />,
            title: 'Audio Call',
            headerShown: false, // The header is managed by the Stack.Navigator
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatStack} // Wrap ChatScreen in a Stack.Navigator
          options={{
            tabBarIcon: ({ color }) => <FontAwesome name="comments" size={normalize(24)} color={color} />,
            title: 'Chat',
            headerShown: false, // The header is managed by the Stack.Navigator
          }}
        />
        <Tab.Screen
          name="VideoCall"
          component={VideoStack} // Wrap VideoScreen in a Stack.Navigator
          options={{
            tabBarIcon: ({ color }) => <FontAwesome name="video-camera" size={normalize(24)} color={color} />,
            title: 'Video Call',
            headerShown: false, // The header is managed by the Stack.Navigator
          }}
        />
        <Tab.Screen
          name="Doubt"
          component={DoubtScreen}
          options={{
            tabBarIcon: ({ color }) => <FontAwesome name="question-circle" size={normalize(24)} color={color} />,
            title: 'Doubt',
          }}
        />
      </Tab.Navigator>
    );
  }

export default MainTabs;
