import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

function FichePokemon(props) {
  const pokemon = props.pokemon;
  const affichePokemon = props.affichePokemon;
  const setAffichePokemon = props.setAffichePokemon;

  const typesColor = {
    grass: '#74CB48',
    ground: '#DEC16B',
    dragon: '#7037FF',
    fire: '#F57D31',
    electric: '#F9CF30',
    fairy: '#E69EAC',
    poison: '#A43E9E',
    bug: '#A7B723',
    water: '#6493EB',
    normal: '#AAA67F',
    psychic: '#FB5584',
    flying: '#7B61FF',
    fighting: '#D90D43',
    rock: '#B69E31',
    ghost: '#70559B',
    ice: '#9AD6DF',
    dark: '#75574C',
    steel: '#B7B9D0',
  };

  const aliasStat = {
    hp: 'HP',
    attack: 'ATK',
    defense: 'DEF',
    'special-attack': 'SATK',
    'special-defense': 'SDEF',
    speed: 'SPD',
  };

  const color = typesColor[pokemon.types.name];

  const abilities = pokemon.abilities;
  const abilitiesList = abilities.map((ability, index) => (
    <Text key={index} style={styles.darkText}>
      {ability.ability.name}
    </Text>
  ));

  const stats = pokemon.stats;
  const statsList = stats.map((stat, index) => (
    <View
      key={index}
      style={{width: '95%', flexDirection: 'row', justifyContent: 'center'}}>
      <View style={{flex: 1, borderRightColor: 'black', borderRightWidth: 2, paddingRight: 10}}>
        <Text style={[styles.darkText, {textAlign: 'right'}]}>{aliasStat[stat.stat.name]}</Text>
      </View>
      <View style={{flex: 4, paddingLeft: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={[styles.darkText, {flex: 1}]}>{stat.base_stat}</Text>
        <View style={{flex: 5}}>
          <View
            style={{
              backgroundColor: `${color}50`,
              width: '100%',
              height: 8,
              borderRadius: 99,
            }}>
            <View
              style={{
                backgroundColor: color,
                width: stat.base_stat,
                height: 8,
                borderRadius: 99,
              }}></View>
          </View>
        </View>
      </View>
    </View>
  ));

  return (
    <View style={[styles.body, {backgroundColor: color}]}>
      <StatusBar />
      <View style={styles.top}>
        <TouchableOpacity onPress={() => setAffichePokemon(!affichePokemon)}>
          <Text style={styles.name}>←{pokemon.name}</Text>
        </TouchableOpacity>
        <Text style={styles.id}>#{pokemon.id}</Text>
      </View>
      <View style={styles.image}>
        <Image style={styles.pic} source={{uri: pokemon.pic}} />
      </View>
      <View style={styles.info}>
        <View style={styles.type}>
          <Text style={[styles.typeColor, {backgroundColor: color}]}>
            {pokemon.types.name}
          </Text>
        </View>
        <View style={styles.propos}>
          <Text style={[styles.titre, {color: color}]}>A propos</Text>
          <View style={styles.caracteristique}>
            <View style={styles.details}>
              <Text style={styles.darkTitle}>Poids</Text>
              <Text style={styles.darkText}> {pokemon.weight} kg</Text>
            </View>
            <View style={styles.detailsMiddle}>
              <Text style={styles.darkTitle}>Taille</Text>
              <Text style={styles.darkText}> {pokemon.height} m</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.darkTitle}>Abilités</Text>
              {abilitiesList}
            </View>
          </View>
          <Text style={styles.description}>{pokemon.description}</Text>
        </View>
        <View style={styles.stats}>
          <Text style={[styles.titre, {color: color}]}>Statistiques</Text>

          {statsList}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //FICHE POKEMON
  body: {
    height: '100%',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  id: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    flex: 3,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  pic: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    // backgroundColor: 'blue',
    // top: 30,
  },
  info: {
    flex: 6,
    backgroundColor: '#F6F6F6',
    marginBottom: 8,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    zIndex: 2,
    color: 'black',
    alignItems: 'center',
    padding: 15,
    //   flexDirection: 'column',
    //   paddingLeft: 10,
  },
  type: {
    flex: 0.5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeColor: {
    padding: 5,
    borderRadius: 99,
    width: 80,
    textAlign: 'center',
    lineHeight: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  propos: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titre: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 8,
  },
  caracteristique: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    padding: 5,
  },
  details: {
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsMiddle: {
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 2,
    borderRightWidth: 2,
  },
  description: {
    width: '85%',
    textAlign: 'center',
    padding: 5,
    color: '#212121',
  },
  stats: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkText: {
    color: '#212121',
  },
  darkTitle: {
    color: '#212121',
    fontWeight: 'bold',
  },
});

export default FichePokemon;
