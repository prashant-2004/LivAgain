// import './gesture-handler';
import React from 'react';
import { View, StyleSheet, Dimensions, Platform, PixelRatio, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import Student_Home from './components/student/Student_Home';
import Mentor_Home from './components/mentor/Mentor_Home';
import Login_Page from './components/User/Login_Page';
import WalletScreen from './components/profile/WalletScreen';
import MentorProfile from './components/mentor/MentorProfile';
import EditProfile from './components/profile/EditProfile';
import History from './components/profile/History';
import SavedMentors from './components/student/SavedMentors';
import HelpSupport from './components/profile/HelpSupport';
import AboutUs from './components/profile/AboutUs';
import PrivacyPolicies from './components/profile/PrivacyPolicies';
import SplashScreen from './SplashScreen';
import Register from './Register';
import AudioCallScreen from './components/session/AudioCallScreen';
import VideoCallScreen from './components/session/VideoCallScreen';
import ChatScreen from './components/session/ChatScreen';
import DoubtScreen from './components/profile/DoubtScreen';
import SeeAnswers from './components/questions/SeeAnswers';
import PostQuestion from './components/questions/PostQuestion';
import YourPostedQuestion from './components/questions/YourPostedQuestion';
import VideoCallSession from './components/session/VideoCallSession';
import VideoCallRoom from './components/session/VideoCallRoom';
import AudioCallSession from './components/session/AudioCallSession';
import ChatSession from './components/session/ChatSession';

// Get screen dimensions for responsive scaling
const { width } = Dimensions.get('window');
const normalize = (size) => {
  const scale = width / 375; // 375 is the base width for scaling
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Home Stack Navigator
export function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="student_home_1"
        component={Student_Home}
        options={{
          headerTitle: () => (
            <Text style={styles.title}>
              <Text style={styles.titleHighlight}>Liv</Text>Again
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <FontAwesome name="bars" size={normalize(24)} color="black" style={styles.headerIcon} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => navigation.navigate('WalletScreen')}>
                <FontAwesome name="money" size={normalize(24)} color="black" style={styles.headerIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('HelpSupport')}>
                <FontAwesome name="headphones" size={normalize(24)} color="black" style={styles.headerIcon} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

// Chat Stack Navigator
export function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatScreen_1"
        component={ChatScreen}
        options={({ navigation }) => ({
          title: 'Chat With Mentors',
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: normalize(10) }}
              onPress={() => {
                
                console.log('Filter icon pressed');
              }}
            >
              <FontAwesome name="filter" size={normalize(24)} color="black" />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'left',
          headerStyle: { backgroundColor: 'white' },
          headerTitleStyle: { fontSize: normalize(22) },
        })}
      />
    </Stack.Navigator>
  );
}
// Audio Stack Navigator
export function AudioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Audio"
        component={AudioCallScreen}
        options={({ navigation }) => ({
          title: 'Talk With Mentors',
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: normalize(10) }}
              onPress={() => {
                // Add filter action logic here
                console.log('Filter icon pressed');
              }}
            >
              <FontAwesome name="filter" size={normalize(24)} color="black" />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'left',
          headerStyle: { backgroundColor: 'white' },
          headerTitleStyle: { fontSize: normalize(22) },
        })}
      />
    </Stack.Navigator>
  );
}
// Video Stack Navigator
export function VideoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Video"
        component={VideoCallScreen}
        options={({ navigation }) => ({
          title: 'Live Call With Mentors',
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: normalize(10) }}
              onPress={() => {
                // Add filter action logic here
                console.log('Filter icon pressed');
              }}
            >
              <FontAwesome name="filter" size={normalize(24)} color="black" />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'left',
          headerStyle: { backgroundColor: 'white' },
          headerTitleStyle: { fontSize: normalize(22) },
        })}
      />
    </Stack.Navigator>
  );
}

