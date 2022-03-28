import { StatusBar } from "expo-status-bar";
import { Image, Button, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

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

function Carte({ navigation }) {
  return (
    <View>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421}}
      />
    </View>
  );
}

function IdCard({ navigation }) {
  return (
    <>
      <View style={styles.idCard}>
        <Image
          style={styles.image}
          source={require("./assets/Red_profile.webp")}
        />
        <View style={styles.info}>
          <Text style={{ flex: 1 }}>Prénom: Annaeg</Text>
          <Text style={{ flex: 1 }}>Nom: Lelièvre</Text>
          <Text style={{ flex: 1 }}>Date de naissance: 07/05/1998</Text>
          <Text style={{ flex: 1 }}>Adresse: 19 La Ruaudaie</Text>
          <Text style={{ flex: 1 }}>Ville: St-Nicolas-du-Tertre</Text>
          <Text style={{ flex: 1 }}>Pays: France</Text>
          <Text style={{ flex: 1 }}>ID: 64930464</Text>
          <View style={styles.pkmPref}>
            <Text>Pokémon préféré: Mimikqui</Text>
            <Image
              style={styles.prefImg}
              source={require("./assets/Mimiqui.png")}
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

function Pokematos({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Mettre ici le répertoire</Text>
      <Button
        title="Close Pokedex"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

function ListePokemon({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Mettre ici la liste des pokemon = pokedex</Text>
      <Button
        title="Close Pokedex"
        onPress={() => navigation.navigate("CloseDex")}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Pokedex") {
              iconName = focused ? "ios-paw" : "ios-paw-outline";
            } else if (route.name === "Pokematos") {
              iconName = focused ? "ios-call" : "ios-call-outline";
            } else if (route.name === "Carte de dresseur") {
              iconName = focused ? "ios-card" : "ios-card-outline";
            } else if (route.name === "Carte") {
              iconName = focused ? "ios-map" : "ios-map-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "darkred",
        })}
      >
        <Tab.Screen name="Pokedex" component={ListePokemon} />
        <Tab.Screen
          name="Pokematos"
          component={Pokematos}
          options={{ tabBarBadge: "!" }}
        />
        <Tab.Screen name="Carte de dresseur" component={IdCard} />
        <Tab.Screen name="Carte" component={Carte} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  idCard: {
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

  share: {
    flex: 1,
  },
});

/**/

export default App;
