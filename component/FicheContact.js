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

function FicheContact(props) {
  const [modifierContact, setModifierContact] = useState(false);
  const [popUp, setPopUp] = useState(true);
  const afficheContact = props.afficheContact;
  const setAfficheContact = props.setAfficheContact;
  const contact = props.contact;
  const setUsers = props.setUsers;

  const id = contact.id;
  const nom = contact.name;
  const prenom = contact.first_name;
  const adresse = contact.adress;
  const mail = contact.mail;
  const phone = contact.phone_number;
  const avatar = contact.avatar;

  const showConfirmDialog = () => {
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
    dataBase.deleteContact(id).then(async () => {
      const storedUsers = await dataBase.getUsers();
      if (storedUsers.length) {
        setUsers(storedUsers);
        setAfficheContact(!afficheContact);
      }
    });
  };

  if (modifierContact == false) {
    return (
      <View style={styles.body}>
        <View style={styles.top}>
          <TouchableOpacity
            style={styles.topTouchable}
            onPress={() => setAfficheContact(!afficheContact)}>
            <Icon name="arrow-left" size={20} color={'dark'} />
          </TouchableOpacity>
        </View>
        <View style={styles.image}>
          <Image
            style={styles.pic}
            source={require('../assets/Red_profile.webp')}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.titre}>
            {prenom} {nom}
          </Text>
          <View style={styles.detail}>
            <View style={styles.option}>
              <LaunchCall phone={phone} />
              {/* <TouchableOpacity style={styles.optionTouchable}
                onPress={() => setAfficheContact(!afficheContact)}>
                   <Icon name="phone" size={40} color="#000000" />
                <Text style={{color: 'black', fontSize: 15}}>Appel</Text>
              </TouchableOpacity> */}
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
  } else {
    return (
      <>
        <ModifContact
          modifierContact={modifierContact}
          setModifierContact={setModifierContact}
          setUsers={setUsers}
          backgroundColor={'#D90D43'}
          contact={[id, nom, prenom, adresse, mail, phone, avatar]}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  //FICHE POKEMON
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
  topName: {
    fontSize: 20,
    fontWeight: 'bold',
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
  id: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  pic: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  propos: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caracteristique: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    padding: 5,
  },
  details: {
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsMiddle: {
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    width: '85%',
    textAlign: 'center',
    padding: 5,
    color: '#212121',
  },
  stats: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkText: {
    color: '#212121',
  },
  darkTitle: {
    color: '#212121',
    fontWeight: 'bold',
  },
});

export default FicheContact;
