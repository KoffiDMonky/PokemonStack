import ListePokemon from "./Pokedex";
import Pokematos from "./Pokematos";
import IdCard from "./IdCard";
import Carte from "./Carte";

import { StyleSheet } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
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
        <Tab.Screen name="Pokedex" children={() => <ListePokemon />} />
        <Tab.Screen
          name="Pokematos"
          children={() => <Pokematos />}
        />
        <Tab.Screen name="Carte de dresseur" children={() => <IdCard />} />
        <Tab.Screen name="Carte" children={() => <Carte />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default Navigation;
