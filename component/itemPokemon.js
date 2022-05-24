import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

function ItemPokemon(props) {
  //Composant permettant de définir les items de la liste des pokémons

  const affichePokemon = props.affichePokemon;
  const setAffichePokemon = props.setAffichePokemon;
  const setSelectedId = props.setSelectedId;

  const id = props.id;
  const nom = props.nom;
  const img = props.img;
  const type = props.type;

  //Permet d'associer un type de pokémon à un code hexadécimal pour afficher dynamiquement les couleurs
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

  //Définition dynamique de la couleurs en fonction du type
  const color = typesColor[type.name];

  return (
    //Affichage de l'item
    <TouchableOpacity
      style={[styles.card, {borderColor: color}]}
      onPress={() => {
        setSelectedId(id);
        setAffichePokemon(!affichePokemon);
      }}>
      <View style={styles.head}>
        <Text style={[styles.num, {color: color}]}>#{id}</Text>
      </View>
      <View style={styles.body}>
        <Image style={styles.imgList} source={{uri: img}} />
      </View>
      <View style={[styles.buttom, {backgroundColor: color}]}>
        <Text style={styles.title}>{nom}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    color: '#20232a',
    margin: 5,
    height: 170,
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
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttom: {
    flex: 1.5,
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
  },
  imgList: {
    height: '95%',
    width: '95%',
    resizeMode: 'contain',
  },
});

export default ItemPokemon;
