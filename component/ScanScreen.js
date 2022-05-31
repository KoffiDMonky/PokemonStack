import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Button} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import Toast from 'react-native-simple-toast';
import * as dataBase from '../db/db-service';

function ScanScreen(props) {
  const afficheScan = props.afficheScan;
  const setAfficheScan = props.setAfficheScan;
  const setUsers = props.setUsers;


  const onSuccess = e => {

    const strUserShare = e.data; //On recupère la donnée en string
    const objUserShare = JSON.parse(strUserShare); //On re-transforme le string en objet

    dataBase.addContact(objUserShare.name, objUserShare.first_name, objUserShare.adress, objUserShare.phone_number, objUserShare.mail, objUserShare.avatar, objUserShare.mainUser)
    .then(async () => {
      //On charge la liste de contact pour la mettre à jour et on l'affiche et ferme le Scan
      const storedUsers = await dataBase.getUsers();
      if (storedUsers.length) {
        setUsers(storedUsers);
        setAfficheScan(!afficheScan);
        Toast.show('Contact correctement ajouté !');
      }
    });
  };

  return (
    <>
      <QRCodeScanner onRead={onSuccess} showMarker={true} />

      <Button onPress={() => setAfficheScan(!afficheScan)} title="Retour" color="#D90D43" accessibilityLabel="Bouton permettant de faire retour"></Button>
    </>
  );
}

const styles = StyleSheet.create({

  button: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -150
  },
  titreText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#00000070',
    width: '40%',
  },
})

export default ScanScreen;