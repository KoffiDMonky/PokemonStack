import {
  Image,
  Text,
  View,
  SectionList,
  StyleSheet,
  Button,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
//import FicheContact from "./FicheContact";

var contact = [
  {title: 'A', data: ['Annaeg', 'Agénor', 'Antoine']},
  {title: 'B', data: ['Benoit']},
  {title: 'D', data: ['David']},
  {title: 'E', data: ['Etienne']},
  {title: 'G', data: ["Gwenc'hlan"]}, //ATTENTION POUR LA DB METTRE DES " ... " et pas des ' ... '
  {title: 'R', data: ['Ronan']},
  {title: 'V', data: ['Vanessa']},
  {title: 'T', data: ['Test']},
  {title: 'T', data: ['Test']},
  {title: 'T', data: ['Test']},
  {title: 'T', data: ['Test']},
  {title: 'T', data: ['Test']},
  {title: 'T', data: ['Test']},
  {title: 'T', data: ['Test']},
  {title: 'T', data: ['Test']},
  {title: 'T', data: ['Test']},
  {title: 'T', data: ['Test']},
];

function Pokematos() {
  const [afficheContact, setAfficheContact] = useState(false);
  const [modifierContact, setModifierContact] = useState(false);
  const [testPrenom, setTestPrenom] = useState('');
  const [testNom, setTestNom] = useState('test');

  function Item({title}) {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => setAfficheContact(!afficheContact)}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
  if (afficheContact == true) {
    if (modifierContact == false) {
      return (
        <>
          <StatusBar />
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
              <Text style={{flex: 1}}>Adresse: 19 La Ruaudaie St-Nicolas-du-Tertre</Text>
            </View>
          </View>
          <Button title="📞" />
        </>
        //<FicheContact/>
      );
    } else {
      return (
        <>
          <Text style={{fontSize: 30}}>Modifier contact</Text>
          <View style={styles.contact}>
            <View>
            <Image
              style={styles.image}
              source={require('../assets/Red_profile.webp')}
            />
            <Button title='Charger image' />
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
  } else {
    return (
      <View style={styles.container}>
        <StatusBar />
        <SectionList
          sections={contact}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Item title={item} />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: '#333333',
  },

  header: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'black',
  },

  topButton: {
    flexDirection: 'row',
  },

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

  pkmPref: {
    flexDirection: 'row',
    flex: 1,
  },

  prefImg: {
    width: 30,
    height: 50,
  },
});

export default Pokematos;
