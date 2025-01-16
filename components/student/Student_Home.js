// import React from 'react';
// import { View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   Dimensions,
//   KeyboardAvoidingView,
//   Platform,
//   TextInput,
// } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { WebView } from 'react-native-webview';
//  // Import WebView for embedding YouTube video
// import { Linking } from 'react-native'; // Import Linking to open external links

// // Get screen dimensions
// const { width } = Dimensions.get('window');

// // Normalize function for responsive scaling
// const normalize = (size) => {
//   const scale = width / 375; // 375 is the base width for scaling
//   return Math.round(size * scale);
// };

// // MentorCard Component
// const MentorCard = ({ image, name, rating, navigation, price }) => {
//   return (
//     <TouchableOpacity
//       style={styles.mentorCard}
//       onPress={() =>
//         navigation.navigate('MentorProfile', { mentor: { image, name, rating, price } })
//       }>
//       <Image source={image} style={styles.mentorImage} />
//       <Text style={styles.mentorName}>{name}</Text>
//       <View style={styles.stars}>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <FontAwesome
//             key={index}
//             name={
//               index < Math.floor(rating)
//                 ? 'star'
//                 : rating - index > 0.5
//                 ? 'star-half-empty'
//                 : 'star-o'
//             }
//             size={normalize(16)}
//             color="gold"
//           />
//         ))}
//       </View>
//      {/* Price Text */}
//      <Text style={styles.mentorPrice}>Rs. {price}</Text>
//       {/* Chat Button */}
//       <TouchableOpacity style={styles.chatButton}>
//         <Text style={styles.chatButtonText}>Chat</Text>
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );
// };
// // TalkToMentorCard Component
// const TalkToMentorCard = () => {
//   return (
//     <View style={styles.talkToMentorCard}>
//       <Image
//         source={require('../.../../assets/cartoonimg46r7r785898968.jpg')} 
//         style={styles.talkToMentorImage}
//       />
//       <View style={styles.talkToMentorTextContainer}>
//         <Text style={styles.talkToMentorTitle}>Talk to Mentor</Text>
//         <Text style={styles.talkToMentorFree}>Free</Text>
//         <TouchableOpacity>
//           <Text style={styles.talkToMentorChatNow}>Chat Now</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// // IconSection Component
// const IconSection = ({ navigation }) => {
//   const options = [
//     { icon: 'comments', label: 'Chat', color: '#2392d1', screen: 'Chat' },
//     { icon: 'phone', label: 'Talk', color: '#2392d1', screen: 'AudioCall' },
//     { icon: 'video-camera', label: 'Video Call', color: '#2392d1', screen: 'VideoCall' },
//   ];

//   return (
//     <View style={styles.iconSectionContainer}>
//       <View style={styles.iconSection}>
//         {options.map((option, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.iconCard}
//             onPress={() => navigation.navigate(option.screen)}
//           >
//             <View style={[styles.iconCircle, { backgroundColor: option.color }]}>
//               <FontAwesome name={option.icon} size={normalize(24)} color="#fff" />
//             </View>
//             <Text style={styles.iconLabel}>{option.label}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// // SearchBar Component
// const SearchBar = () => {
//   return (
//     <View style={styles.searchContainer}>
//       <FontAwesome name="search" size={normalize(20)} color="#888" style={styles.searchIcon} />
//       <TextInput
//         placeholder="Search for mentors"
//         placeholderTextColor="#888"
//         style={styles.searchInput}
//       />
//     </View>
//   );
// };

// // Home Component
// const Student_Home = ({ navigation }) => {
//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       <ScrollView
//         style={styles.container}
//         contentContainerStyle={{ paddingBottom: normalize(80) }}
//       >
//         <StatusBar />

//         {/* Search Bar */}
//         <SearchBar />

//         {/* Icon Section */}
//         <IconSection navigation={navigation} />

//         {/* Talk to Mentor Card */}
//         <TalkToMentorCard />

//         {/* Live Mentors Section */}
//         <View style={styles.whiteBackgroundContainer}>
//         <Text style={styles.sectionTitle}>Live Mentors</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mentorsScroll}>
//           <MentorCard
//             image={require('../.../../assets/temp1233433222323-removebg-preview.png')}
//             name="Vedant Ekale"
//             rating={1}
//             price={5}
//             navigation={navigation}
//           />
//           <MentorCard
//             image={require('../.../../assets/cartoonimg46r7r785898968.jpg')}
//             name="Prashant Kale"
//             rating={5}
//             price={500}
//             navigation={navigation}
//           />
//           <MentorCard
//             image={require('../.../../assets/cartoonimg46r7r785898968.jpg')}
//             name="Vaibhav H"
//             rating={5}
//             price={500}
//             navigation={navigation}
//           />
//           <MentorCard
//             image={require('../.../../assets/cartoonimg46r7r785898968.jpg')}
//             name="Vaibhav Nirgude"
//             rating={5}
//             price={500}
//             navigation={navigation}
//           />
//         </ScrollView>
//         </View>

