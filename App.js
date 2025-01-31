import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ZegoUIKitPrebuiltLiveAudioRoom, { HOST_DEFAULT_CONFIG } from '@zegocloud/zego-uikit-prebuilt-live-audio-room-rn'

export default function LiveAudioRoomPage(props) {
    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltLiveAudioRoom
                appID={415891193}
                appSign={'a380fd016a61cc9d24f348ea52252070850637a4508e50a83e7028307944935d'}
                userID={1} // userID can be something like a phone number or the user id on your own user system. 
                userName={'psk'}
                roomID={'testing'} // roomID can be any unique string. 
                // config={{
                //     ...HOST_DEFAULT_CONFIG,
                //     onLeave: () => { props.navigation.navigate('student_home') },
                // }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
});

