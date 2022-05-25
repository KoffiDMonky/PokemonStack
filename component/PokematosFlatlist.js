import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ItemContact from './itemContact';

function PokematosFlatlist(props) { //Composant enfant de Pokematos qui permet de constituer la liste de contact
  const users = props.users;
  const setSelectedId = props.setSelectedId;
  const setAfficheContact = props.setAfficheContact;
  const afficheContact = props.afficheContact;

  return (
    <View style={styles.background}>
      <View>
        <FlatList
          numColumns={2}
          data={users}
          renderItem={({item, index}) => (
            <ItemContact
              rowId={index}
              id={item.id}
              nom={item.name}
              prenom={item.first_name}
              img={item.avatar}
              setSelectedId={setSelectedId}
              afficheContact={afficheContact}
              setAfficheContact={setAfficheContact}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F7F7F7',
  },
});

export default PokematosFlatlist;
