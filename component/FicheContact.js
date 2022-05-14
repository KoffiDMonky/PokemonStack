import {Image, Text, View, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import ModifContact from './ModifContact';

function FicheContact(props) {
  const [modifierContact, setModifierContact] = useState(false);
  const afficheContact = props.afficheContact;
  const setAfficheContact = props.setAfficheContact;

  if (modifierContact == false) {
    return (
      <>
        <View style={styles.topButton}>
          <Button
            title="🔙"
            onPress={() => setAfficheContact(!afficheContact)}
          />
          <Button
            title="Modifier contact"
            onPress={() => setModifierContact(!modifierContact)}
          />
        </View>
        <View style={styles.contact}>
          <Image
            style={styles.image}
            source={require('../assets/Red_profile.webp')}
          />
          <View style={styles.info}>
            <Text style={{flex: 1}}>Prénom: Annaeg</Text>
            <Text style={{flex: 1}}>Nom: Lelièvre</Text>
            <Text style={{flex: 1}}>Téléphone: 0642060906</Text>
            <Text style={{flex: 1}}>Email: annaeg@hotmail.fr</Text>
            <Text style={{flex: 1}}>Adresse: 19 La Ruaudaie</Text>
          </View>
        </View>
        <Button title="📞" />
      </>
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
  }
}

const styles = StyleSheet.create({
  topButton: {
    flexDirection: 'row',
  },

  contact: {
    flexDirection: 'row',
    flex: 9,
  },

  image: {
    flex: 4,
  },

  info: {
    flexDirection: 'column',
    flex: 6,
  },
});

export default FicheContact;