//         {/* Mentors Section */}
//         <View style={styles.whiteBackgroundContainer}>
//         <Text style={styles.sectionTitle}>Mentors</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mentorsScroll}>
//           <MentorCard
//             image={require('../.../../assets/temp1233433222323-removebg-preview.png')}
//             name="Ravi Shinde"
//             rating={3}
//             price={300}
//             navigation={navigation}
//           />
//           <MentorCard
//             image={require('../.../../assets/cartoonimg46r7r785898968.jpg')}
//             name="Sanya Deshmukh"
//             rating={4}
//             price={400}
//             navigation={navigation}
//           />
//           <MentorCard
//             image={require('../.../../assets/cartoonimg46r7r785898968.jpg')}
//             name="Manoj Kumar"
//             rating={3.5}
//             price={350}
//             navigation={navigation}
//           />
//           <MentorCard
//             image={require('../.../../assets/cartoonimg46r7r785898968.jpg')}
//             name="Priya Mehta"
//             rating={5}
//             price={500}
//             navigation={navigation}
//           />
//         </ScrollView>
//         </View>

//         {/* YouTube Videos Section */}
//         <View style={styles.videoSection}>
//         <Text style={styles.sectionTitle}>Updates </Text>
        
//           {[{ url: 'https://www.youtube.com/watch?v=x_Jpu9TftKU', id: 'x_Jpu9TftKU' }, { url: 'https://www.youtube.com/watch?v=cxBLKA10dj0', id: 'cxBLKA10dj0' }].map((video, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.videoItem}
//               onPress={() => Linking.openURL(video.url)}
//             >
//               <Image
//                 source={{ uri: `https://img.youtube.com/vi/${video.id}/0.jpg` }}
//                 style={styles.videoThumbnail}
//               />
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: normalize(1),
//   },
//   whiteBackgroundContainer: {
//     backgroundColor: '#fff', // White background
//     borderRadius: normalize(10), 
//     padding: normalize(10), 
//     marginBottom: normalize(10), // Space below the section
//     shadowColor: '#000', // Optional shadow
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3, // Shadow effect for Android
//   },
//   sectionTitle: {
//     fontSize: normalize(22),
//     fontWeight: 'bold',
//     marginBottom: normalize(10),
//   },
//   mentorsScroll: {
//     marginBottom: normalize(5),
//   },
//   mentorPrice: {
//     fontSize: normalize(14),
//     fontWeight: 'bold',
//     color: '#333',
//     marginTop: normalize(5),
//     marginBottom: normalize(5),
//     textAlign: 'center',
//   },

//   chatButton: {
//     backgroundColor: '#2392d1',
//     paddingVertical: normalize(8),
//     paddingHorizontal: normalize(16),
//     borderRadius: normalize(10),
//     marginTop: normalize(5),
//   },
  
