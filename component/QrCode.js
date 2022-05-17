import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

function QrCode(props) {
  const afficheQrCode = props.afficheQrCode;
  const setAfficheQrCode = props.setAfficheQrCode;

  let profil = 'https://google.com';

  return (
    <View style={styles.body}>
      <View style={styles.titre}>
        <Text style={styles.titreText}>GOTTA FLASH THEM ALL !</Text>
      </View>
      <View style={styles.qrcode}>
        <QRCode
          value={profil}
          size={350}
          color="black"
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
    color: '#00000070'
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
