import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ModifContact from './ModifContact';
import Icon from 'react-native-vector-icons/FontAwesome';
import LaunchCall from './LaunchCall';

function FicheContact(props) {
  const [modifierContact, setModifierContact] = useState(false);
  const [afficheCallModule, setAfficheCallModule] = useState(false);
  const afficheContact = props.afficheContact;
  const setAfficheContact = props.setAfficheContact;
  const contact = props.contact;

  const nom = contact.name;
  const prenom = contact.first_name;
  const adresse = contact.adress;
  const mail = contact.mail;
  const phone = contact.phone_number;

  if (afficheCallModule){
    return(
    <LaunchCall phone={('0612909535')}/>
    );
  }else{
  if (modifierContact == false) {
  return (
    <View style={styles.body}>
      <View style={styles.top}>
      <TouchableOpacity style={styles.topTouchable} onPress={() => setAfficheContact(!afficheContact)}>
            <Icon name="arrow-left" size={20} color={'dark'} />
            <Text style={styles.topName}> {contact.name}</Text>
        </TouchableOpacity>
        <Text style={styles.id}>#</Text>
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
            <TouchableOpacity
              onPress={() => setAfficheCallModule(!afficheCallModule)}>
              <Text style={{color: 'black', fontSize: 15}}>Appel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModifierContact(!modifierContact)}>
              <Text style={{color: 'black', fontSize: 15}}>Modifier</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setAfficheContact(!afficheContact)}>
              <Text style={{color: 'black', fontSize: 15}}>Partager</Text>
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
        />
      </>
    );
  }}
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
    paddingVertical: 25,
    borderTopWidth: 1,
    borderTopColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
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
