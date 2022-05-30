import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import * as dataBase from '../db/db-service';

function ScanScreen(props) {
  const afficheScan = props.afficheScan;
  const setAfficheScan = props.setAfficheScan;
  const setUsers = props.setUsers;


  const onSuccess = e => {
console.log('success');
    const strUserShare = e.data; //On recupère la donnée en string
    const objUserShare = JSON.parse(strUserShare); //On re-transforme le string en objet

    dataBase.addContact(objUserShare.name, objUserShare.first_name, objUserShare.adress, objUserShare.phone_number, objUserShare.mail, objUserShare.avatar, objUserShare.mainUser)
    .then(async () => {
      //On charge la liste de contact pour la mettre à jour et on l'affiche et ferme le Scan
      const storedUsers = await dataBase.getUsers();
      if (storedUsers.length) {
        console.log('coucou',storedUsers);
        setUsers(storedUsers);
        setAfficheScan(!afficheScan);
      }
    });
  };

  return (
    <>
      <QRCodeScanner onRead={onSuccess} showMarker={true} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setAfficheScan(!afficheScan)}>
        <Text style={styles.titreText}>Retour</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({

  button: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20
  },
  titreText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#F6F6F670',
    width: '40%',
  },
})

export default ScanScreen;