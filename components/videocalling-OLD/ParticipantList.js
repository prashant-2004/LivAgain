import {
    Text,
    View,
    FlatList,
  } from 'react-native';

function ParticipantView() {
    return null;
  }
  
export default  function ParticipantList({ participants }) {
    return participants.length > 0 ? (
      <FlatList
        data={participants}
        renderItem={({ item }) => {
          return <ParticipantView participantId={item} />;
        }}
      />
    ) : (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F6F6FF",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>Press Join button to enter meeting.</Text>
      </View>
    );
  }