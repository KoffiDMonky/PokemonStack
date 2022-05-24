import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import FicheContact from './FicheContact';
import * as dataBase from '../db/db-service';
import Icon from 'react-native-vector-icons/FontAwesome';
import PokematosFlatlist from './PokematosFlatlist';
import CreerContact from './CreerContact';

function Pokematos(props) { //Ce composant permet d'affiche / ajouter / mettre à jour la liste des contacts rentrés dans pokestack
  const [users, setUsers] = useState(); //Variable d'état permettant de définir un tableau d'utilisateur à afficher
  const [selectedId, setSelectedId] = useState(); //Variable d'état permettant de définir l'identifiant de l'utilisateur sélectionner pour afficher les bonnes données dans la fiche
  
  //Props permettant d'afficher et définir l'état de la fiche contact et l'ajout de contact
  const afficheContact = props.afficheContact;
  const setAffichageContact = props.setAffichageContact;
  const [ajouterContact, setAjouterContact] = useState(false);

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


  useEffect(() => {
    dataBase.createTable(); //On créé la table Users si elle n'existe pas
    loadDataCallback(); //On charge la liste de contact
  }, [loadDataCallback]);

  if (afficheContact) { //La fiche du contact s'affiche lorsque l'on clique sur un item de contact
    return (
      <>
        <FicheContact
          contact={users[selectedId]}
          afficheContact={afficheContact}
          setAfficheContact={setAffichageContact}
          setUsers={loadDataCallback}
        />
      </>
    );
  } else if (ajouterContact) { //La fiche de création de contact s'affiche si l'on appuye sur le bouton '+'
    return (
      <CreerContact
      ajouterContact={ajouterContact}
      setAjouterContact={setAjouterContact}
      setUsers={loadDataCallback}
      />
    );
  } else {
    return ( //Sinon on affiche la liste des contacts
      <>
        <PokematosFlatlist
          users={users}
          setAfficheContact={setAffichageContact}
          setSelectedId={idSelectedValue}
          afficheContact={afficheContact}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setAjouterContact(!ajouterContact)}>
          <Icon name="plus" size={50} color={'#000000'} />
        </TouchableOpacity>
      </>
    );
  }
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#D90D4395',
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 99,
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});

export default Pokematos;
