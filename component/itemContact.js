import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

function ItemContact(props) { //Composant permettant de définir les items de la liste de contact

  const afficheContact = props.afficheContact;
  const setAfficheContact = props.setAfficheContact;
  const setSelectedId = props.setSelectedId;
  const rowId = props.rowId;
  const nom = props.nom;
  const prenom = props.prenom;
  const avatar = props.avatar;
  const uriAvatar = JSON.parse(avatar)


  return ( //Définition de l'itemContact
    <TouchableOpacity
      style={[styles.card, {borderColor: 'black'}]}
      onPress={() => {
        setSelectedId(rowId);
        setAfficheContact(!afficheContact);
      }}>
      <View style={styles.body}>
        <Image
          style={styles.imgList}
          source={uriAvatar}
        />
      </View>
      <View style={[styles.buttom, {backgroundColor: 'black'}]}>
        <Text style={styles.title}>
          {prenom} {nom}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
  },
  card: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    color: '#20232a',
    margin: 5,
    height: 170,
    borderWidth: 2,
    borderRadius: 15
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
    fontSize: 18,
    color: 'white',
    borderColor: 'black',
    textAlign: 'center',
  },

  num: {
    fontSize: 20,
  },
  imgList: {
    height: '100%',
    width: '100%',
    backgroundColor: 'yellow',
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
  },
});

export default ItemContact;
