import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
  TextInput,
} from 'react-native';

import React, {useState} from 'react';

function ModifContact(props) {
  const [testPrenom, setTestPrenom] = useState('test');
  const [testNom, setTestNom] = useState('test');
  const modifierContact = props.modifierContact;
  const setModifierContact = props.setModifierContact;

  return (
    <View style={styles.body}>
      <View style={styles.image}>
        <Image
          style={styles.pic}
          source={require('../assets/Red_profile.webp')}
        />
      </View>
      <ScrollView style={styles.info}>
        <View style={styles.info}>
        <Text style={styles.titre}>
          Modifications
        </Text>
          <View style={styles.ligne}>
            <Text style={styles.label}>Prénom: </Text>
            <TextInput
              style={styles.input}
              placeholder="Sacha"
              onChangeText={setTestPrenom}
              value={testPrenom}
            />
          </View>
          <View style={styles.ligne}>
            <Text style={styles.label}>Nom: </Text>
            <TextInput
              style={styles.input}
              placeholder="Ketchum"
              onChangeText={setTestNom}
              value={testNom}
            />
          </View>
          <View style={styles.ligne}>
            <Text style={styles.label}>Téléphone: </Text>
            <TextInput
              style={styles.input}
              placeholder="0123456789"
              onChangeText=""
              value=""
            />
          </View>
          <View style={styles.ligne}>
            <Text style={styles.label}>Email: </Text>
            <TextInput
              style={styles.input}
              placeholder="sacha.ktcm@kanto.com"
              onChangeText=""
              value=""
            />
          </View>
          <View style={styles.ligne}>
            <Text style={styles.label}>Adresse: </Text>
            <TextInput
              style={styles.input}
              placeholder="10 rue du Chen Bourg Palette"
              onChangeText=""
              value=""
            />
          </View>
        <Button title="Sauvegarder" />
      <Button
        title="Annuer"
        onPress={() => setModifierContact(!modifierContact)}
      />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  //FICHE POKEMON
  body: {
    height: '100%',
    backgroundColor: '#F9CF30',
  },
  label: {
    backgroundColor: '#F6F6F6',
    color: 'black',
    fontSize: 15,
    left: 10,
    top: 10,
    zIndex: 100,
    paddingLeft: 5
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
    height:'70%',
    backgroundColor: '#F6F6F6',
    marginBottom: 8,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    zIndex: 2,
    color: 'black',
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

export default ModifContact;
