import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import * as dataBase from '../db/db-service';
import Icon from 'react-native-vector-icons/FontAwesome';
import LaunchCall from './LaunchCall';
import ModifContact from './ModifContact';

function CarteMainUser(props) {
  const modifierContact = props.modifierContact;
  const setModifierContact = props.setModifierContact;
  const afficheQrCode = props.afficheQrCode;
  const setAfficheQrCode = props.setAfficheQrCode;
  const user = props.user;
  // const objetUser = true;
  const objetUser = user[0];


  //Méthode permettant d'ajouter un utilisateur en base de donnée
  const onPressAddUser = () => {
    dataBase.createTable();
    dataBase
      .addContact(
        'Hallyday',
        'Johnny',
        'test',
        '0606060606',
        'test@test.com',
        '',
        '1',
      )
      .then(async () => {
        const mainUser = await dataBase.getMainUser();
        if (mainUser) {
          setUser(mainUser);
          //   setAjouterContact(!ajouterContact);
        }
      });
  };


  if (objetUser) {
    return (
      <View style={styles.body}>
        <View style={styles.image}>
          <Image
            style={styles.pic}
            source={require('../assets/Red_profile.webp')}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.titre}>
            {objetUser.first_name} {objetUser.name}
          </Text>
          <View style={styles.detail}>
            <View style={styles.option}>
              <LaunchCall phone={objetUser.phone_number} />

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
    return (
      <View
        style={[styles.body, {alignItems: 'center', justifyContent: 'center'}]}>
        <Text style={styles.titreText}>
          Veuillez renseigner vos coordonnées !
        </Text>
        <TouchableOpacity
          style={styles.add}
          onPress={() => onPressUpdateContact()}>
          <Icon name="plus" size={25} color="#000000" />
          <Text style={styles.titreText}> Ajouter</Text>
        </TouchableOpacity>
      </View>
    );
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
    width: '100%',
    resizeMode: 'contain',
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
    zIndex: 5
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
