// Import React Hooks
import React, {useRef, useState, useEffect} from 'react';
// Import user interface elements
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Switch,
} from 'react-native';

export default function ChatSession() {    
    const agoraEngineRef = useRef<IRtcEngine>(any); // IRtcEngine instance
    const [isJoined, setIsJoined] = useState(false); // Whether the local user has joined the channel
    const [isHost, setIsHost] = useState(true); // User role
    const [remoteUid, setRemoteUid] = useState(0); // Uid of the remote user
    const [message, setMessage] = useState(''); // User prompt message

    // Render user interface
    return (
        <SafeAreaView style={styles.main}>
            <Text style={styles.head}>Agora Video SDK Quickstart</Text>
            <View style={styles.btnContainer}>
                <Text onPress={join} style={styles.button}>
                    Join channel
                </Text>
                <Text onPress={leave} style={styles.button}>
                    Leave channel
                </Text>
            </View>
            <View style={styles.btnContainer}>
                <Text>Audience</Text>
                <Switch
                    onValueChange={switchValue => {
                        setIsHost(switchValue);
                        if (isJoined) {
                            leave();
                        }
                    }}
                    value={isHost}
                />
                <Text>Host</Text>
            </View>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContainer}>
                {isJoined && isHost ? (
                    <React.Fragment key={0}>
                        {/* Create a local view using RtcSurfaceView */}
                        <RtcSurfaceView canvas={{ uid: 0 }} style={styles.videoView} />
                        <Text>Local user uid: {uid}</Text>
                    </React.Fragment>
                ) : (
                    <Text>Join a channel</Text>
                )}
                {isJoined && remoteUid !== 0 ? (
                    <React.Fragment key={remoteUid}>
                        {/* Create a remote view using RtcSurfaceView */}
                        <RtcSurfaceView
                            canvas={{ uid: remoteUid }}
                            style={styles.videoView}
                        />
                        <Text>Remote user uid: {remoteUid}</Text>
                    </React.Fragment>
                ) : (
                    <Text>{isJoined && !isHost ? 'Waiting for remote user to join' : ''}</Text>
                )}
                <Text style={styles.info}>{message}</Text>
            </ScrollView>
        </SafeAreaView>
    );

    // Display information
    function showMessage(msg) {
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
    main: { flex: 1, alignItems: 'center' },
    scroll: { flex: 1, backgroundColor: '#ddeeff', width: '100%' },
    scrollContainer: { alignItems: 'center' },
    videoView: { width: '90%', height: 200 },
    btnContainer: { flexDirection: 'row', justifyContent: 'center' },
    head: { fontSize: 20 },
    info: { backgroundColor: '#ffffe0', paddingHorizontal: 8, color: '#0000ff' }
});