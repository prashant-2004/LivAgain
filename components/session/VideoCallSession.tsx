// Import React Hooks
import React, { useRef, useState, useEffect } from 'react';
// Import user interface elements
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Switch,
} from 'react-native';
// Import components related to obtaining Android device permissions
import { PermissionsAndroid, Platform } from 'react-native';
// Import Agora SDK
import {
    createAgoraRtcEngine,
    ChannelProfileType,
    ClientRoleType,
    IRtcEngine,
    RtcSurfaceView,
    RtcConnection,
    IRtcEngineEventHandler,
} from 'react-native-agora';


// Define basic information
const appId = '33149ea2c7904dec934d086e6e6c9c4b';
const token = '';
const channelName = 'test';
const uid = 0; // Local user Uid, no need to modify

const VideoCallSession = () => {
    const agoraEngineRef = useRef<IRtcEngine>(); // IRtcEngine instance
    const [isJoined, setIsJoined] = useState(false); // Whether the local user has joined the channel
    const [isHost, setIsHost] = useState(true); // User role
    const [remoteUid, setRemoteUid] = useState(0); // Uid of the remote user
    const [message, setMessage] = useState(''); // User prompt message
    const eventHandler = useRef<IRtcEngineEventHandler>(); // Implement callback functions

    useEffect(() => {
        // Initialize the engine when the App starts
        setupVideoSDKEngine();
        // Release memory when the App is closed
        return () => {
            agoraEngineRef.current?.unregisterEventHandler(eventHandler.current!);
            agoraEngineRef.current?.release();
        };
    });

    // Define the setupVideoSDKEngine method called when the App starts
    const setupVideoSDKEngine = async () => {
        try {
            // Create RtcEngine after obtaining device permissions
            if (Platform.OS === 'android') {
                await getPermission();
            }
            agoraEngineRef.current = createAgoraRtcEngine();
            const agoraEngine = agoraEngineRef.current;
            eventHandler.current = {
                onJoinChannelSuccess: () => {
                    showMessage('Successfully joined channel: ' + channelName);
                    setIsJoined(true);
                },
                onUserJoined: (_connection: RtcConnection, uid: number) => {
                    showMessage('Remote user ' + uid + ' joined');
                    setRemoteUid(uid);
                },
                onUserOffline: (_connection: RtcConnection, uid: number) => {
                    showMessage('Remote user ' + uid + ' left the channel');
                    setRemoteUid(0);
                },
            };

            // Register the event handler
            agoraEngine.registerEventHandler(eventHandler.current);
            // Initialize the engine
            agoraEngine.initialize({
                appId: appId,
            });
            // Enable local video
            agoraEngine.enableVideo();
            agoraEngineRef.current?.enableLocalVideo(true);
        } catch (e) {
            console.log(e);
        }
    };

    // Define the join method called after clicking the join channel button
    const join = async () => {
        if (isJoined) {
            return;
        }
        try {
            if (isHost) {
                // Start preview
                agoraEngineRef.current?.startPreview();
                // Join the channel as a broadcaster
                agoraEngineRef.current?.joinChannel(token, channelName, uid, {
                    // Set channel profile to live broadcast
                    channelProfile: ChannelProfileType.ChannelProfileCommunication,
                    // Set user role to broadcaster
                    clientRoleType: ClientRoleType.ClientRoleBroadcaster,
                    // Publish audio collected by the microphone
                    publishMicrophoneTrack: true,
                    // Publish video collected by the camera
                    publishCameraTrack: true,
                    // Automatically subscribe to all audio streams
                    autoSubscribeAudio: true,
                    // Automatically subscribe to all video streams
                    autoSubscribeVideo: true,
                });
            } else {
                // Join the channel as an audience
                agoraEngineRef.current?.joinChannel(token, channelName, uid, {
                    // Set channel profile to live broadcast
                    channelProfile: ChannelProfileType.ChannelProfileCommunication,
                    // Set user role to audience
                    // clientRoleType: ClientRoleType.ClientRoleAudience,
                    clientRoleType: ClientRoleType.ClientRoleBroadcaster,
                    // Do not publish audio collected by the microphone
                    publishMicrophoneTrack: true,
                    // Do not publish video collected by the camera
                    publishCameraTrack: true,
                    // Automatically subscribe to all audio streams
                    autoSubscribeAudio: true,
                    // Automatically subscribe to all video streams
                    autoSubscribeVideo: true,
                });
            }
        } catch (e) {
            console.log(e);
        }
    };
    // Define the leave method called after clicking the leave channel button
    const leave = () => {
        try {
            // Call leaveChannel method to leave the channel
            agoraEngineRef.current?.leaveChannel();
            setRemoteUid(0);
            setIsJoined(false);
            showMessage('Left the channel');
        } catch (e) {
            console.log(e);
        }
    };

    // Render user interface
    return (
        <SafeAreaView style={styles.main}>
            <Text style={styles.head}>VIDEO CALLING</Text>
            <View style={styles.btnContainer}>
                <Text onPress={join} style={styles.button}>
                    Join Channel
                </Text>
                <Text onPress={leave} style={styles.button}>
                    Leave Channel
                </Text>
            </View>
            <View style={styles.btnContainer}>
                <Text style={styles.text}>Audience</Text>
                <Switch
                    onValueChange={switchValue => {
                        setIsHost(switchValue);
                        if (isJoined) {
                            leave();
                        }
                    }}
                    value={isHost}
                />
                <Text style={styles.text}>Host</Text>
            </View>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContainer}>
                {isJoined && isHost ? (
                    <React.Fragment key={0}>
                        {/* Create a local view using RtcSurfaceView */}
                        {/* <RtcSurfaceView canvas={{ uid: 0 }} style={styles.videoView} /> */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            {/* Local Video */}
                            {isJoined ? (
                                <RtcSurfaceView canvas={{ uid: 0 }} style={styles.localVideo} />
                            ) : null}
                            {/* Remote Video */}
                            {isJoined && remoteUid !== 0 ? (
                                <RtcSurfaceView canvas={{ uid: remoteUid }} style={styles.remoteVideo} />
                            ) : null}
                        </View>
                        <Text onPress={() => agoraEngineRef.current?.muteLocalVideoStream(true)} style={styles.button}>
                            Turn Off Camera
                        </Text>
                        <Text onPress={() => agoraEngineRef.current?.muteLocalVideoStream(false)} style={styles.button}>
                            Turn On Camera
                        </Text>
                        <Text onPress={() => agoraEngineRef.current?.muteLocalAudioStream(true)} style={styles.button}>
                            Mute Microphone
                        </Text>
                        <Text onPress={() => agoraEngineRef.current?.muteLocalAudioStream(false)} style={styles.button}>
                            Un-Mute Microphone
                        </Text>

                        {/* <Text style={styles.text}>Local user uid: {uid}</Text> */}
                    </React.Fragment>
                ) : (
                    <Text style={styles.text}>Join a channel</Text>
                )}
                {isJoined && remoteUid !== 0 ? (
                    <React.Fragment key={remoteUid}>
                        {/* Create a remote view using RtcSurfaceView */}
                        <RtcSurfaceView
                            canvas={{ uid: remoteUid }}
                            style={styles.videoView}
                        />
                        <Text style={styles.text}>Remote user uid: {remoteUid}</Text>
                    </React.Fragment>
                ) : (
                    <Text style={styles.text}>{isJoined && !isHost ? 'Waiting for remote user to join' : ''}</Text>
                )}
                <Text style={styles.info}>{message}</Text>
            </ScrollView>
        </SafeAreaView>
    );

    // Display information
    function showMessage(msg: string) {
        setMessage(msg);
    }
};

