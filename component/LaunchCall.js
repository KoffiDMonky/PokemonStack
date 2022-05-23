/*import React from 'react';
import { NativeModules, Button } from 'react-native';

const LaunchCall = () => {
  const onPress = () => {
    console.log('We will invoke the native module here!');
    CallModule.call('0612909535');
    console.log('ça marche');

  };
  const { CallModule } = NativeModules;

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default LaunchCall;*/

import React from 'react';
import {
  PermissionsAndroid,
  TouchableNativeFeedback,
  View,
  NativeModules,
  PlatformColor,
  Text
} from 'react-native';
//import Icon from 'react-native-ionicons';

const { CallModule } = NativeModules;

export default function LaunchCall({ phone }) {
  const requestCallPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CALL_PHONE,
          {
            title: 'Phone call Permission',
            message: 'App needs phone call permission',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
  }
  const call = async () => {
    if (await requestCallPermission()) {
      CallModule.call(phone)
    }
  }

  return <TouchableNativeFeedback onPress={() => call()}>
    <View style={{ alignItems: 'stretch', }} >
      <Text>Appel</Text>
    </View>
  </TouchableNativeFeedback>
}