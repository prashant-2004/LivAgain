import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';

const mentors = [
  {
    id: '1',
    name: 'Vaibhav',
    profession: 'IT Engineer',
    languages: 'English, Hindi, Marathi',
    experience: '6 Years',
    guidance: 632,
    rate: 24,
  },
  {
    id: '2',
    name: 'Vaibhav N',
    profession: 'MBBS',
    languages: 'English, Hindi, Marathi',
    experience: '4 Years',
    guidance: 3743,
    rate: 20,
  },
  {
    id: '3',
    name: 'Vedant',
    profession: 'AI Engineer',
    languages: 'English, Hindi, Marathi',
    experience: '3 Years',
    guidance: 6747,
    rate: 20,
  },
  {
    id: '4',
    name: 'Prashant K',
    profession: 'IT Engineer',
    languages: 'English, Hindi, Marathi',
    experience: '8 Years',
    guidance: 123,
    rate: 21,
  },
];

const History = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>{item.profession}</Text>
        <Text style={styles.details}>Languages: {item.languages}</Text>
        <Text style={styles.details}>Experience: {item.experience}</Text>
        <Text style={styles.details}>{item.guidance} Guidance</Text>
      </View>
      <View style={styles.action}>
        <Text style={styles.rate}>₹ {item.rate}/min</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Video Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Live Call With Mentors</Text>
      <TextInput style={styles.search} placeholder="Search for mentors" />
      <FlatList
        data={mentors}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#000'
  },
  search: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  list: {
    paddingBottom: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
  action: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rate: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default History;