import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, TextInput, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

// Get screen dimensions
const { width } = Dimensions.get('window');

// Function to normalize size based on screen dimensions
const normalize = (size) => {
  const scale = width / 375; // 375 is the base width for scaling
  return Math.round(size * scale);
};

const EditProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState('');
  const [dob, setDob] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [gender, setGender] = useState('Male');
  const [isEditing, setIsEditing] = useState(false); // State to control editing mode

  const handleEditProfilePicture = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false, // Set to true if you need base64 image data
      maxHeight: 500,
      maxWidth: 500,
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        Alert.alert('Image selection cancelled.');
      } else if (response.errorCode) {
        Alert.alert('Error picking the image:', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  const onChangeDob = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(false);
    setDob(currentDate);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, TextInput, Dimensions } from 'react-native';
// import { FontAwesome } from 'react-native-vector-icons/FontAwesome';
// import * as ImagePicker from 'expo-image-picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { Picker } from '@react-native-picker/picker';

// // Get screen dimensions
// const { width } = Dimensions.get('window');

// // Function to normalize size based on screen dimensions
// const normalize = (size) => {
//   const scale = width / 375; // 375 is the base width for scaling
//   return Math.round(size * scale);
// };

// const EditProfile = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [name, setName] = useState('');
//   const [dob, setDob] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [gender, setGender] = useState('Male');
//   const [isEditing, setIsEditing] = useState(false); // State to control editing mode

//   const handleEditProfilePicture = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (permissionResult.granted === false) {
//       Alert.alert('Permission to access camera roll is required!');
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setSelectedImage(result.assets[0].uri);
//     }
//   };

//   const onChangeDob = (event, selectedDate) => {
//     const currentDate = selectedDate || dob;
//     setShowDatePicker(false);
//     setDob(currentDate);
//   };

//   const toggleEdit = () => {
//     setIsEditing(!isEditing);
//   };

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.profileImage} />
        ) : (
          <FontAwesome name="user-circle-o" size={normalize(100)} color="white" />
        )}
        <View style={styles.profileInfo}>
          <TouchableOpacity onPress={handleEditProfilePicture}>
            <FontAwesome name="pencil" size={normalize(16)} color="white" style={styles.editIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Contact Info Section */}
      <View style={styles.contactSection}>
        <View style={styles.horizontalLine} />
        <View style={styles.contactRow}>
          <TouchableOpacity style={styles.contactButton}>
            <View style={styles.iconContainer}>
              <FontAwesome name="phone" size={normalize(24)} color="white" />
              <Text style={styles.contactText}>1234567890</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.verticalLine} />
          <TouchableOpacity style={styles.contactButton}>
            <View style={styles.iconContainer}>
              <FontAwesome name="envelope" size={normalize(24)} color="white" />
              <Text style={styles.contactText}>xyz@gmail.com</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Additional Fields */}
      <View style={styles.additionalFields}>
        <Text style={styles.detailsText}>Details</Text>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
            editable={isEditing} // Make editable based on state
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>DOB</Text>
          <View style={styles.dateInputContainer}>
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton} disabled={!isEditing}>
              <FontAwesome name="calendar" size={normalize(25)} color={isEditing ? 'black' : 'gray'} style={styles.calendarIcon} />
              <Text style={styles.dateText}>{dob.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={dob}
                mode="date"
                display="default"
                onChange={onChangeDob}
              />
            )}
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Gender</Text>
          <Picker
            selectedValue={gender}
            style={styles.picker}
            onValueChange={(itemValue) => setGender(itemValue)}
            enabled={isEditing} // Make picker editable based on state
          >
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>

        {/* Edit/Save Button */}
        <TouchableOpacity onPress={toggleEdit} style={styles.button}>
          <Text style={styles.buttonText}>{isEditing ? 'Save' : 'Edit '}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F6FC',
    alignItems: 'center',
  },
  profileSection: {
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    width: '100%',
    paddingVertical: normalize(20),
  },
  profileImage: {
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(50),
    marginBottom: normalize(10),
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(10),
  },
  editIcon: {
    padding: normalize(5),
  },
  contactSection: {
    width: '100%',
    paddingVertical: normalize(0),
    backgroundColor: '#1E90FF',
    alignItems: 'center',
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    width: '100%',
  },
  contactButton: {
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
  },
  contactText: {
    fontSize: normalize(16),
    color: 'white',
    marginTop: normalize(5),
  },
  horizontalLine: {
    width: '90%',
    height: normalize(1),
    backgroundColor: 'white',
    marginVertical: normalize(2),
  },
  verticalLine: {
    width: normalize(1),
    height: '100%',
    backgroundColor: 'white',
  },
  additionalFields: {
    width: '90%',
    paddingVertical: normalize(20),
  },
  detailsText: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    marginBottom: normalize(10),
  },
  fieldContainer: {
    marginBottom: normalize(15),
  },
  label: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    marginBottom: normalize(5),
  },
  input: {
    height: normalize(40),
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: normalize(10),
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: normalize(10),
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  calendarIcon: {
    marginRight: normalize(10),
  },
  dateText: {
    flex: 1,
    color: 'black',
  },
  picker: {
    height: normalize(50),
    width: '100%',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    paddingVertical: normalize(10),
    alignItems: 'center',
    marginTop: normalize(20),
  },
  buttonText: {
    color: 'white',
    fontSize: normalize(16),
  },
});

export default EditProfile;
