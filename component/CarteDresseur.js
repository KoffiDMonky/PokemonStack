import React, {useState, useCallback, useEffect} from 'react';
import * as dataBase from '../db/db-service';

import ModifUser from './ModifUser';
import QrCode from './QrCode';
import CarteMainUser from './CarteMainUser';
import LoaderPage from './LoaderPage';

function CarteDresseur() {
  //Composant principal de l'onglet "Carte Dresseur", on l'on va afficher / modifier / partager les informations de l'utilisateur de l'application

  const [afficheQrCode, setAfficheQrCode] = useState(false);
  const [modifierContact, setModifierContact] = useState(false);
  const [isLoading, setLoading] = useState(true); //Variable d'état permettant de définir si la liste de pokémon est chargé pour l'afficher
  const [user, setUser] = useState([]);

  // console.log(user[0].avatar);

  //Méthode pour passer setAfficheQrCode en props au composant QrCode
  const stateQrCode = bool => {
    setAfficheQrCode(bool);
  };
  //Méthode pour passer stateUser en props au composant ModifUser
  const stateUser = bool => {
    setUser(bool);
  };

  //Méthode permettant de charger les informations de l'utilisateur de l'application en base de données
  const loadUserCallback = useCallback(async () => {
    try {
      const mainUser = await dataBase.getMainUser(); //Appel à la fonction mainUser pour récupérer l'utilisateur de l'appli

      //Si nous avons un utilisateur, on le stock dans la variable d'état User
      if (mainUser) {
        setUser(mainUser);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    dataBase.createTable(); //Création de la table Users si elle n'existe pas
    loadUserCallback(); // Chargement des informations de l'utilisateur de l'application
  }, [loadUserCallback]);

  if (afficheQrCode) {
    return (
      <QrCode afficheQrCode={afficheQrCode} setAfficheQrCode={stateQrCode} /> //Composant QrCode que l'on affiche lorsque l'on appuye sur le bouton Partager
    );
  } else {
    if (modifierContact) {
      //On affiche la composant ModifUser si l'on appuye sur le bouton Modifier...
      return (
        <ModifUser
          modifierContact={modifierContact}
          setModifierContact={setModifierContact}
          user={user}
          backgroundColor={'#F9CF30'}
          setUser={stateUser}
        />
      );
    } else {
      return (
        //... Sinon on affiche la carte de l'utilisateur de l'application
        <>
          {isLoading ? (
            <LoaderPage />
          ) : (
            <CarteMainUser
              modifierContact={modifierContact}
              setModifierContact={setModifierContact}
              afficheQrCode={afficheQrCode}
              setAfficheQrCode={stateQrCode}
              user={user}
              setUser={stateUser}
            />
          )}
        </>
      );
    }
  }
}

export default CarteDresseur;
