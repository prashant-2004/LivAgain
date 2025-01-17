import {
    Text,
    View,
  } from 'react-native';
  import {
    useMeeting,
  } from "@videosdk.live/react-native-sdk";
import ControlsContainer from './ControlsContainer';
import ParticipantList from './ParticipantList';
 
  export default  function MeetingView() {
    const { join, leave, toggleWebcam, toggleMic, meetingId , participants } = useMeeting({});
  const participantsArrId = [...participants.keys()];

  return (
      <View style={{ flex: 1 }}>
        {meetingId ? (
          <Text style={{ fontSize: 18, padding: 12 }}>
            Meeting Id :{meetingId}
          </Text>
        ) : null}
        <ParticipantList participants={participantsArrId}/>
        <ControlsContainer
          join={join}
          leave={leave}
          toggleWebcam={toggleWebcam}
          toggleMic={toggleMic}
        />
      </View>
    );
  }