import React from 'react';
import { NativeModules, Button } from 'react-native';

const LaunchQrScan = () => {
  const onPress = () => {
    console.log('We will invoke the native module here!');
    QrScanModule.createQrScanEvent('testName', 'testLocation');
    console.log('ça marche');

  };
  const { QrScanModule } = NativeModules;

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default LaunchQrScan;