//   chatButtonText: {
//     color: '#fff',
//     fontSize: normalize(14),
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: normalize(10),
//     borderWidth: 1,
//     borderColor: '#000',
//     paddingHorizontal: normalize(10),
//     marginBottom: normalize(5),
//     height: normalize(40),
//   },
//   searchIcon: {
//     marginRight: normalize(10),
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: normalize(14),
//     color: '#333',
//   },
//   mentorCard: {
//     marginRight: normalize(15),
//     width: normalize(140), // Adjusted width for better padding and spacing
//     alignItems: 'center',
//     backgroundColor: '#fff', // White background for the card
//     borderRadius: normalize(10), // Rounded corners
//     padding: normalize(10), // Inner padding
//     shadowColor: '#000', // Shadow effect
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3, // Android shadow effect
//     borderWidth: 1, // Border for definition
//     borderColor: '#ddd', // Light gray border color
//   },
//   mentorImage: {
//     width: normalize(80),
//     height: normalize(80),
//     borderRadius: normalize(40), // Circular image
//     marginBottom: normalize(8), // Space between image and name
//     borderWidth: 2, // Border for definition
//     borderColor: '#2392d1', // 
//   },
//   mentorName: {
//     fontWeight: 'bold',
//     textAlign: 'center',
//     fontSize: normalize(14),
//   },
//   stars: {
//     flexDirection: 'row',
//     marginTop: normalize(5),
//   },
//   iconSectionContainer: {
//     backgroundColor: '#fff', // White background for the entire section
//     borderRadius: normalize(10), // Rounded corners for the card
//     padding: normalize(10), 
//     marginBottom: normalize(0.5), // Space below the card
//     shadowColor: '#000', // Optional: for a shadow effect
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3, // For shadow on Android
//   },
//   iconSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     //marginBottom: normalize(20),
//   },
//   iconCard: {
//     alignItems: 'center',
//     width: normalize(80),
//   },
//   iconCircle: {
//     width: normalize(60),
//     height: normalize(60),
//     borderRadius: normalize(30),
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: normalize(5),
//   },
//   iconLabel: {
//     fontSize: normalize(16),
//     textAlign: 'center',
//   },
//   talkToMentorCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'gold',
//     borderRadius: normalize(10),
//     padding: normalize(10),
//     marginVertical: normalize(10),
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   talkToMentorImage: {
//     width: normalize(100),
//     height: normalize(100),
//     //borderRadius: normalize(35),
//     marginRight: normalize(10),
//   },
//   talkToMentorTextContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   talkToMentorTitle: {
//     fontSize: normalize(18),
//     //fontWeight: 'bold',
//     marginBottom: normalize(1),
//   },
//   talkToMentorFree: {
//     fontSize: normalize(28),
//     fontWeight: 'bold',
//     color: 'black',
//     marginBottom: normalize(1),
//   },
//   talkToMentorChatNow: {
//     fontSize: normalize(30),
//     color: '#2392d1',
//     fontWeight: 'bold',
//   },

//   videoSection: {
//     backgroundColor: '#fff',
//     padding: normalize(5),
//     borderRadius: normalize(10),
//     marginBottom: normalize(20),
//   },
//   videoItem: {
//     marginBottom: normalize(15),
//   },
//   videoThumbnail: {
//     width: '100%',
//     height: normalize(220),
//     borderRadius: normalize(10),
//   },
// });

// export default Student_Home;




import React from 'react';
import { View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { WebView } from 'react-native-webview';
 // Import WebView for embedding YouTube video
import { Linking } from 'react-native'; // Import Linking to open external links
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, AudioStack, VideoStack, ChatStack} from '../../App';
import DoubtScreen from '../profile/DoubtScreen';

// Get screen dimensions
const { width } = Dimensions.get('window');

const Tab = createBottomTabNavigator();
// Normalize function for responsive scaling
const normalize = (size) => {
  const scale = width / 375; // 375 is the base width for scaling
  return Math.round(size * scale);
};

// MentorCard Component
const MentorCard = ({ image, name, rating, navigation, price }) => {
  return (
    <TouchableOpacity
      style={styles.mentorCard}
      onPress={() =>
        navigation.navigate('MentorProfile', { mentor: { image, name, rating, price } })
      }>
      <Image source={image} style={styles.mentorImage} />
      <Text style={styles.mentorName}>{name}</Text>
      <View style={styles.stars}>
        {Array.from({ length: 5 }).map((_, index) => (
          <FontAwesome
            key={index}
            name={
              index < Math.floor(rating)
                ? 'star'
                : rating - index > 0.5
                ? 'star-half-empty'
                : 'star-o'
            }
            size={normalize(16)}
            color="gold"
          />
        ))}
      </View>
     {/* Price Text */}
     <Text style={styles.mentorPrice}>Rs. {price}</Text>
      {/* Chat Button */}
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
// TalkToMentorCard Component
const TalkToMentorCard = () => {
  return (
    <View style={styles.talkToMentorCard}>
      <Image
        source={require('../../assets/cartoonimg46r7r785898968.jpg')} 
        style={styles.talkToMentorImage}
      />
      <View style={styles.talkToMentorTextContainer}>
        <Text style={styles.talkToMentorTitle}>Talk to Mentor</Text>
        <Text style={styles.talkToMentorFree}>Free</Text>
        <TouchableOpacity>
          <Text style={styles.talkToMentorChatNow}>Chat Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// IconSection Component
const IconSection = ({ navigation }) => {
  const options = [
    { icon: 'comments', label: 'Chat', color: '#2392d1', screen: 'ChatScreen' },
    { icon: 'phone', label: 'Talk', color: '#2392d1', screen: 'AudioScreen' },
    { icon: 'video-camera', label: 'Video Call', color: '#2392d1', screen: 'VideoScreen' },
  ];

  return (
    <View style={styles.iconSectionContainer}>
      <View style={styles.iconSection}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.iconCard}
            onPress={() => navigation.navigate(option.screen)}
          >
            <View style={[styles.iconCircle, { backgroundColor: option.color }]}>
              <FontAwesome name={option.icon} size={normalize(24)} color="#fff" />
            </View>
            <Text style={styles.iconLabel}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// SearchBar Component
const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <FontAwesome name="search" size={normalize(20)} color="#888" style={styles.searchIcon} />
      <TextInput
        placeholder="Search for mentors"
        placeholderTextColor="#888"
        style={styles.searchInput}
      />
    </View>
  );
};

const MainTabs = () => {
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

// Home Component
const Student_Home = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: normalize(80) }}
      >
        <StatusBar />

        {/* Search Bar */}
        <SearchBar />

        {/* Icon Section */}
        <IconSection navigation={navigation} />

        {/* Talk to Mentor Card */}
        <TalkToMentorCard />

        {/* Live Mentors Section */}
        <View style={styles.whiteBackgroundContainer}>
        <Text style={styles.sectionTitle}>Live Mentors</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mentorsScroll}>
          <MentorCard
            image={require('../../assets/temp1233433222323-removebg-preview.png')}
            name="Vedant Ekale"
            rating={1}
            price={5}
            navigation={navigation}
          />
          <MentorCard
            image={require('../../assets/cartoonimg46r7r785898968.jpg')}
            name="Prashant Kale"
            rating={5}
            price={500}
            navigation={navigation}
          />
          <MentorCard
            image={require('../../assets/cartoonimg46r7r785898968.jpg')}
            name="Vaibhav H"
            rating={5}
            price={500}
            navigation={navigation}
          />
          <MentorCard
            image={require('../../assets/cartoonimg46r7r785898968.jpg')}
            name="Vaibhav Nirgude"
            rating={5}
            price={500}
            navigation={navigation}
          />
        </ScrollView>
        </View>

        {/* Mentors Section */}
        <View style={styles.whiteBackgroundContainer}>
        <Text style={styles.sectionTitle}>Mentors</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mentorsScroll}>
          <MentorCard
            image={require('../../assets/temp1233433222323-removebg-preview.png')}
            name="Ravi Shinde"
            rating={3}
            price={300}
            navigation={navigation}
          />
          <MentorCard
            image={require('../../assets/cartoonimg46r7r785898968.jpg')}
            name="Sanya Deshmukh"
            rating={4}
            price={400}
            navigation={navigation}
          />
          <MentorCard
            image={require('../../assets/cartoonimg46r7r785898968.jpg')}
            name="Manoj Kumar"
            rating={3.5}
            price={350}
            navigation={navigation}
          />
          <MentorCard
            image={require('../../assets/cartoonimg46r7r785898968.jpg')}
            name="Priya Mehta"
            rating={5}
            price={500}
            navigation={navigation}
          />
        </ScrollView>
        </View>

        {/* YouTube Videos Section */}
        <View style={styles.videoSection}>
        <Text style={styles.sectionTitle}>Updates </Text>
        
          {[{ url: 'https://www.youtube.com/watch?v=x_Jpu9TftKU', id: 'x_Jpu9TftKU' }, { url: 'https://www.youtube.com/watch?v=cxBLKA10dj0', id: 'cxBLKA10dj0' }].map((video, index) => (
            <TouchableOpacity
              key={index}
              style={styles.videoItem}
              onPress={() => Linking.openURL(video.url)}
            >
              <Image
                source={{ uri: `https://img.youtube.com/vi/${video.id}/0.jpg` }}
                style={styles.videoThumbnail}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButtonBox}
            onPress={() => navigation.navigate('student_home')}
          >
            <FontAwesome name="home" size={normalize(24)} color="#000" />
            <Text style={styles.footerButtonText}>Home</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.footerButtonBox}
            onPress={() => navigation.navigate('AudioScreen')}
          >
            <FontAwesome name="phone" size={normalize(24)} color="#000" />
            <Text style={styles.footerButtonText}>Audio Call</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.footerButtonBox}
            onPress={() => navigation.navigate('ChatScreen')}
          >
            <FontAwesome name="comments" size={normalize(24)} color="#000" />
            <Text style={styles.footerButtonText}>Chat</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.footerButtonBox}
            onPress={() => navigation.navigate('VideoScreen')}
          >
            <FontAwesome name="video-camera" size={normalize(24)} color="#000" />
            <Text style={styles.footerButtonText}>Video Call</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.footerButtonBox}
            onPress={() => navigation.navigate('DoubtScreen')}
          >
            <FontAwesome name="question" size={normalize(24)} color="#000" />
            <Text style={styles.footerButtonText}>Doubt</Text>
          </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(1),
  },
  tabs: {
    height: 70, // Match the tab bar height
  },
  whiteBackgroundContainer: {
    backgroundColor: '#fff', // White background
    borderRadius: normalize(10), 
    padding: normalize(10), 
    marginBottom: normalize(10), // Space below the section
    shadowColor: '#000', // Optional shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Shadow effect for Android
  },
  sectionTitle: {
    fontSize: normalize(22),
    fontWeight: 'bold',
    marginBottom: normalize(10),
  },
  mentorsScroll: {
    marginBottom: normalize(5),
  },
  mentorPrice: {
    fontSize: normalize(14),
    fontWeight: 'bold',
    color: '#333',
    marginTop: normalize(5),
    marginBottom: normalize(5),
    textAlign: 'center',
  },

  chatButton: {
    backgroundColor: '#2392d1',
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(16),
    borderRadius: normalize(10),
    marginTop: normalize(5),
  },
  
  chatButtonText: {
    color: '#fff',
    fontSize: normalize(14),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: normalize(10),
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: normalize(10),
    marginBottom: normalize(5),
    height: normalize(40),
  },
  searchIcon: {
    marginRight: normalize(10),
  },
  searchInput: {
    flex: 1,
    fontSize: normalize(14),
    color: '#333',
  },
  mentorCard: {
    marginRight: normalize(15),
    width: normalize(140), // Adjusted width for better padding and spacing
    alignItems: 'center',
    backgroundColor: '#fff', // White background for the card
    borderRadius: normalize(10), // Rounded corners
    padding: normalize(10), // Inner padding
    shadowColor: '#000', // Shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Android shadow effect
    borderWidth: 1, // Border for definition
    borderColor: '#ddd', // Light gray border color
  },
  mentorImage: {
    width: normalize(80),
    height: normalize(80),
    borderRadius: normalize(40), // Circular image
    marginBottom: normalize(8), // Space between image and name
    borderWidth: 2, // Border for definition
    borderColor: '#2392d1', // 
  },
  mentorName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: normalize(14),
  },
  stars: {
    flexDirection: 'row',
    marginTop: normalize(5),
  },
  iconSectionContainer: {
    backgroundColor: '#fff', // White background for the entire section
    borderRadius: normalize(10), // Rounded corners for the card
    padding: normalize(10), 
    marginBottom: normalize(0.5), // Space below the card
    shadowColor: '#000', // Optional: for a shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // For shadow on Android
  },
  iconSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginBottom: normalize(20),
  },
  iconCard: {
    alignItems: 'center',
    width: normalize(80),
  },
  iconCircle: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: normalize(5),
  },
  iconLabel: {
    fontSize: normalize(16),
    textAlign: 'center',
  },
  talkToMentorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gold',
    borderRadius: normalize(10),
    padding: normalize(10),
    marginVertical: normalize(10),
    borderWidth: 1,
    borderColor: 'black',
  },
  talkToMentorImage: {
    width: normalize(100),
    height: normalize(100),
    //borderRadius: normalize(35),
    marginRight: normalize(10),
  },
  talkToMentorTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  talkToMentorTitle: {
    fontSize: normalize(18),
    //fontWeight: 'bold',
    marginBottom: normalize(1),
  },
  talkToMentorFree: {
    fontSize: normalize(28),
    fontWeight: 'bold',
    color: 'black',
    marginBottom: normalize(1),
  },
  talkToMentorChatNow: {
    fontSize: normalize(30),
    color: '#2392d1',
    fontWeight: 'bold',
  },

  videoSection: {
    backgroundColor: '#fff',
    padding: normalize(5),
    borderRadius: normalize(10),
    marginBottom: normalize(20),
  },
  videoItem: {
    marginBottom: normalize(15),
  },
  videoThumbnail: {
    width: '100%',
    height: normalize(220),
    borderRadius: normalize(10),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: normalize(80),
    width:'auto',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
  },
  footerButtonBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 5,
    // borderRadius: 8,
    // width: 'auto',
    // height: normalize(60),
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 2,
  },
  footerButtonText: {
    // color: '#2392d1',
    color:'#000',
    fontSize: normalize(12),
    marginTop: 5,
    textAlign: 'center',
  },
});

export default Student_Home;
