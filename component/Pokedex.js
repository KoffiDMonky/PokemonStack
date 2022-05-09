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

    await fetch(url)
      .then(res => res.json())
      .then(pokeData => {
        objPokemonFull.id = pokeData.id;
        objPokemonFull.pic = pokeData.sprites.front_default;
        objPokemonFull.types = pokeData.types[0].type;
        objPokemonFull.weight = pokeData.weight;
        objPokemonFull.height = pokeData.height;
        objPokemonFull.abilities = pokeData.abilities;
        objPokemonFull.stats = pokeData.stats;

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
            // ADD THIS THROW error
            throw error;
          });
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        // ADD THIS THROW error
        throw error;
      });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  if (affichePokemon == true) {
    return (
      <>
        <FichePokemon
          affichePokemon={affichePokemon}
          setAffichePokemon={setAffichePokemon}
        />
      </>
    );
  } else {
    return (
      <View style={styles.background}>
        <StatusBar />
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
    // borderColor: '#F57D31',
    borderWidth: 2,
    borderRadius: 15,
  },

  head: {
    flex: 0.8,
    alignItems: 'flex-end',
    paddingRight: 10,
  },

  body: {
    flex: 3,
    //position: "absolute",
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttom: {
    flex: 1.5,
    // backgroundColor: '#F57D31',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
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
    //alignSelf: "center",
  },

  //TYPE COLOR

  grass: {
    backgroundColor: '#74CB48',
  },
  fire: {
    backgroundColor: '#F57D31',
  },
  water: {
    backgroundColor: '#6493EB',
  },
  //FICHE POKEMON
  info: {
    flex: 6,
    flexDirection: 'column',
    paddingLeft: 10,
  },

  image: {
    flex: 4,
    alignContent: 'center',
  },

  topButton: {},
});

export default ListePokemon;
