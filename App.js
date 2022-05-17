import ListePokemon from './component/Pokedex';
import Pokematos from './component/Pokematos';
import IdCard from './component/IdCard';
import Carte from './component/Carte';

import {StyleSheet} from 'react-native';
import * as React from 'react';
import Navigation from './component/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
