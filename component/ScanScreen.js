import React from 'react';

import {Button} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import * as dataBase from '../db/db-service';

function ScanScreen(props) {
  const afficheScan = props.afficheScan;
  const setAfficheScan = props.setAfficheScan;
  const setUsers = props.setUsers;

  const onSuccess = e => {
    const strUserShare = e.data; //On recupère la donnée en string
    const objUserShare = JSON.parse(strUserShare); //On re-transforme le string en objet

    dataBase.addContact(
      objUserShare.name,
      objUserShare.first_name,
      objUserShare.adress,
      objUserShare.phone_number,
      objUserShare.mail,
      objUserShare.avatar,
      objUserShare.mainUser,
    )
    .then(async () => {
      //On charge la liste de contact pour la mettre à jour et on l'affiche et ferme le Scan
      const storedUsers = await dataBase.getUsers();
      if (storedUsers.length) {
        setUsers(storedUsers);
        setAfficheScan(!afficheScan);
      }
    });
  };

  return (
    <>
      <QRCodeScanner onRead={onSuccess} />
      <Button title="Retour" onPress={() => setAfficheScan(!afficheScan)} />
    </>
  );
}

export default ScanScreen;
