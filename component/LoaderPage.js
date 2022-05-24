import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  StatusBar,
  View,
  ActivityIndicator,
} from 'react-native';

function LoaderPage() { //Composant Loader qui s'affiche pendant le chargement de la liste de pokémon
  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      <View style={styles.body}>
        <Image
          style={styles.logo}
          source={require('../assets/logopokeball.png')}></Image>
        <Text style={styles.name}> Pokestack</Text>
        <ActivityIndicator size="large" color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F7F7F7',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  logo: {
    resizeMode: 'contain',
    height: '40%',
    width: '60%'
  },
  name: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#212121',
  },
});

export default LoaderPage;
