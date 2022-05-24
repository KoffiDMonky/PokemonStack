import ListePokemon from './Pokedex';
import Pokematos from './Pokematos';
import CarteDresseur from './CarteDresseur';
import Carte from './Carte';

import {StatusBar, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  const [afficheContact, setAfficheContact] = useState(false);

  //Méthode pour passer setAfficheContact en props au composant FicheContact
  const setAffichageContact = bool => {
    setAfficheContact(bool);
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === 'Pokedex') {
              iconName = 'paw';
            } else if (route.name === 'Pokematos') {
              iconName = 'phone';
            } else if (route.name === 'Carte de dresseur') {
              iconName = 'address-card';
            } else if (route.name === 'Carte') {
              iconName = 'map-pin';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#F9CF30',
          tabBarInactiveTintColor: '#D90D43',
        })}>
        <Tab.Screen name="Pokedex" children={() => <ListePokemon />} />
        <Tab.Screen
          name="Pokematos"
          children={() => (
            <Pokematos
              afficheContact={afficheContact}
              setAffichageContact={setAffichageContact}
            />
          )}
        />
        <Tab.Screen
          name="Carte de dresseur"
          children={() => <CarteDresseur />}
        />
        <Tab.Screen name="Carte" children={() => <Carte />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  addButton: {
    right: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Navigation;
