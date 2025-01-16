import React from "react";
import { StatusBar as RNStatusBar, View } from "react-native";

const StatusBar = () => {
  return (
    <View>
      <RNStatusBar
        backgroundColor="red"
        barStyle="dark-content"
        hidden={false}
      />
    </View>
  );
};

export default StatusBar;
