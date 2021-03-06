import React from 'react';
import {
  PermissionsAndroid,
  TouchableOpacity,
  NativeModules,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {CallModule} = NativeModules;

function LaunchCall({phone}) { //Composant permettant d'utiliser la fonctionnalité native appel du téléphone
  const requestCallPermission = async () => {
    if (Platform.OS === 'android') { //Vérifie si l'appareil à un OS Android
      try {
        const granted = await PermissionsAndroid.request(
          //Demande la permission pour que l'appli ait accès à la fonction native Appel
          PermissionsAndroid.PERMISSIONS.CALL_PHONE,
          {
            title: 'Phone call Permission',
            message: 'App needs phone call permission',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
  };
  
  const call = async () => {
    if (await requestCallPermission()) {
      CallModule.call(phone); //Lance le module CallModule qui lancera l'appel
    }
  };

  return (

    <TouchableOpacity style={styles.optionTouchable} onPress={() => call()}>
      <Icon name="phone" size={40} color="#000000" />
      <Text style={{color: 'black', fontSize: 15}}>Appel</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  optionTouchable: {
    alignItems: 'center',
    width: 90
  }
})

export default LaunchCall;
