import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


function CustomMarker(props) {

  const nom = props.nom;
  
  return (
    <View style={styles.marker}>
      <Icon name="map-pin" size={20} color={'#F6F6F698'} />
      <Text style={styles.color}>{nom}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  marker: {
    // paddingVertical: 10,
    // paddingHorizontal: 30,
    backgroundColor: 'red',
    borderRadius: 5,
    elevation: 10,
    alignItems: 'center'
  },
  text: {
    color: '#fff',
  },
});

export default CustomMarker;