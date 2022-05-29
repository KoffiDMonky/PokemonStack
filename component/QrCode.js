import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

function QrCode(props) {
  //Composant permettant de générer un QRCode pour partager ses coordonnées
  const user = props.user;
  const afficheQrCode = props.afficheQrCode;
  const setAfficheQrCode = props.setAfficheQrCode;

  const objUser = user[0];

  let profil = 'https://google.com';

  //passe mainUser à 0 pour qu'il soit enregistrer en tant que contact
  //et ne pas faire de conflit avec la carte de dresseur
  if (objUser.mainUser == 1 || objUser.id != null) {
    objUser.mainUser = 0;
    objUser.id = null;
  }

  console.log('1: ' + objUser);
  let strUser = JSON.stringify(objUser);
  console.log('2: ' + strUser);
  const reObjUser = JSON.parse(strUser);
  console.log('3: ' + reObjUser.name);

  return (
    <View style={styles.body}>
      <View style={styles.titre}>
        <Text style={styles.titreText}>GOTTA FLASH THEM ALL !</Text>
      </View>
      <View style={styles.qrcode}>
        <QRCode
          value={strUser}
          size={350}
          color="red"
          logo={require('../assets/logo_qrcode_ball.jpg')} // Enlever le fond du logo
          logoSize={90}
          logoMargin={2}
          logoBorderRadius={15}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setAfficheQrCode(!afficheQrCode)}>
        <Text style={styles.titreText}>Retour</Text>
      </TouchableOpacity>
    </View>
  );
}

export default QrCode;

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#F6F6F6',
  },
  titre: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titreText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#00000070',
    width: '40%',
  },
  qrcode: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
