import {View, StyleSheet} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import CustomMarker from './CustomMarker';
import MapView, {Marker} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import LoaderPage from './LoaderPage';
import * as dataBase from '../db/db-service';

function Carte() {
  //Composant permettant d'afficher les contact sur la carte via l'api GoogleMap et Geocoding (récupération des coordonnees d'une adresse)
  const [isLoading, setLoading] = useState(true); //Variable d'état permettant de définir si la liste de pokémon est chargé pour l'afficher
  const [locationContact, setLocationContact] = useState([]);
  const [address, setaddress] = useState([]);

  const loadAdressCallback = useCallback(async () => {
    //Méthode permettant de récupérer les contacts et leurs adresses pour les stocker dans un tableau
    try {
      const address = await dataBase.getContactAddress(); //Appel à la fonction mainUser pour récupérer l'utilisateur de l'appli

      //Si nous avons un utilisateur, on le stock dans la variable d'état address sous forme de tableau
      if (address) {
        setaddress(address);
        coord(address, address.length);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);


  Geocoder.init('AIzaSyDaO034bGYtTQgzhxNKMDjiwFENA427lBA'); // Initialisation de Geocoder

  const coord = async (address, length) => {
    //Méthode permettant de récupérer les coordonées d'une adresse + créer un nouveau tableau avec les adresses traduite en coordonnées GPS

    let arrayLocation = []; //Tableau dans lequel sera stocké nos nouveaux objet contenant nom du contact et ses coordonées GPS

    console.log('coord', length);
    
      for (let i = 0; i < length; i++) {
        console.log('cozucou' + i);
        //Boucle pour parcourir notre tableau address (contact + adresse)
        const addressParam = address[i].adress;

        await Geocoder.from(addressParam) //Appel à l'API
          .then(json => {
            //création de nouveaux objets pour récupérer la localisation, le nom du contact et assembler le tout
            let objLoc = {};
            let objNom = {};
            let objGlobal = {};
            const loc = json.results[0].geometry.location;
            const nom = address[i].name;
            objLoc.latitude = loc.lat;
            objLoc.longitude = loc.lng;
            objLoc.latitudeDelta = 4;
            objLoc.longitudeDelta = 4;

            objNom.nom = nom;

            objGlobal.loc = objLoc;
            objGlobal.contact = objNom;

            arrayLocation.push(objGlobal); //On envoie notre nouvel objet global dans notre tableau
          })

          .catch(error => console.warn(error));
      }
    

    if (arrayLocation) {
      //Si nous avons un tableau de localisation, on l'envoie à la variable d'état locationContact

      setLocationContact(arrayLocation);
      setLoading(false);
    }
  };

  const markers = locationContact.map(
    (
      loc,
      index, //Définition des marqueurs à afficher sur la carte
    ) => (
      <Marker coordinate={loc.loc} key={index}>
        <CustomMarker nom={loc.contact.nom} />
      </Marker>
    ),
  );

  useEffect(() => {
    loadAdressCallback();

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
