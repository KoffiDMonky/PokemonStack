import {
  Text,
  View,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import FicheContact from './FicheContact';

var contact = [
  {title: 'A', data: ['Annaeg', 'Agénor', 'Antoine']},
  {title: 'B', data: ['Benoit']},
  {title: 'D', data: ['David']},
  {title: 'E', data: ['Etienne']},
  {title: 'G', data: ["Gwenc'hlan"]}, //ATTENTION POUR LA DB METTRE DES " ... " et pas des ' ... '
  {title: 'R', data: ['Ronan']},
  {title: 'V', data: ['Vanessa']},
  {
    title: 'T',
    data: [
      'Test',
      'Test',
      'Test',
      'Test',
      'Test',
      'Test',
      'Test',
      'Test',
      'Test',
    ],
  },
  {
    title: '?',
    data: [
      '?Test',
      '?Test',
      '?Test',
      '?Test',
      '?Test',
      '?Test',
      '?Test',
      '?Test',
      '?Test',
      '?Test',
      '?Test',
    ],
  },
];

function Pokematos() {
  const [afficheContact, setAfficheContact] = useState(false);

  function Item({title}) {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => setAfficheContact(!afficheContact)}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }

  if (afficheContact) {
    return (
      <FicheContact
        afficheContact={afficheContact}
        setAfficheContact={setAfficheContact}
      />
    );
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
});

export default Pokematos;
