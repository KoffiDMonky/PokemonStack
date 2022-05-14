import {Text, View, Image, StyleSheet, Button, StatusBar} from 'react-native';
import React, {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';
import ModifContact from './ModifContact';

function IdCard() {
  const [afficheQrCode, setAfficheQrCode] = useState(false);
  const [modifierContact, setModifierContact] = useState(false);

  if (afficheQrCode) {
    return (
      <>
        <StatusBar />
        <View>
          <Text>FLASH THEM ALL</Text>
          <QRCode
            value={'https://pornhub.com'}
            size={250}
            color="black"
            logo={require('../assets/logo_qrcode_ball.jpg')} // ici mettre un logo pokeball
            logoSize={90}
            logoMargin={2}
            logoBorderRadius={15}
          />
        </View>
        <Button title="❌" onPress={() => setAfficheQrCode(!afficheQrCode)} />
        <StatusBar />
      </>
    );
  } else {
    if (modifierContact) {
      return (
        <ModifContact
          modifierContact={modifierContact}
          setModifierContact={setModifierContact}
        />
      );
    } else {
      return (
        <>
          <StatusBar />
          <View style={styles.idCard}>
            <Image
              style={styles.image}
              source={require('../assets/Red_profile.webp')}
            />
            <View style={styles.info}>
              <Text style={{flex: 1}}>Prénom: Annaeg</Text>
              <Text style={{flex: 1}}>Nom: Lelièvre</Text>
              <Text style={{flex: 1}}>Téléphone: 0642060906</Text>
              <Text style={{flex: 1}}>Email: annaeg@hotmail.fr</Text>
              <Text style={{flex: 1}}>Adresse: 19 La Ruaudaie</Text>
            </View>
          </View>
          <Button
            style={styles.share}
            title="Modifier Profil"
            onPress={() => setModifierContact(!modifierContact)}
          />
          <Button
            style={styles.share}
            title="Partager profil"
            onPress={() => setAfficheQrCode(!afficheQrCode)}
          />
          <StatusBar />
        </>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
    margin: 10,
  },
  textInputStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#51D8C7',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#51D8C7',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    padding: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },

  /////////////////////////////////////////////////////////////
  idCard: {
    flexDirection: 'row',
    flex: 9,
  },

  image: {
    flex: 4,
    alignContent: 'center',
  },

  info: {
    flexDirection: 'column',
    flex: 6,
    paddingLeft: 10,
  },

  pkmPref: {
    flexDirection: 'row',
    flex: 1,
  },

  prefImg: {
    width: 30,
    height: 50,
  },

  share: {
    flex: 1,
  },
});

export default IdCard;
