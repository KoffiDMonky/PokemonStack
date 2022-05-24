import {StyleSheet} from 'react-native';
import React, {useState} from 'react';

import ModifContact from './ModifContact';
import QrCode from './QrCode';
import CarteMainUser from './CarteMainUser';

function CarteDresseur() {
  const [afficheQrCode, setAfficheQrCode] = useState(false);
  const [modifierContact, setModifierContact] = useState(false);

  //Méthode pour passer setAfficheQrCode en props au composant QrCode
  const stateQrCode = bool => {
    setAfficheQrCode(bool);
  };

  if (afficheQrCode) {
    return (
      <QrCode afficheQrCode={afficheQrCode} setAfficheQrCode={stateQrCode} />
    );
  } else {
    if (modifierContact) {
      return (
        <ModifContact
          modifierContact={modifierContact}
          setModifierContact={setModifierContact}
          backgroundColor={'#F9CF30'}
        />
      );
    } else {
      return (
        <CarteMainUser
          modifierContact={modifierContact}
          setModifierContact={setModifierContact}
          afficheQrCode={afficheQrCode}
          setAfficheQrCode={stateQrCode}
        />
      );
    }
  }
}

export default CarteDresseur;
