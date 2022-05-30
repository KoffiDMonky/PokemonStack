import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

function ImagePickerUpdate(props) { //Composant permettant de charger une photo à partir de la galerie du téléphone
  const [avatar, setAvatar] = useState(); //Variable d'état permettant de récupérer l'URI de l'image de la galerie

  //Props récupérer du composant parent
  const currentAvatar = props.currentAvatar;
  const loadImage = props.loadImage;

  const launchImage = () => { //Méthode qui donne accès à la galerie du téléphone et récupère l'uri d'une image séléctionnée
    
    let options = { //Définition des options passé en paramètre dans la méthode launchImageLibrary
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => { //Méthode de la dépendance react-native-image-picker 

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Erreur ImagePicker: ', response.error);
      } else {

        //Définition de l'uri de l'image
        const uri = { uri : response.assets[0].uri};
        const source = JSON.stringify(uri)

        setAvatar(uri);
        loadImage(source);
      }
    });
  };



  return ( //Affiche du composant donnant accès à la galerie
    <TouchableOpacity style={styles.image} onPress={launchImage}>
      {avatar ? <Image style={styles.pic} source={avatar} />
        : <Image style={styles.pic} source={currentAvatar} />}
      <Icon style={styles.plus} name="plus" size={30} color={'#000000'} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 15,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
    margin: 10,
  },
  pic: {
    height: '100%',
    width: '30%',
    backgroundColor: '#F6F6F6',
    borderRadius: 99,
  },
  plus: {
    position: 'relative',
    top: -30,
    right: -40,
  },
});

export default ImagePickerUpdate;
