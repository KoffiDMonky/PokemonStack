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

function ModifContact(props) {
  const modifierContact = props.modifierContact;
  const setModifierContact = props.setModifierContact;
  const backgroundColor = props.backgroundColor;
  const arrayContact = props.contact;
  const setUsers = props.setUsers


  console.log(arrayContact);

  const idContact = arrayContact[0];
  const [nom, setNom] = useState(arrayContact[1]);
  const [prenom, setPrenom] = useState(arrayContact[2]);
  const [address, setAddress] = useState(arrayContact[3]);
  const [phone, setPhone] = useState(arrayContact[5]);
  const [email, setEmail] = useState(arrayContact[4]);
  const [avatar, setAvatar] = useState(arrayContact[5]);

  console.log(prenom);

  const onPressUpdateContact = () => {
    dataBase
      .updateContact(idContact, nom, prenom, address, phone, email, avatar)
      .then(async () => {
        const storedUsers = await dataBase.getUsers();
        console.log('store', storedUsers);
        if (storedUsers.length) {
          setUsers(storedUsers);
          setModifierContact(!modifierContact)
        }
      });
  };

  return (
    <View style={[styles.body, {backgroundColor: backgroundColor}]}>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.topTouchable}
          onPress={() => setModifierContact(!modifierContact)}>
          <Icon name="arrow-left" size={20} color={'dark'} />
        </TouchableOpacity>
      </View>
      <View style={styles.image}>
        <Image
          style={styles.pic}
          source={require('../assets/Red_profile.webp')}
        />
      </View>
      <ScrollView style={styles.info}>
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
            onPress={() => onPressUpdateContact()}>
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
    height: 20,
    width: 20,
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
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 20,
    color: '#D90D43',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  info: {
    height: '70%',
    backgroundColor: '#F6F6F6',
    marginBottom: 8,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    zIndex: 2,
    color: 'black',
    padding: 15,
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
    width: '40%',
    backgroundColor: 'yellow',
  },
});

export default ModifContact;
