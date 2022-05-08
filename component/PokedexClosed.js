import { Text, View, StyleSheet } from "react-native";
import * as React from "react";

function PokedexClosed({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Mettre ici le Pokedex fermer avec un bouton pour l'ouvrir</Text>
      <Button
        title="Go to Pokedex"
        onPress={() => navigation.navigate("Home", { screen: "Pokedex" })}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});

export default PokedexClosed;
