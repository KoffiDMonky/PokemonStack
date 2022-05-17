import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import FicheContact from './FicheContact';
import * as dataBase from '../db/db-service';

import PokematosFlatlist from './PokematosFlatlist';

function Pokematos() {
  const [users, setUsers] = useState();
  const [afficheContact, setAfficheContact] = useState(false);
  const [selectedId, setSelectedId] = useState(); //Variable d'état permettant de définir l'identifiant de l'utilisateur sélectionner pour afficher les bonnes données dans la fiche

  //Méthode pour passer setAfficheContact en props au composant FicheContact
  const setAffichageContact = bool => {
    setAfficheContact(bool);
  };

  //Méthode pour passer setSelectedId en props au composant PokematosFlatlist
  const idSelectedValue = value => {
    setSelectedId(value);
  };

  //Méthode permettant de récupérer les contacts enregister dans la base de données
  const loadDataCallback = useCallback(async () => {
    try {
      const storedUsers = await dataBase.getUsers(); //Appel à la fonction getUsers pour récupérer notre liste d'utilisateurs

      if (storedUsers.length) {
        //Si nous avons des utilisateurs, on les stocks dans la variable d'état Users
        setUsers(storedUsers); 
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  //Méthode permettant d'ajouter un utilisateur en base de donnée
  const onPressAddUser = () => {
    dataBase.createTable();
    dataBase
      .addUser(
        'lelievre',
        'annaeg',
        'une adresse au pif',
        '0123456789',
        'azerty@azerty.com',
        '',
      )
      .then(async () => {
        const storedUsers = await dataBase.getUsers();
        console.log('store', storedUsers);
        if (storedUsers.length) {
          setUsers(storedUsers);
        }
      });
  };

  useEffect(() => {
    loadDataCallback();
    //onPressAddUser();
  }, [loadDataCallback]);

  if (afficheContact == true) {
    return (
      <>
        <FicheContact
          contact={users[selectedId - 1]}
          afficheContact={afficheContact}
          setAfficheContact={setAffichageContact}
        />
      </>
    );
  } else {
    return (
      <PokematosFlatlist
        users={users}
        setAfficheContact={setAffichageContact}
        setSelectedId={idSelectedValue}
        afficheContact={afficheContact}
      />
    );
  }
}

export default Pokematos;