// Define user interface styles
const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 25,
        paddingVertical: 4,
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#0055cc',
        margin: 5,
    },
    text:{color:'black'},
    localVideo: { width: '45%', height: 200, backgroundColor:'yellow' },
    remoteVideo: { width: '45%', height: 200, backgroundColor:'blue' },
    main: { flex: 1, alignItems: 'center' },
    scroll: { flex: 1, backgroundColor: '#ddeeff', width: '100%',   color:'black'},
    scrollContainer: { alignItems: 'center',  color:'black'},
    videoView: { width: '90%', height: 200},
    btnContainer: { flexDirection: 'row', justifyContent: 'center',  color:'black' },
    head: { fontSize: 20 , color:'black'},
    info: { backgroundColor: '#ffffe0', paddingHorizontal: 8, color:'black' },
});
// color: '#0000ff',
const getPermission = async () => {
    if (Platform.OS === 'android') {
        await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            PermissionsAndroid.PERMISSIONS.CAMERA,
        ]);
    }
};

export default VideoCallSession;


// import AgoraUIKit from 'agora-rn-uikit';

// const VideoCallSession = () => {
// const connectionData = {
//     appId: '33149ea2c7904dec934d086e6e6c9c4b',
//     channel: 'test',
//     token: null, // enter your channel token as a string 
//     };
//     return(
//         <AgoraUIKit connectionData={connectionData} />
//         );
// };

// export default VideoCallSession; 