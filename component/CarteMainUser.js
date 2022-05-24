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

function CarteMainUser(props) {
  const modifierContact = props.modifierContact;
  const setModifierContact = props.setModifierContact;
  const afficheQrCode = props.afficheQrCode;
  const setAfficheQrCode = props.setAfficheQrCode;
  const [user, setUser] = useState();

  console.log(user);

    //Méthode permettant d'ajouter un utilisateur en base de donnée
    const onPressAddUser = () => {
        dataBase.createTable();
        dataBase
          .addContact(
            'Houessou',
            'Agenor',
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
    

//   const loadUserCallback = useCallback(async () => {
//     try {
//       const mainUser = await dataBase.getMainUser(); //Appel à la fonction mainUser pour récupérer l'utilisateur de l'appli

//       if (mainUser.length) {
//         //Si nous avons un utilisateur, on le stock dans la variable d'état User
//         console.log(mainUser);
//         // setUser(mainUser);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }, []);

  useEffect(() => {
    // loadUserCallback();
    // onPressAddUser();
  }, [/*loadUserCallback*/]);

  return (
    <View style={styles.body}>
      <StatusBar style="auto" />
      <View style={styles.image}>
        <Image
          style={styles.pic}
          source={require('../assets/Red_profile.webp')}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.titre}>PRENOM NOM</Text>
        <View style={styles.detail}>
          <View style={styles.option}>
            <TouchableOpacity
              style={styles.optionTouchable}
              onPress={() => setAfficheContact(!afficheContact)}>
              <Icon name="phone" size={40} color="#000000" />
              <Text style={styles.textTouchable}>Appel</Text>
            </TouchableOpacity>
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
              Telephone : PHONE
            </Text>
          </View>
          <View style={styles.coordonnees}>
            <Text style={{color: 'black', fontSize: 15}}>Email : MAIL</Text>
          </View>
          <View style={styles.coordonnees}>
            <Text style={{color: 'black', fontSize: 15}}>
              Adresse : ADRESSE
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //FICHE POKEMON
  body: {
    height: '100%',
    backgroundColor: '#F9CF30',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  topName: {
    fontSize: 30,
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
  textTouchable: {
    color: 'black',
    fontSize: 15,
    marginTop: 5,
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

export default CarteMainUser;
