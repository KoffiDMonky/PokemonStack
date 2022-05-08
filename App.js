import ListePokemon from "./component/Pokedex";
import Pokematos from "./component/Pokematos";
import IdCard from "./component/IdCard";
import Carte from "./component/Carte";

import { StyleSheet } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

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
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "darkred",
        })}
      >
        <Tab.Screen
          name="Pokedex"
          children={() => <ListePokemon />}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Pokematos"
          children={() => <Pokematos />}
          options={{ tabBarBadge: "!", headerShown: false }}
        />
        <Tab.Screen
          name="Carte de dresseur"
          children={() => <IdCard />}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Carte"
          children={() => <Carte />}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
