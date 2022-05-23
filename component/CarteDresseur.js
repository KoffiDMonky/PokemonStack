import {StyleSheet} from 'react-native';
import React, {useState, useCallback , useEffect} from 'react';
import * as dataBase from '../db/db-service';

import ModifUser from './ModifUser';
import QrCode from './QrCode';
import CarteMainUser from './CarteMainUser';

function CarteDresseur() {
  const [afficheQrCode, setAfficheQrCode] = useState(false);
  const [modifierContact, setModifierContact] = useState(false);
  const [user, setUser] = useState([]);

 
  //Méthode pour passer setAfficheQrCode en props au composant QrCode
  const stateQrCode = bool => {
    setAfficheQrCode(bool);
  };

  //Méthode permettant de charger les informations de l'utilisateurs en base de données
  const loadUserCallback = useCallback(async () => {
    try {
      const mainUser = await dataBase.getMainUser(); //Appel à la fonction mainUser pour récupérer l'utilisateur de l'appli
      
      //Si nous avons un utilisateur, on le stock dans la variable d'état User
      if (mainUser) {
        setUser(mainUser);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    
    dataBase.createTable();
    loadUserCallback();
  }, [loadUserCallback]);

  if (afficheQrCode) {
    return (
      <QrCode afficheQrCode={afficheQrCode} setAfficheQrCode={stateQrCode} />
    );
  } else {
    if (modifierContact) {
      return (
        <ModifUser
          modifierContact={modifierContact}
          setModifierContact={setModifierContact}
          user={user}
          backgroundColor={'#F9CF30'}
          setUser={setUser}
        />
      );
    } else {
      return (
        <CarteMainUser
          modifierContact={modifierContact}
          setModifierContact={setModifierContact}
          afficheQrCode={afficheQrCode}
          setAfficheQrCode={stateQrCode}
          user={user}
        />
      );
    }
  }
}

export default CarteDresseur;
