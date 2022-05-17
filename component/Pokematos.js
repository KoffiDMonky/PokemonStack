import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import FicheContact from './FicheContact';
import * as dataBase from '../db/db-service';
import ItemUser from './itemUser';

function Pokematos() {
  const [users, setUsers] = useState();
  const [afficheContact, setAfficheContact] = useState(false);
  const [selectedId, setSelectedId] = useState(); //Variable d'état permettant de définir l'identifiant de l'utilisateur sélectionner pour afficher les bonnes données dans la fiche

  const loadDataCallback = useCallback(async () => {
    try {
      const storedUsers = await dataBase.getUsers();
      // console.log('store', storedUsers);
      if (storedUsers.length) {
        setUsers(storedUsers);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onPressAddUser = () => {
    dataBase
      .addUser('houessou', 'agénor', 'adress', 'phone', 'email', 'avatar')
      .then(async () => {
        const storedUsers = await dataBase.getUsers();
        console.log('store', storedUsers);
        if (storedUsers.length) {
          setUsers(storedUsers);
        }
      });
  };

  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);

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
    return (
      <>
        <FicheContact
          contact={users[selectedId - 1]}
          afficheContact={afficheContact}
          setAfficheContact={setAfficheContact}
        />
      </>
    );
  } else {
    return (
      <View style={styles.background}>
        <View>
          <FlatList
            style={styles.flatlist}
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
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F7F7F7',
  },
  flatlist: {
    zIndex: 1,
    background: 'yellow'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  topTitle: {
    flexDirection: 'row',
    height: '10%',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    height: '80%',
    width: '20%',
    marginLeft: 20,
  },
  nameSection: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#212121',
  },

  header: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    // backgroundColor: 'black',
  },
});

export default Pokematos;
