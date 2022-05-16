import {Image, Text, View, StyleSheet, Button, TextInput} from 'react-native';

import React, {useState} from 'react';

function ModifContact(props) {
  const [testPrenom, setTestPrenom] = useState('');
  const [testNom, setTestNom] = useState('test');
  const modifierContact = props.modifierContact;
  const setModifierContact = props.setModifierContact;

  return (
    <>
      <Text style={{fontSize: 30}}>Modifier contact</Text>
      <View style={styles.contact}>
        <View>
          <Image
            style={styles.image}
            source={require('../assets/Red_profile.webp')}
          />
          <Button title="Charger image" />
        </View>
        <View style={styles.info}>
          <View style={styles.ligne}>
            <Text>Prénom: </Text>
            <TextInput
              placeholder="Sacha"
              onChangeText={setTestPrenom}
              value={testPrenom}
            />
          </View>
          <View style={styles.ligne}>
            <Text>Nom: </Text>
            <TextInput
              placeholder="Ketchum"
              onChangeText={setTestNom}
              value={testNom}
            />
          </View>
          <View style={styles.ligne}>
            <Text>Téléphone: </Text>
            <TextInput placeholder="0123456789" onChangeText="" value="" />
          </View>
          <View style={styles.ligne}>
            <Text>Email: </Text>
            <TextInput
              placeholder="sacha.ktcm@kanto.com"
              onChangeText=""
              value=""
            />
          </View>
          <View style={styles.ligne}>
            <Text>Adresse: </Text>
            <TextInput
              placeholder="10 rue du Chen Bourg Palette"
              onChangeText=""
              value=""
            />
          </View>
        </View>
      </View>
      <Button title="Sauvegarder" />
      <Button
        title="Annuer"
        onPress={() => setModifierContact(!modifierContact)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  contact: {
    flexDirection: 'row',
    flex: 9,
  },

  ligne: {
    flex: 1,
    flexDirection: 'row',
  },

  image: {
    flex: 4,
  },

  info: {
    flexDirection: 'column',
    flex: 6,
  },
});

export default ModifContact;
