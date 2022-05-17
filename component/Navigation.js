import ListePokemon from './Pokedex';
import Pokematos from './Pokematos';
import IdCard from './IdCard';
import Carte from './Carte';

import {StatusBar, StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Pokedex') {
              iconName = focused ? 'ios-paw' : 'ios-paw-outline';
            } else if (route.name === 'Pokematos') {
              iconName = focused ? 'ios-call' : 'ios-call-outline';
            } else if (route.name === 'Carte de dresseur') {
              iconName = focused ? 'ios-card' : 'ios-card-outline';
            } else if (route.name === 'Carte') {
              iconName = focused ? 'ios-map' : 'ios-map-outline';
            }

            // return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#F9CF30',
          tabBarInactiveTintColor: '#D90D43',
        })}>
        <Tab.Screen name="Pokedex" children={() => <ListePokemon />} />
        <Tab.Screen
          name="Pokematos"
          options={{
            headerRight: () => (
              <TouchableOpacity style={styles.addButton}>
                <Icon name='rowing' size={20} color='dark' />
              </TouchableOpacity>
            ),
          }}
          children={() => <Pokematos />}
          // options={{ tabBarBadge: "!" }}
        />
        <Tab.Screen name="Carte de dresseur" children={() => <IdCard />} />
        <Tab.Screen name="Carte" children={() => <Carte />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: 'red',
    right: 20,
    width: 40,
    height: 40,
    textAlign: 'center',
  },
});

export default Navigation;
