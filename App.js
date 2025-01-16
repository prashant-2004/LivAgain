import React from 'react';
import { View, StyleSheet, Dimensions, Platform, PixelRatio } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from './HomePage';
import Login from './Login';
import Profile from './Profile';
import WalletScreen from './WalletScreen';
import AddMentorScreen from './AddMentorScreen';
import SearchScreen from './SearchScreen';
import MentorProfile from './MentorProfile';
import EditProfile from './EditProfile';
import Transactions from './Transactions';
import History from './History';
import SavedMentors from './SavedMentors';
import HelpSupport from './HelpSupport';
import AboutUs from './AboutUs';
import PrivacyPolicies from './PrivacyPolicies';
import SplashScreen from './SplashScreen';
import BookSession from './BookSession'; // Import the BookSession screen
import Register from './Register';

// Get screen dimensions for responsive scaling
const { width, height } = Dimensions.get('window');

// Function to normalize size based on screen dimensions
const normalize = (size) => {
  const scale = width / 375; // 375 is the base width for scaling
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// Stack Navigator for Home excluding MentorProfile
// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen 
//         name="Home" 
//         component={Home} 
//         options={{ headerShown: false }} 
//       />
//     </Stack.Navigator>
//   );
// }

// Stack Navigator for Profile
// function ProfileStackNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen 
//         name="Profile" 
//         component={Profile} 
//         options={{ headerShown: false }} 
//       />
//     </Stack.Navigator>
//   );
// }

// Global Stack Navigator to handle full-screen pages and Splash Screen
const GlobalStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <GlobalStack.Navigator initialRouteName='Login'>

        {/* Login Screen */}
        <GlobalStack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />

        {/* register Screen */}
        <GlobalStack.Screen 
          name="Register" 
          component={Register} 
          options={{ headerShown: false }} 
        /> 
        
        {/* Splash Screen */}
        <GlobalStack.Screen 
          name="SplashScreen" 
          component={SplashScreen} 
          options={{ headerShown: false }} 
        />

        {/* <GlobalStack.Screen
          name="Home" 
          component={Home} 
          options={{ headerShown: false }}
        />

        <GlobalStack.Screen
          name="Profile" 
          component={Profile} 
          options={{ headerShown: false }}
        /> */}
          {/* Main Tab Navigator */}
        <GlobalStack.Screen 
          name="MainTabs" 
          component={MainTabs} 
          options={{ headerShown: false }} 
        />

        {/* Full-Screen Pages */}
        <GlobalStack.Screen 
          name="EditProfile" 
          component={EditProfile} 
          options={{
            title: 'Edit Profile',
            headerShown: true,
          }}
        />
        <GlobalStack.Screen 
          name="MentorProfile" 
          component={MentorProfile} 
          options={{ 
            title: 'Mentor Profile',
            headerShown: true 
          }} 
        />
        <GlobalStack.Screen 
          name="Transactions" 
          component={Transactions} 
          options={{ 
            title: 'Transactions',
            headerShown: true 
          }} 
        />
        <GlobalStack.Screen 
          name="History" 
          component={History} 
          options={{ 
            title: 'History',
            headerShown: true 
          }} 
        />
        <GlobalStack.Screen 
          name="SavedMentors" 
          component={SavedMentors} 
          options={{ 
            title: 'Saved Mentors',
            headerShown: true 
          }} 
        />
        <GlobalStack.Screen 
          name="HelpSupport" 
          component={HelpSupport} 
          options={{ 
            title: 'Help & Support',
            headerShown: true 
          }} 
        />
        <GlobalStack.Screen 
          name="AboutUs" 
          component={AboutUs} 
          options={{ 
            title: 'About Us',
            headerShown: true 
          }} 
        />
        <GlobalStack.Screen 
          name="PrivacyPolicies" 
          component={PrivacyPolicies} 
          options={{ 
            title: 'Privacy Policies',
            headerShown: true 
          }} 
        />
        <GlobalStack.Screen 
          name="BookSession" 
          component={BookSession} 
          options={{
            title: 'Book A Session',
            headerShown: true,
          }}
        />
      </GlobalStack.Navigator>
    </NavigationContainer>
  );
}

// Main Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: 'white',
          height: normalize(70), // Responsive height
        },
        tabBarActiveTintColor: '#ff6f61',
        tabBarInactiveTintColor: '#777',
        tabBarIconStyle: { marginTop: Platform.OS === 'android' ? normalize(5) : 0 }, // Adjust icon padding for Android
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={normalize(24)} color={color} />,
        }} 
      />
      <Tab.Screen 
        name="Wallet" 
        component={WalletScreen} 
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color }) => <FontAwesome name="money" size={normalize(24)} color={color} />,
        }} 
      />
      <Tab.Screen 
        name="AddMentor" 
        component={AddMentorScreen} 
        options={{
          title: 'Post a Doubt',
          tabBarIcon: () => (
            <View style={styles.fab}>
              <FontAwesome name="plus" size={normalize(24)} color="white" />
            </View>
          ),
        }} 
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <FontAwesome name="search" size={normalize(24)} color={color} />,
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={normalize(24)} color={color} />,
        }} 
      />
    </Tab.Navigator>
  );
}

// Styles for FAB and tab bar
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: normalize(25),
    left: '50%',
    transform: [{ translateX: -normalize(30) }],
    backgroundColor: '#ff6f61',
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(30),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});



// import React from "react";
// import Login from "./Login";

// const App = () => {
//   return (
//    <Login/>
//   );
// };

// export default App;
