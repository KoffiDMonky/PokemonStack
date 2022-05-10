import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Item from './item';
import FichePokemon from './FichePokemon';

function ListePokemon() {
  let allPokemon = [];
  let tableauFin = [];
  const [affichePokemon, setAffichePokemon] = useState(false);
  const [listePokemon, setListePokemon] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [isLoading, setLoading] = useState(true);

  //Méthode permettant de récupérer la liste des +1000 pokémons
  const getPokemons = async () => {
    try {
      await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => res.json())
        .then(allPoke => {
          allPoke.results.forEach(pokemon => {
            fetchPokemonComplet(pokemon);
          });
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  //Méthode définissant les caractéristiques complète d'un pokemon
  const fetchPokemonComplet = async pokemon => {
    let objPokemonFull = {};
    let url = pokemon.url;
    let nameP = pokemon.name;

    //Récupération des détails d'un pokémon pour la fiche Pokémon: identifiant, image, type, poids, taille, abilités et stats
    await fetch(url)
      .then(res => res.json())
      .then(pokeData => {
        objPokemonFull.id = pokeData.id;
        objPokemonFull.pic = pokeData.sprites.front_default;
        objPokemonFull.types = pokeData.types[0].type;
        objPokemonFull.weight = Math.round(pokeData.weight * 0.1 * 100) / 100;
        objPokemonFull.height = Math.round(pokeData.height * 0.1 * 100) / 100;
        objPokemonFull.abilities = pokeData.abilities;
        objPokemonFull.stats = pokeData.stats;

        //Récupération des détails d'un pokémon pour la fiche Pokémon traduit en français: nom et description
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameP}`)
          .then(res => res.json())
          .then(pokeDataFr => {
            objPokemonFull.name = pokeDataFr.names[4].name;
            objPokemonFull.description =
              pokeDataFr.flavor_text_entries[18].flavor_text;

            allPokemon.push(objPokemonFull);

            if (allPokemon.length === 151) {
              let tableauFin;
              tableauFin = allPokemon.sort((a, b) => {
                return a.id - b.id;
              });

              setListePokemon(tableauFin);
            }
          })
          .catch(function (error) {
            console.log(
              'There has been a problem with your fetch operation: ' +
                error.message,
            );
            throw error;
          });
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        throw error;
      });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  // console.log(listePokemon[selectedId]);

  if (affichePokemon == true) {
    return (
      <>
        <FichePokemon
          pokemon={listePokemon[selectedId - 1]}
          affichePokemon={affichePokemon}
          setAffichePokemon={setAffichePokemon}
        />
      </>
    );
  } else {
    return (
      <View style={styles.background}>
        <StatusBar />
        <View style={styles.topTitle}>
          <Image
            style={styles.logo}
            source={require('../assets/logopokeball.png')}></Image>
          <Text style={styles.nameSection}> Pokestack</Text>
        </View>
        <FlatList
          style={styles.flatlist}
          numColumns={2}
          data={listePokemon}
          renderItem={({item}) => (
            <Item
              id={item.id}
              nom={item.name}
              img={item.pic}
              type={item.types}
              affichePokemon={affichePokemon}
              setSelectedId={setSelectedId}
              setAffichePokemon={setAffichePokemon}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F7F7F7',
  },
  flatlist: {},
  //LISTE CARTE POKEMON
  card: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    color: '#20232a',
    margin: 5,
    height: 200,
    borderWidth: 2,
    borderRadius: 15,
  },
  topTitle: {
    flexDirection: 'row',
    height: '10%',
    alignItems: 'center'
  },
  logo: {
    resizeMode: 'contain',
    height: '80%',
    width: '20%',
    marginLeft: 20
  },

  head: {
    flex: 0.8,
    alignItems: 'flex-end',
    paddingRight: 10,
  },

  body: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  nameSection: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#212121',

  },
  title: {
    fontSize: 20,
    color: 'white',
    borderColor: 'black',
  },

  num: {
    fontSize: 20,
    color: 'black',
  },
  imgList: {
    height: '95%',
    width: '95%',
    resizeMode: 'contain',
  },
});

export default ListePokemon;
