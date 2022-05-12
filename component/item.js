import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

function Item(props) {

  const affichePokemon = props.affichePokemon;
  const setAffichePokemon = props.setAffichePokemon;
  const setSelectedId = props.setSelectedId;

  const id = props.id;
  const nom = props.nom;
  const img = props.img;
  const type = props.type;
  const typeName = type.name;
  const [typeColor, setTypeColor] = useState('');

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

  const color = typesColor[type.name];



//   const showSpecificPokemon = () => {
//     setAffichePokemon(!affichePokemon)
//     // setSelectedId(id);
// }

  return (
    <TouchableOpacity
      style={[styles.card, {borderColor: color}]}
      onPress={() => {setSelectedId(id); setAffichePokemon(!affichePokemon)} }>
      <View style={styles.head}>
        <Text style={[styles.num, {color: color}]}>#{id}</Text>
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

const styles = StyleSheet.create({
  flatlist: {},
  //LISTE CARTE POKEMON
  card: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    color: '#20232a',
    margin: 5,
    height: 170,
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
    fontSize: 20
  },
  imgList: {
    height: '95%',
    width: '95%',
    resizeMode: 'contain',
    //alignSelf: "center",
  },
});

export default Item;
