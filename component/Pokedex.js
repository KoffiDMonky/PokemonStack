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

// const PKM = [
//   {
//     id: 1,
//     nom: 'Bulbizarre',
//     type1: 'Plante',
//     type2: 'Poison',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 2,
//     nom: 'Herbizarre',
//     type1: 'Plante',
//     type2: 'Poison',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 3,
//     nom: 'Florizarre',
//     type1: 'Plante',
//     type2: 'Poison',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 4,
//     nom: 'Carapuce',
//     type1: 'Eau',
//     type2: ' ',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 5,
//     nom: 'Carabaffe',
//     type1: 'Eau',
//     type2: ' ',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 6,
//     nom: 'Tortank',
//     type1: 'Eau',
//     type2: ' ',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 7,
//     nom: 'Salameche',
//     type1: 'Feu',
//     type2: ' ',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 8,
//     nom: 'Reptincel',
//     type1: 'Feu',
//     type2: ' ',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 9,
//     nom: 'Dracaufeu',
//     type1: 'Feu',
//     type2: 'Vol',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 10,
//     nom: 'Bulbizarre',
//     type1: 'Plante',
//     type2: 'Poison',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 11,
//     nom: 'Herbizarre',
//     type1: 'Plante',
//     type2: 'Poison',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 12,
//     nom: 'Florizarre',
//     type1: 'Plante',
//     type2: 'Poison',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 13,
//     nom: 'Carapuce',
//     type1: 'Eau',
//     type2: '',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 14,
//     nom: 'Carabaffe',
//     type1: 'Eau',
//     type2: '',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 15,
//     nom: 'Tortank',
//     type1: 'Eau',
//     type2: '',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 16,
//     nom: 'Salameche',
//     type1: 'Feu',
//     type2: '',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 17,
//     nom: 'Reptincel',
//     type1: 'Feu',
//     type2: '',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 18,
//     nom: 'Dracaufeu',
//     type1: 'Feu',
//     type2: 'Vol',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 19,
//     nom: 'Bulbizarre',
//     type1: 'Plante',
//     type2: 'Poison',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 20,
//     nom: 'Herbizarre',
//     type1: 'Plante',
//     type2: 'Poison',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 21,
//     nom: 'Florizarre',
//     type1: 'Plante',
//     type2: 'Poison',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 22,
//     nom: 'Carapuce',
//     type1: 'Eau',
//     type2: '',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 23,
//     nom: 'Carabaffe',
//     type1: 'Eau',
//     type2: '',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 24,
//     nom: 'Tortank',
//     type1: 'Eau',
//     type2: '',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 25,
//     nom: 'Salameche',
//     type1: 'Feu',
//     type2: '',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 26,
//     nom: 'Reptincel',
//     type1: 'Feu',
//     type2: '',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 27,
//     nom: 'Dracaufeu',
//     type1: 'Feu',
//     type2: 'Vol',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 28,
//     nom: 'Bulbizarre',
//     type1: 'Plante',
//     type2: 'Poison',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 29,
//     nom: 'Herbizarre',
//     type1: 'Plante',
//     type2: 'Poison',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 30,
//     nom: 'Florizarre',
//     type1: 'Plante',
//     type2: 'Poison',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 31,
//     nom: 'Carapuce',
//     type1: 'Eau',
//     type2: '',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 32,
//     nom: 'Carabaffe',
//     type1: 'Eau',
//     type2: '',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 33,
//     nom: 'Tortank',
//     type1: 'Eau',
//     type2: '',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 34,
//     nom: 'Salameche',
//     type1: 'Feu',
//     type2: '',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 35,
//     nom: 'Reptincel',
//     type1: 'Feu',
//     type2: '',
//     img: require('../assets/Mimiqui.png'),
//   },
//   {
//     id: 36,
//     nom: 'Dracaufeu',
//     type1: 'Feu',
//     type2: 'Vol',
//     img: require('../assets/Mimiqui.png'),
//   },
// ];

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

  function Item({id, nom, img, type}) {
    const typeName = type.name;
    const [typeColor, setTypeColor] = useState('');

    // switch (typeName) {
    //   case 'grass':
    //     setTypeColor('#74CB48');
    //     break;
    //   case 'fire':
    //     setTypeColor('#F57D31');
    //     break;
    //   case 'steel':
    //     setTypeColor('#b8b8d0');
    //     break;
    //   case 'dark':
    //     setTypeColor('#A29288');
    //     break;
    //   case 'ice':
    //     setTypeColor('#96D9D6');
    //     break;
    //   case 'ghost':
    //     setTypeColor('#735797');
    //     break;
    //   case 'rock':
    //     setTypeColor('#B6A136');
    //     break;
    //   case 'fighting':
    //     setTypeColor('#C25956');
    //     break;
    //   case 'flying':
    //     setTypeColor('#A98FF3');
    //     break;
    //   case 'psychic':
    //     setTypeColor('#F95587');
    //     break;
    //   case 'normal':
    //     setTypeColor('#D9D5D8');
    //     break;
    //   case 'bug':
    //     setTypeColor('#B3F594');
    //     break;
    //   case 'poison':
    //     setTypeColor('#966DA3');
    //     break;
    //   case 'fairy':
    //     setTypeColor('#D685AD');
    //     break;
    //   case 'electric':
    //     setTypeColor('#F7D02C');
    //     break;
    //   case 'dragon':
    //     setTypeColor('#6F35FC');
    //     break;
    //   case 'ground':
    //     setTypeColor('#E2BF65');
    //     break;

    //   default:
    //     break;
    // }

    // console.log(typeName);
    // console.log(typeColor);

    const typesColor = {
      "grass": "#74CB48",
      "ground": "#DEC16B",
      "dragon": "#7037FF",
      "fire": "#F57D31",
      "electric": "#F9CF30",
      "fairy": "#E69EAC",
      "poison": "#A43E9E",
      "bug": "#A7B723",
      "water": "#6493EB",
      "normal": "#AAA67F",
      "psychic": "#FB5584",
      "flying": "#7B61FF",
      "fighting": "#D90D43",
      "rock": "#B69E31",
      "ghost": "#70559B",
      "ice": "#9AD6DF",
      "dark": "#75574C",
      "steel": "#B7B9D0",
    };

    const color = typesColor[type.name];


    return (
      <TouchableOpacity
        style={[styles.card, {borderColor: color}]}
        onPress={() => setAffichePokemon(!affichePokemon)}>
        <View style={styles.head}>
          <Text style={styles.num}># {id}</Text>
        </View>
        <View style={styles.body}>
          {/* <Text>{type}</Text> */}
          <Image style={styles.imgList} source={{uri: img}} />
        </View>
        <View style={[styles.buttom, {backgroundColor: color}]}>
          <Text style={styles.title}>{nom}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  if (affichePokemon == true) {
    return (
      <>
        <StatusBar />
        <Button
          style={styles.topButton}
          title="🔙"
          onPress={() => setAffichePokemon(!affichePokemon)}
        />
        <Image style={styles.image} source={require('../assets/Mimiqui.png')} />
        <View style={styles.info}>
          <Text style={{flex: 1}}>ID: 123</Text>
          <Text style={{flex: 1}}>Nom: Mimiqui</Text>
          <Text style={{flex: 1}}>Type: Spectre</Text>
          <Text style={{flex: 5}}>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse dapibus urna elementum enim aliquam imperdiet.
            Morbi condimentum congue orci vehicula sodales. Proin dui lectus,
            placerat ut metus sit amet, tempus hendrerit magna. Nam pretium
            ipsum et turpis ornare, a cursus nunc vulputate. Donec iaculis erat
            sed risus venenatis, nec fermentum arcu fringilla. Nullam rutrum at
            urna vel rhoncus.
          </Text>
          <Text style={{flex: 1}}>Espèce: .....</Text>
          <Text style={{flex: 1}}>Talent: .....</Text>
        </View>
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
