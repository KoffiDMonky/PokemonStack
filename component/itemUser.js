import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

function ItemUser(props) {
  const afficheContact = props.afficheContact;
  const setAfficheContact = props.setAfficheContact;
  const setSelectedId = props.setSelectedId;

  const id = props.id;
  const rowId = props.rowId;
  const nom = props.nom;
  const prenom = props.prenom;

  return (
    <TouchableOpacity
      style={[styles.card, {borderColor: 'black'}]}
      onPress={() => {
        setSelectedId(rowId);
        setAfficheContact(!afficheContact);
      }}>
      <View style={styles.head}>
        {/* <Text style={[styles.num, {color: 'black'}]}>#{id}</Text> */}
      </View>
      <View style={styles.body}>
        <Image
          style={styles.imgList}
          source={require('../assets/Red_profile.webp')}
        />
      </View>
      <View style={[styles.buttom, {backgroundColor: 'black'}]}>
        <Text style={styles.title}>
          {' '}
          {prenom} {nom}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  flatlist: {flex: 1},
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
    fontSize: 18,
    color: 'white',
    borderColor: 'black',
    textAlign: 'center',
  },

  num: {
    fontSize: 20,
  },
  imgList: {
    height: '95%',
    width: '95%',
    resizeMode: 'contain',
    //alignSelf: "center",
  },
});

export default ItemUser;
