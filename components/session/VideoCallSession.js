import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  FlatList,
  Alert,
} from "react-native";
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
  MediaStream,
  RTCView,
} from "@videosdk.live/react-native-sdk";
import { createMeeting, tokenProvider } from "../../api";

function JoinScreen(props) {
  const [meetingVal, setMeetingVal] = useState("");

  // Function to handle the input change and format the meeting ID
  const handleMeetingIdChange = (text) => {
    // Remove any non-digit characters (including dashes)
    // let formattedText = text.replace(/\D/g, "");
    let formattedText = text;
    // Format the text into the "xxxx-xxxx-xxxx" format
    if (formattedText.length > 14) {
      formattedText = formattedText.substring(0, 14);
    }

    // Add dashes after every 4 characters
    if (formattedText.length == 5) {
      formattedText = formattedText.substring(0, 4) + "-" + formattedText.substring(4);
    }
    if (formattedText.length == 9) {
      formattedText = formattedText.substring(0, 9) + "-" + formattedText.substring(9);
    }

    setMeetingVal(formattedText);
  };

  // Function to validate and join the meeting
  const joinMeeting = () => {
    // Validate if meeting ID is exactly in the "xxxx-xxxx-xxxx" format
    const isValidMeetingId = /^[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}$/.test(meetingVal);
    if (isValidMeetingId) {
      props.getMeetingId(meetingVal);
    } else {
      Alert.alert("Invalid Meeting ID", "Please enter a valid Meeting ID in the format XXXX-XXXX-XXXX");
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F6F6FF",
        justifyContent: "center",
        paddingHorizontal: 6 * 10,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          props.getMeetingId();
        }}
        style={{ backgroundColor: "#1178F8", padding: 12, borderRadius: 6 }}
      >
        <Text style={{ color: "white", alignSelf: "center", fontSize: 18 }}>
          Create Meeting
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          alignSelf: "center",
          fontSize: 22,
          marginVertical: 16,
          fontStyle: "italic",
          color: "grey",
        }}
      >
        ---------- OR ----------
      </Text>
      {/* <TextInput
        value={meetingVal}
        onChangeText={setMeetingVal}
        placeholder={"XXXX-XXXX-XXXX"}
        placeholderTextColor={'gray'}
        style={{
          padding: 12,
          borderWidth: 1,
          borderRadius: 6,
          fontStyle: "italic",
          color:'black'
        }}
      /> */}
      <TextInput
        value={meetingVal}
        onChangeText={handleMeetingIdChange}
        placeholder="XXXX-XXXX-XXXX"
        placeholderTextColor="gray"
        // keyboardType="text"
        maxLength={14} // Allow max 12 characters, including dashes
        style={{
          padding: 12,
          borderWidth: 1,
          borderRadius: 6,
          fontStyle: "italic",
          color: "black",
        }}
      />
      {/* <TouchableOpacity
        style={{
          backgroundColor: "#1178F8",
          padding: 12,
          marginTop: 14,
          borderRadius: 6,
        }}
        onPress={() => {
          props.getMeetingId(meetingVal);
        }}
      >
        <Text style={{ color: "white", alignSelf: "center", fontSize: 18 }}>
          Join Meeting
        </Text>
      </TouchableOpacity> */}
       <TouchableOpacity
        style={{
          backgroundColor: "#1178F8",
          padding: 12,
          marginTop: 14,
          borderRadius: 6,
        }}
        onPress={joinMeeting}
      >
        <Text style={{ color: "white", alignSelf: "center", fontSize: 18 }}>
          Join Meeting
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const Button = ({ onPress, buttonText, backgroundColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        padding: 12,
        borderRadius: 4,
      }}
    >
      <Text style={{ color: "white", fontSize: 12 }}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

function ControlsContainer({ join, leave, toggleWebcam, toggleMic }) {
  return (
    <View
      style={{
        padding: 24,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Button
        onPress={() => {
          join();
        }}
        buttonText={"Join"}
        backgroundColor={"#1178F8"}
      />
      <Button
        onPress={() => {
          toggleWebcam();
        }}
        buttonText={"Toggle Webcam"}
        backgroundColor={"#1178F8"}
      />
      <Button
        onPress={() => {
          toggleMic();
        }}
        buttonText={"Toggle Mic"}
        backgroundColor={"#1178F8"}
      />
      <Button
        onPress={() => {
          leave();
        }}
        buttonText={"Leave"}
        backgroundColor={"#FF0000"}
      />
    </View>
  );
}

function ParticipantView({ participantId }) {
  const { webcamStream, webcamOn } = useParticipant(participantId);

  return webcamOn && webcamStream ? (
    <RTCView
      streamURL={new MediaStream([webcamStream.track]).toURL()}
      objectFit={"cover"}
      style={{
        height: 300,
        marginVertical: 8,
        marginHorizontal: 8,
      }}
    />
  ) : (
    <View
      style={{
        backgroundColor: "grey",
        height: 300,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 16 }}>NO MEDIA</Text>
    </View>
  );
}

function ParticipantList ({ participants }) {
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
      <Text style={{ fontSize: 20, color:'black' }}>Press Join button to enter meeting.</Text>
    </View>
  );
}


function MeetingView() {
  const { join, leave, toggleWebcam, toggleMic, meetingId, participants } = useMeeting({});
  const participantsArrId = [...participants.keys()];
  return (
    <View style={{ flex: 1 }}>
      {meetingId ? (
        <Text style={{ fontSize: 18, padding: 12, color:'black' }}>
          Meeting Id :{meetingId}
        </Text>
      ) : null}
      <ParticipantList participants={participantsArrId} />
      <ControlsContainer
        join={join}
        leave={leave}
        toggleWebcam={toggleWebcam}
        toggleMic={toggleMic}
      />
    </View>
  );
}

export default function VideoCallSession() {
  const [meetingId, setMeetingId] = useState(null);
  const [token, setToken] = useState(null);

  // Fetch the token when the component mounts
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const newToken = await tokenProvider.token;
        setToken(newToken);
        console.log("Token fetched successfully:", newToken);
      } catch (err) {
        console.error("Failed to fetch token:", err);
      }
    };
    fetchToken();
  }, []);
  

  const getMeetingId = async (id) => {
    if (!token) {
      // console.error("Token not available yet.");
      Alert.alert('SERVER ERROR','TOKEN HAS NOT BEEN GENERATED');
      return;
    }
    const meetingId = id == null ? await createMeeting({ token }) : id;
    setMeetingId(meetingId);
    console.log("MEETING ID SET", meetingId);
  };

  return meetingId ? (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F6FF" }}>
      <MeetingProvider
        config={{
          meetingId,
          micEnabled: true,
          webcamEnabled: true,
          name: "Test User",
        }}
        token={token}
      >
        <MeetingView />
      </MeetingProvider>
    </SafeAreaView>
  ) : (
    <JoinScreen getMeetingId={getMeetingId} />
  );
}