import {View, StyleSheet} from 'react-native';
import * as React from 'react';
import CustomMarker from './CustomMarker';
import MapView, {Marker} from 'react-native-maps';

function Carte() {
  //Composant permettant d'afficher la carte via l'api GoogleMap

  //Coordonnées de Tokyo
  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 35.6762,
          longitude: 139.6503,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <Marker coordinate={tokyoRegion}>
          <CustomMarker />
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    flex: 1,
  },
});

export default Carte;
