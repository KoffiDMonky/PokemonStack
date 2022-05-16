import { Text, View, Image, StyleSheet, TouchableOpacity, StatusBar, Button } from "react-native";
import React, {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';
import ModifContact from './ModifContact';

function IdCard() {
  const [afficheQrCode, setAfficheQrCode] = useState(false);
  const [modifierContact, setModifierContact] = useState(false);

  let profil = "https://google.com";
    /*{
    "name": userName,
    "first_name": firstName,
    "adress": adress,
    "phone_number": phoneNumber,
    "mail": mail,
    "avatar": avatar,
}*/

  if (afficheQrCode) {
    return (
      <>
        <StatusBar />
        <View>
          <Text>GOTTA FLASH THEM ALL</Text>
          <QRCode
            value={profil}
            size={250}
            color="black"
            logo={require('../assets/logo_qrcode_ball.jpg')} // Enlever le fond du logo
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
    <View style={styles.body}>
      <StatusBar style="auto"/>
      <View style={styles.image}>
        <Image
          style={styles.pic}
          source={require('../assets/Red_profile.webp')}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.titre}>
          PRENOM NOM
        </Text>
        <View style={styles.detail}>
          <View style={styles.option}>
            <TouchableOpacity
              /*</View>onPress={() => setAfficheContact(!afficheContact)}*/>
              <Text style={{color: 'black', fontSize: 15}}>Appel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModifierContact(!modifierContact)}>
              <Text style={{color: 'black', fontSize: 15}}>Modifier</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setAfficheQrCode(!afficheQrCode)}>
              <Text style={{color: 'black', fontSize: 15}}>Partager</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.coordonnees}>
            <Text style={{color: 'black', fontSize: 15}}>
              Telephone : PHONE
            </Text>
          </View>
          <View style={styles.coordonnees}>
            <Text style={{color: 'black', fontSize: 15}}>Email : MAIL</Text>
          </View>
          <View style={styles.coordonnees}>
            <Text style={{color: 'black', fontSize: 15}}>
              Adresse : ADRESSE
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}}}

const styles = StyleSheet.create({
  //FICHE POKEMON
  body: {
    height: '100%',
    backgroundColor: '#F9CF30',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  topName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  titre: {
    flex: 1,
    width: '100%',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 20,
    color: '#D90D43',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  detail: {
    flex: 8,
    alignItems: 'center',
  },
  info: {
    flex: 6,
    backgroundColor: '#F6F6F6',
    marginBottom: 8,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    zIndex: 2,
    color: 'black',
    alignItems: 'center',
    padding: 15,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '85%',
    paddingVertical: 25,
    borderTopWidth: 1,
    borderTopColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  coordonnees: {
    flex: 2,
    justifyContent: 'center',
  },
  id: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  pic: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  propos: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caracteristique: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    padding: 5,
  },
  details: {
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsMiddle: {
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    width: '85%',
    textAlign: 'center',
    padding: 5,
    color: '#212121',
  },
  stats: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkText: {
    color: '#212121',
  },
  darkTitle: {
    color: '#212121',
    fontWeight: 'bold',
  }
})

export default IdCard;
