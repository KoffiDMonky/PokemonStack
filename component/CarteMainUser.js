import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import CreerUser from './CreerUser';

function CarteMainUser(props) { //Sous composant de CarteDresseur, permettant d'ajouter les informations de l'utilisateur et de les afficher

  const modifierContact = props.modifierContact;
  const setModifierContact = props.setModifierContact;
  const afficheQrCode = props.afficheQrCode;
  const setAfficheQrCode = props.setAfficheQrCode;
  const user = props.user;
  const setUser = props.setUser;
  const objetUser = user[0];
  const [ajouterUser, setAjouterUser] = useState(false);

    
  

 


  //Méthode pour passer stateCreateUser en props au composant ajouterUser
  const stateCreateUser = value => {
    setAjouterUser(value);
  };

  if (objetUser.avatar) { //Si nous avons un objet contenant les informations de notre utilisateur, on les affiche

    const uriAvatar = JSON.parse(objetUser.avatar)
        
    return (
      <View style={styles.body}>
        <View style={styles.image}>
          <Image
            style={styles.pic}
            source={uriAvatar}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.titre}>
            {objetUser.first_name} {objetUser.name}
          </Text>
          <View style={styles.detail}>
            <View style={styles.option}>
              <TouchableOpacity
                style={styles.optionTouchable}
                onPress={() => setModifierContact(!modifierContact)}>
                <Icon name="pencil" size={35} color="#000000" />
                <Text style={styles.textTouchable}>Modifier</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionTouchable}
                onPress={() => setAfficheQrCode(!afficheQrCode)}>
                <Icon name="share" size={35} color="#000000" />
                <Text style={styles.textTouchable}>Partager</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.coordonnees}>
              <Text style={{color: 'black', fontSize: 15}}>
                Telephone : {objetUser.phone_number}
              </Text>
            </View>
            <View style={styles.coordonnees}>
              <Text style={{color: 'black', fontSize: 15}}>
                Email : {user[0].mail}
              </Text>
            </View>
            <View style={styles.coordonnees}>
              <Text style={{color: 'black', fontSize: 15}}>
                Adresse : {objetUser.adress}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  } else {
    if (ajouterUser) { //Si l'on appuye sur le bouton "+ ajouter , on affiche le composant de création de l'utilisateur

      return <CreerUser ajouterUser={ajouterUser} setAjouterUser={stateCreateUser} setUser={setUser} />;

    } else { //Sinon on affiche la page d'accueil lors de la première connexion qui invite à créer son profil utilisateur
      return (
        <View
          style={[
            styles.body,
            {alignItems: 'center', justifyContent: 'center'},
          ]}>
          <Text style={styles.titreText}>
            Veuillez renseigner vos coordonnées !
          </Text>
          <TouchableOpacity
            style={styles.add}
            onPress={() => setAjouterUser(true)}>
            <Icon name="plus" size={25} color="#000000" />
            <Text style={styles.titreText}> Ajouter</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#F9CF30',
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
  titreText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#00000070',
  },
  detail: {
    flex: 8,
    alignItems: 'center',
  },
  pic: {
    height: '100%',
    width: '50%',
    backgroundColor: '#F6F6F6',
    borderRadius: 99,
    marginBottom: 30,
    top: 50,
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
  textTouchable: {
    color: 'black',
    fontSize: 15,
    marginTop: 5,
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
  add: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: '#D90D43',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default CarteMainUser;