// Global Stack Navigator
function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="SplashScreen">

        {/* Login Screen */}
         <Stack.Screen 
          name="Login" 
          component={Login_Page} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SplashScreen" 
          component={SplashScreen} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="student_home" 
          component={HomeStack} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="mentor_home" 
          component={Mentor_Home} 
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="EditProfile" 
          component={EditProfile} 
          options={{
            title: 'Edit Profile',
            headerShown: true,
          }}
        />

        {/* <Stack.Screen
          name="Home" 
          component={Student_Home} 
          options={{ headerShown: false }}
        /> */}

        {/* Main Tabs */}
        {/* <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        /> */}

        <Stack.Screen
          name="WalletScreen"
          component={WalletScreen}
          options={{ title: 'WalletScreen' }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{ title: 'History' }}
        />
        <Stack.Screen
          name="SavedMentors"
          component={SavedMentors}
          options={{ title: 'Saved Mentors' }}
        />
        <Stack.Screen
          name="HelpSupport"
          component={HelpSupport}
          options={{ title: 'Help & Support' }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{ title: 'About Us' }}
        />
        <Stack.Screen
          name="PrivacyPolicies"
          component={PrivacyPolicies}
          options={{ title: 'Privacy Policies' }}
        />

        <Stack.Screen
          name="VideoScreen"
          component={VideoCallScreen} // Add the new VideoScreen component
          options={() => ({
            title: 'Live Call With Mentors',
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: normalize(10) }}
                onPress={() => {
                  // Add filter action logic here
                  console.log('Filter icon pressed');
                }}
              >
                <FontAwesome name="filter" size={normalize(24)} color="black" />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'left',
            headerStyle: { backgroundColor: 'white' },
            headerTitleStyle: { fontSize: normalize(22) },
          })}
        />
        
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={({ navigation }) => ({
            title: 'Chat With Mentors',
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: normalize(10) }}
                onPress={() => {
                  
                  console.log('Filter icon pressed');
                }}
              >
                <FontAwesome name="filter" size={normalize(24)} color="black" />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'left',
            headerStyle: { backgroundColor: 'white' },
            headerTitleStyle: { fontSize: normalize(22) },
          })}
        />

        <Stack.Screen
          name="AudioScreen"
          component={AudioCallScreen}
          options={() => ({
            title: 'Talk With Mentors',
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: normalize(10) }}
                onPress={() => {
                  // Add filter action logic here
                  console.log('Filter icon pressed');
                }}
              >
                <FontAwesome name="filter" size={normalize(24)} color="black" />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'left',
            headerStyle: { backgroundColor: 'white' },
            headerTitleStyle: { fontSize: normalize(22) },
          })}
        />

        {/* <Stack.Screen
          name="VideoCallSession"
          component={VideoCallSession}
          options={{ title: '' }}
        /> */}

        <Stack.Screen
          name="VideoCallRoom"
          component={VideoCallRoom}
          options={{ title: 'Video Call Room' }}
        />

        <Stack.Screen
          name="AudioCallSession"
          component={AudioCallSession}
          options={{ title: '' }}
        />

        <Stack.Screen
          name="ChatSession"
          component={ChatSession}
          options={{ title: '' }}
        />

        <Stack.Screen
          name="MentorProfile"
          component={MentorProfile}
          options={{ title: 'Mentor Profile' }}
        />

        <Stack.Screen
          name="DoubtScreen"
          component={DoubtScreen}
          options={{ title: 'Doubt Section' }}
        />
        <Stack.Screen
          name="SeeAnswers"
          component={SeeAnswers}
          options={{ title: 'See Answers' }} // Customize the header title if needed
        />
        <Stack.Screen
          name="PostQuestion"
          component={PostQuestion}
          options={{ title: 'Post a Question' }}
        />
        <Stack.Screen
          name="YourPostedQuestion"
          component={YourPostedQuestion}
          options={{ title: 'Post a Question' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// Styles
const styles = StyleSheet.create({
  title: {
    fontSize: normalize(24),
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black'
  },
  titleHighlight: {
    color: '#2392d1',
  },
  headerIcon: {
    marginHorizontal: normalize(10),
  },
});
export default App;