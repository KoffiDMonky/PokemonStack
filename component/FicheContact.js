import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

function FicheContact(props) {
  const contact = props.contact;
    const nom = props.nom;
  const prenom = props.prenom;
  const adresse = props.adresse;
  const mail = props.mail;
  const phone = props.phone;
  const afficheContact = props.afficheContact;
  const setAfficheContact = props.setAfficheContact;
  

  return (
    <View style={[styles.body, {backgroundColor: 'red'}]}>
      <StatusBar />
      <View style={styles.top}>
        <TouchableOpacity onPress={() => setAfficheContact(!afficheContact)}>
          <Text style={styles.name}>←{contact.name}</Text>
        </TouchableOpacity>
        <Text style={styles.id}>#{contact.id}</Text>
      </View>
      <View style={styles.image}>
        <Image style={styles.pic} source={require('../assets/Red_profile.webp')} />
      </View>
      <View style={styles.info}>
        <View style={styles.type}>
          <Text style={[styles.typeColor, {backgroundColor: 'red'}]}>
            TEST
          </Text>
        </View>
        <View>
          <Text style={{color: 'black'}}>
            Nom : {contact.name}
          </Text>
          <Text style={{color: 'black'}}>
            Prenom : {contact.prenom}
          </Text>
          <Text style={{color: 'black'}}>
            Telephone : {contact.phone}
          </Text>
          <Text style={{color: 'black'}}>
            Email : {contact.mail}
          </Text>
          <Text style={{color: 'black'}}>
            Adresse postal : {contact.adresse}
          </Text>
        </View>
        {/* <View style={styles.propos}>
          <Text style={[styles.titre, {color: 'red'}]}>A propos</Text>
          <View style={styles.caracteristique}>
            <View style={styles.details}>
              <Text style={styles.darkTitle}>Nom</Text>
              <Text style={styles.darkText}> {contact.name}</Text>
            </View>
            <View style={styles.detailsMiddle}>
              <Text style={styles.darkTitle}>Prenom</Text>
              <Text style={styles.darkText}> {contact.name}</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.darkTitle}>Abilités</Text>
            </View>
          </View>
          <Text style={styles.description}>{pokemon.description}</Text>
        </View> */}
        {/* <View style={styles.stats}>
          <Text style={[styles.titre, {color: 'red'}]}>Statistiques</Text>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //FICHE POKEMON
  body: {
    height: '100%',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
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
    resizeMode: 'contain'
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
    padding: 15
  },
  type: {
    flex: 0.5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeColor: {
    padding: 5,
    borderRadius: 99,
    width: 80,
    textAlign: 'center',
    lineHeight: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  propos: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titre: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 8,
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
    borderLeftWidth: 2,
    borderRightWidth: 2,
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
