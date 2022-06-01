import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function CustomMarker(props) {
  const nom = props.nom;
  const prenom = props.prenom;
  const userType = props.userType;

  return ( //Affiche des markers sur la map pour localiser l'habitat des contact
    <View style={styles.body}>
        <Text style={styles.text}>{nom}</Text>
        <Text style={styles.text}>{prenom}</Text>
      <View style={styles.marker}>
      { userType ? <Icon name="map-pin" size={20} color={'#F9CF30'} />:<Icon name="map-pin" size={20} color={'#D90D43'} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
alignItems: 'center'
  },
  marker: {
   height: 30,
   width: 30,
    borderRadius: 99,
    elevation: 10,
    alignItems: 'center',
  },
  text: {
    color: '#000',
    backgroundColor: '#f6f6f690',
    borderRadius: 20,
    paddingHorizontal: 10
  },
});

export default CustomMarker;
