/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App.js';
import {name as appName} from './app.json';

import { register } from "@videosdk.live/react-native-sdk";

register();

AppRegistry.registerComponent(appName, () => App);
