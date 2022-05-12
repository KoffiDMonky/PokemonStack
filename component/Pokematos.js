import {
  Image,
  Text,
  View,
  SectionList,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import FicheContact from './FicheContact';
import Item from './item';
import * as dataBase from '../db/db-service';

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
  const [users, setUsers] = useState();

  // console.log('setUsers', users);
  console.log(users);

  const formatData = () => {
    let userSectionlist = [];
    // users.forEach(user => {

    // });
  };

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
    formatData();
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
        <StatusBar />
        <View style={styles.topButton}>
          <Button
            title="🔙"
            onPress={() => setAfficheContact(!afficheContact)}
          />
          <Button title="Modifier contact" />
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
            <Text style={{flex: 1}}>Date de naissance: 07/05/1998</Text>
            <Text style={{flex: 1}}>Adresse: 19 La Ruaudaie</Text>
            <Text style={{flex: 1}}>Ville: St-Nicolas-du-Tertre</Text>
            <Text style={{flex: 1}}>Pays: France</Text>
            <Text style={{flex: 1}}>ID: 64930464</Text>
            <View style={styles.pkmPref}>
              <Text>Pokémon préféré: Mimikqui</Text>
              <Image
                style={styles.prefImg}
                source={require('../assets/Mimiqui.png')}
              />
            </View>
            <Text style={{flex: 1}}>
              Citation: Connexion Wi-Fi Tous heureux
            </Text>
          </View>
        </View>
        <Button title="📞" />
      </>
      //<FicheContact/>
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <SectionList
          sections={contact}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Item title={item} />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        /> */}
        <View style={styles.topTitle}>
          <Image
            style={styles.logo}
            source={require('../assets/logopokeball.png')}></Image>
          <Text style={styles.nameSection}> Pokematos</Text>
        </View>

        <FlatList
          style={styles.flatlist}
          numColumns={2}
          data={users}
          renderItem={({item}) => (
            <Item
              id={item.id}
              nom={item.name}
              img={item.pic}
              // type={item.types}
              // affichePokemon={affichePokemon}
              // setSelectedId={setSelectedId}
              // setAffichePokemon={setAffichePokemon}
            />
          )}
          keyExtractor={item => item.id}
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
    // backgroundColor: '#333333',
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
