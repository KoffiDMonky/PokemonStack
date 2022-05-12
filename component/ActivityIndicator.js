import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';

function ActivityIndicator() {
  return (
    <view style={styles.background}>
      <StatusBar style="auto" />
      <Image
        style={styles.logo}
        source={require('../assets/logopokeball.png')}></Image>
      <Text style={styles.nameSection}> Pokestack</Text>
    </view>
  );
}

const styles = StyleSheet.create({
    background: {
      backgroundColor: '#F7F7F7',
    },
    logo: {
      resizeMode: 'contain',
      height: '80%',
      width: '20%',
      marginLeft: 20,
    },  
    nameSection: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#212121',
    },
  });
  

export default ActivityIndicator;
