import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import * as dataBase from '../db/db-service';
import ModifContact from './ModifContact';
import Icon from 'react-native-vector-icons/FontAwesome';
import LaunchCall from './LaunchCall';

function FicheContact(props) { //Composant définissant la fiche contact
  
  const [modifierContact, setModifierContact] = useState(false); //Variable d'état permettant de gérer l'affichage du composant ModifContact

  //Props provenant du composant parent
  const afficheContact = props.afficheContact;
  const setAfficheContact = props.setAfficheContact;
  const setUsers = props.setUsers;
  const contact = props.contact;
  const id = contact.id;
  const nom = contact.name;
  const prenom = contact.first_name;
  const adresse = contact.adress;
  const mail = contact.mail;
  const phone = contact.phone_number;
  const avatarContact = contact.avatar;

  const uriAvatar = JSON.parse(avatarContact);

  // console.log('fiche contact',avatarContact);

  const showConfirmDialog = () => { //Méthode permettant d'afficher une alerte avant la suppression d'un contact
    
    Alert.alert(
      'Êtes vous sur de vouloir supprimer le contact ?',
      'message de confirmation',
      [
        // Si l'utilisateur souhaite valider l'action de suppression
        {
          text: 'Oui',
          onPress: () => {
            onPressDeleteContact(id);
            setAfficheContact(!afficheContact);
          },
        },
        // Ne fait rien d'autre que de fermer la popup lorsqu'on appuie dessus
        {
          text: 'Non',
        },
      ],
    );
  };

  const onPressDeleteContact = () => {
    //Méthode permettant la suppression d'un contact et recharge la liste de contact à jour
    dataBase.deleteContact(id).then(async () => {
      const storedUsers = await dataBase.getUsers();
      if (storedUsers.length) {
        setUsers(storedUsers);
        setAfficheContact(!afficheContact);
      }
    });
  };

  if (modifierContact) { //On affiche le composant de modification de contact si l'on appuye sur le buton modifier
    return (
      <>
        <ModifContact
          modifierContact={modifierContact}
          setModifierContact={setModifierContact}
          setUsers={setUsers}
          currentAvatar = {uriAvatar}
          backgroundColor={'#D90D43'}
          contact={[id, nom, prenom, adresse, mail, phone, avatarContact]}
        />
      </>
    );
  } else {
    return (
      <View style={styles.body}>
        <View style={styles.top}>
          <TouchableOpacity
            style={styles.topTouchable}
            onPress={() => setAfficheContact(!afficheContact)}>
            <Icon name="arrow-left" size={20} color={'#000000'} />
          </TouchableOpacity>
        </View>
        <View style={styles.image}>
          <Image
            style={styles.pic}
            source={uriAvatar}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.titre}>
            {prenom} {nom}
          </Text>
          <View style={styles.detail}>
            <View style={styles.option}>
              <LaunchCall phone={phone} />

              <TouchableOpacity
                style={styles.optionTouchable}
                onPress={() => setModifierContact(!modifierContact)}>
                <Icon name="pencil" size={35} color="#000000" />
                <Text style={{color: 'black', fontSize: 15}}>Modifier</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionTouchable}
                onPress={() => showConfirmDialog()}>
                <Icon name="trash" size={35} color="#000000" />
                <Text style={{color: 'black', fontSize: 15}}>Supprimer</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.coordonnees}>
              <Text style={{color: 'black', fontSize: 15}}>
                Telephone : {phone}
              </Text>
            </View>
            <View style={styles.coordonnees}>
              <Text style={{color: 'black', fontSize: 15}}>Email : {mail}</Text>
            </View>
            <View style={styles.coordonnees}>
              <Text style={{color: 'black', fontSize: 15}}>
                Adresse : {adresse}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  body: {
    height: '100%',
    backgroundColor: '#D90D43',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  topTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    width: 30,
  },
  titre: {
    flex: 1,
    width: '100%',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 20,
    color: '#D90D43',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  detail: {
    flex: 8,
    alignItems: 'center',
  },
  info: {
    flex: 6,
    backgroundColor: '#F6F6F6',
    marginBottom: 8,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    zIndex: 2,
    color: 'black',
    alignItems: 'center',
    padding: 15,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '85%',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  optionTouchable: {
    alignItems: 'center',
    width: 90,
  },
  coordonnees: {
    flex: 2,
    justifyContent: 'center',
  },
  image: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  pic: {
    height: '100%',
    width: '50%',
    backgroundColor: '#F6F6F6',
    borderRadius: 99,
    marginBottom: 30
  },
});

export default FicheContact;
