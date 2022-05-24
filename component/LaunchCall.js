import React from 'react';
import {
  PermissionsAndroid,
  TouchableNativeFeedback,
  View,
  NativeModules,
  PlatformColor,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {CallModule} = NativeModules;

function LaunchCall({phone}) {
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
  };
  const call = async () => {
    if (await requestCallPermission()) {
      CallModule.call(phone);
    }
  };

  return (
    <TouchableNativeFeedback onPress={() => call()}>
      <View>
        <Icon name="phone" size={40} color="#000000" />
        <Text style={{color: 'black', fontSize: 15}}>Appel</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

export default LaunchCall;
