import {
  Image,
  Text,
  View,
  SectionList,
  StyleSheet,
  Button,
} from "react-native";
import React, { useState } from "react";

function FicheContact() {
  return (
    <>
      <View style={styles.topButton}>
        <Button title="🔙" onPress={() => setAfficheContact(!afficheContact)} />
        <Button title="Modifier contact" />
      </View>
      <View style={styles.contact}>
        <Image
          style={styles.image}
          source={require("../assets/Red_profile.webp")}
        />
        <View style={styles.info}>
          <Text style={{ flex: 1 }}>Prénom: Annaeg</Text>
          <Text style={{ flex: 1 }}>Nom: Lelièvre</Text>
          <Text style={{ flex: 1 }}>Téléphone: 0642060906</Text>
          <Text style={{ flex: 1 }}>Date de naissance: 07/05/1998</Text>
          <Text style={{ flex: 1 }}>Adresse: 19 La Ruaudaie</Text>
          <Text style={{ flex: 1 }}>Ville: St-Nicolas-du-Tertre</Text>
          <Text style={{ flex: 1 }}>Pays: France</Text>
          <Text style={{ flex: 1 }}>ID: 64930464</Text>
          <View style={styles.pkmPref}>
            <Text>Pokémon préféré: Mimikqui</Text>
            <Image
              style={styles.prefImg}
              source={require("../assets/Mimiqui.png")}
            />
          </View>
          <Text style={{ flex: 1 }}>
            Citation: Connexion Wi-Fi Tous heureux
          </Text>
        </View>
      </View>
      <Button title="📞" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: "#333333",
  },

  header: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "black",
  },

  topButton: {
    flexDirection: "row",
  },

  contact: {
    flexDirection: "row",
    flex: 9,
  },

  image: {
    flex: 4,
  },

  info: {
    flexDirection: "column",
    flex: 6,
  },

  pkmPref: {
    flexDirection: "row",
    flex: 1,
  },

  prefImg: {
    width: 30,
    height: 50,
  },
});

export default FicheContact;
