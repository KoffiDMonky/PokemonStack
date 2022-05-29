//'use strict';

import React, {useState} from 'react';

import {Linking, Button} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import * as dataBase from '../db/db-service';

function ScanScreen(props) {
  const afficheScan = props.afficheScan;
  const setAfficheScan = props.setAfficheScan;

  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [mail, setMail] = useState();
  const [numero, setNumero] = useState();
  const [mainUser, setMainUser] = useState();
  const [avatar, setAvatar] = useState();
  const [adresse, setAdresse] = useState();

  const onSuccess = e => {
    const strUserShare = e.data;
    console.log('scanned data ' + strUserShare);
    const objUserShare = JSON.parse(strUserShare);
    console.log('json data ' + objUserShare);
    console.log('json data ' + objUserShare.name);

    setNom(objUserShare.name);
    setPrenom(objUserShare.first_name);
    setMail(objUserShare.mail);
    setNumero(objUserShare.phone_number);
    setMainUser(objUserShare.mainUser);
    setAvatar(objUserShare.avatar);
    setAdresse(objUserShare.adress);

    dataBase.addContact(nom, prenom, adresse, numero, mail, avatar, mainUser);
  };

  return (
    <>
      <QRCodeScanner onRead={onSuccess} />
      <Button title="Retour" onPress={() => setAfficheScan(!afficheScan)} />
    </>
  );
}

export default ScanScreen;
