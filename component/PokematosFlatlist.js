import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ItemUser from './itemUser';

function PokematosFlatlist(props) {
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
          renderItem={({item}) => (
            <ItemUser
              id={item.id}
              nom={item.name}
              prenom={item.first_Name}
              img={item.avatar}
              adresse={item.adress}
              mail={item.mail}
              phone={item.phone_number}
              setSelectedId={setSelectedId}
              afficheContact={afficheContact}
              setAfficheContact={setAfficheContact}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F7F7F7',
  }
});

export default PokematosFlatlist;
