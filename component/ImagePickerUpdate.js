import React, {useState} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

function ImagePickerUpdate(props) {
  const [avatar, setAvatar] = useState();
  const currentAvatar = props.currentAvatar;
  const loadImage = props.loadImage;

  const launchImage = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {

      console.log('response', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Erreur ImagePicker: ', response.error);
      } else {
        console.log('response imagePicker', JSON.stringify(response.assets[0].uri))
        const uri = { uri : response.assets[0].uri};
        const source = JSON.stringify(uri)
        console.log('source imagePicker', source);
        setAvatar(uri);
        loadImage(source);
      }
    });
  };

  return (
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
