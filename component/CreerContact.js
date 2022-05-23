import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import * as dataBase from '../db/db-service';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

function CreerContact(props) {
  const ajouterContact = props.ajouterContact;
  const setAjouterContact = props.setAjouterContact;
  const backgroundColor = props.backgroundColor;
  const setUsers = props.setUsers;

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');


  //Méthode permettant d'ajouter un utilisateur en base de donnée
  const onPressAddUser = () => {
    dataBase.createTable();
    dataBase
      .addContact(
        nom,
        prenom,
        address,
        phone,
        email,
        '',
        '0',
      )
      .then(async () => {
        const storedUsers = await dataBase.getUsers();
        if (storedUsers.length) {
          setUsers(storedUsers);
          setAjouterContact(!ajouterContact);
        }
      });
  };


  return (
    <View style={[styles.body, {backgroundColor: backgroundColor}]}>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.topTouchable}
          onPress={() => setAjouterContact(!ajouterContact)}>
          <Icon name="arrow-left" size={20} color={'#000000'} />
        </TouchableOpacity>
      </View>
      <View style={styles.image}>
        <Image
          style={styles.pic}
          source={require('../assets/Red_profile.webp')}
        />
      </View>
      <ScrollView style={styles.infoScrollView}>
        <View style={styles.info}>
          <Text style={styles.titre}>Modifications</Text>
          <View style={styles.ligne}>
            <Text style={styles.label}>Nom: </Text>
            <TextInput
              style={styles.input}
              placeholder="Ketchum"
              onChangeText={setNom}
              value={nom}
            />
          </View>
          <View style={styles.ligne}>
            <Text style={styles.label}>Prénom: </Text>
            <TextInput
              style={styles.input}
              placeholder="Sacha"
              onChangeText={setPrenom}
              value={prenom}
            />
          </View>
          <View style={styles.ligne}>
            <Text style={styles.label}>Téléphone: </Text>
            <TextInput
              style={styles.input}
              placeholder="0123456789"
              onChangeText={setPhone}
              value={phone}
            />
          </View>
          <View style={styles.ligne}>
            <Text style={styles.label}>Email: </Text>
            <TextInput
              style={styles.input}
              placeholder="sacha.ktcm@kanto.com"
              onChangeText={setEmail}
              value={email}
            />
          </View>
          <View style={styles.ligne}>
            <Text style={styles.label}>Adresse: </Text>
            <TextInput
              style={styles.input}
              placeholder="10 rue du Chen Bourg Palette"
              onChangeText={setAddress}
              value={address}
            />
          </View>
          <TouchableOpacity
            style={styles.save}
            onPress={() => onPressAddUser()}>
            <Text style={styles.titreText}>Sauvegarder</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  topTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    width: 30,
  },
  label: {
    backgroundColor: '#F6F6F6',
    color: 'black',
    fontSize: 15,
    left: 10,
    top: 10,
    zIndex: 100,
    paddingLeft: 5,
  },
  input: {
    color: 'black',
    fontSize: 15,
    borderColor: '#00000080',
    borderWidth: 2,
    borderRadius: 8,
    height: 55,
    width: 300,
    padding: 10,
  },
  titre: {
    flex: 1,
    width: '100%',
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 10,
    color: '#D90D43',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  infoScrollView: {
    height: '75%',
    backgroundColor: '#F6F6F6',
    marginBottom: 8,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    zIndex: 2,
    color: 'black',
    padding: 5,
  },
  info: {
    height: '75%',
    backgroundColor: '#F6F6F6',
    marginBottom: 8,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    zIndex: 2,
    color: 'black',
    padding: 15,
    alignItems: 'center'
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
  save: {
    marginTop: 10,
    alignItems: 'center',
  },
  titreText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#00000070',
    width: 230,
    height: 40
  },
});

export default CreerContact;
