import { Text, View, Image, StyleSheet, Button, StatusBar } from "react-native";
import * as React from "react";

function IdCard() {
  return (
    <>
      <StatusBar />
      <View style={styles.idCard}>
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
      <Button style={styles.share} title="Partager contact" />
    </>
  );
}

const styles = StyleSheet.create({
  idCard: {
    flexDirection: "row",
    flex: 9,
  },

  image: {
    flex: 4,
    alignContent: "center",
  },

  info: {
    flexDirection: "column",
    flex: 6,
    paddingLeft: 10,
  },

  pkmPref: {
    flexDirection: "row",
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
