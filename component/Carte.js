import { View, StyleSheet } from "react-native";
import * as React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

function Carte({ navigation }) {
  return (
    <View>
      <MapView
        style={StyleSheet.absoluteFillObject}
        provider={MapView.PROVIDER_GOOGLE}
        /*showsUserLocation
          initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421}}*/
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Carte;
