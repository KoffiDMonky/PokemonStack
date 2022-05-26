import {View, StyleSheet} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import CustomMarker from './CustomMarker';
import MapView, {Marker} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import LoaderPage from './LoaderPage';
import * as dataBase from '../db/db-service';

function Carte() {
  //Composant permettant d'afficher la carte via l'api GoogleMap
  const [isLoading, setLoading] = useState(true); //Variable d'état permettant de définir si la liste de pokémon est chargé pour l'afficher
  const [locationContact, setLocationContact] = useState([]);
  const [address, setaddress] = useState([]);

  const loadAdressCallback = useCallback(async () => {
    try {
      const address = await dataBase.getContactAddress(); //Appel à la fonction mainUser pour récupérer l'utilisateur de l'appli

      //Si nous avons un utilisateur, on le stock dans la variable d'état User
      if (address) {
        setaddress(address);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  let addressParam = '';

  for (let i = 0; i < address.length; i++) {
    const adressList = address[i].adress;
    addressParam += adressList + ' + ';
  }

  // Initialisation du module geocoder
  Geocoder.init('AIzaSyDaO034bGYtTQgzhxNKMDjiwFENA427lBA'); // Clé API Google Map

  const coord = async () => {
    await Geocoder.from(addressParam)
      .then(json => {
        let arrayLocation = [];

        for (let i = 0; i < address.length; i++) {
          let objLoc = {};
          let objNom = {};
          let objGlobal = {};
          const loc = json.results[i].geometry.location;
          const nom = address[i];
          objLoc.latitude = loc.lat;
          objLoc.longitude = loc.lng;
          objLoc.latitudeDelta = 4;
          objLoc.longitudeDelta = 4;

          objNom.nom = nom.name;

          objGlobal.loc = objLoc;
          objGlobal.contact = objNom;

          arrayLocation.push(objGlobal);
        }

        return arrayLocation;
      })
      .then(loc => {
        setLocationContact(loc);
        setLoading(false);
      })
      .catch(error => console.warn(error));
  };

  console.log('arrayState', locationContact);

  const markers = locationContact.map((loc, index) => (
    <Marker coordinate={loc.loc} key={index}>
      <CustomMarker nom={loc.contact.nom} />
    </Marker>
  ));

  useEffect(() => {
    loadAdressCallback();
    coord();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoaderPage />
      ) : (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 48.1,
            longitude: -3.0,
            latitudeDelta: 4,
            longitudeDelta: 4,
          }}
          showsUserLocation={true}>
          {markers}
        </MapView>
      )}
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
