import {
  FlatList,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ItemPokemon from './ItemPokemon';
import FichePokemon from './FichePokemon';
import LoaderPage from './LoaderPage';

function ListePokemon() {
  let allPokemon = []; //Tableau dans lequel nous allons stocker nos 151 pokémons
  const [affichePokemon, setAffichePokemon] = useState(false); //Variable d'état permettant d'afficher ou non la fiche d'un pokemon
  const [listePokemon, setListePokemon] = useState([]); //Variable d'état contenant notre liste de pokémon
  const [selectedId, setSelectedId] = useState(); //Variable d'état permettant de définir l'identifiant du pokémon sélectionner pour afficher les bonnes données dans la fiche
  const [isLoading, setLoading] = useState(true); //Variable d'état permettant de définir si la liste de pokémon est chargé pour l'afficher

  //Méthode pour passer setAffichePokemon en props au composant FichePokemon
  const stateAffichagePokemon = (bool) =>{
    setAffichePokemon(bool)
  }

  //Méthode permettant de récupérer la liste des +1000 pokémons
  const getPokemons = async () => {
    try {
      await fetch('https://pokeapi.co/api/v2/pokemon?limit=151') //Appel des 151 pokémons sur PokeAPI
        .then(res => res.json())
        .then(allPoke => {
          allPoke.results.forEach(pokemon => {
            fetchPokemonComplet(pokemon);
          });
        });
    } catch (error) {
      console.error(error);
    } 
  };

  //Méthode définissant les caractéristiques complète d'un pokemon
  const fetchPokemonComplet = async pokemon => {
    let objPokemonFull = {};
    let url = pokemon.url;
    let nameP = pokemon.name;

    //Récupération des détails d'un pokémon pour la fiche Pokémon: identifiant, image, type, poids, taille, abilités et stats
    await fetch(url) //Appel à PokeAPI pour récupérer les détails de chaque pokémon
      .then(res => res.json())
      .then(pokeData => {
        objPokemonFull.id = pokeData.id;
        objPokemonFull.pic = pokeData.sprites.front_default;
        objPokemonFull.types = pokeData.types[0].type;
        objPokemonFull.weight = Math.round(pokeData.weight * 0.1 * 100) / 100; //On converti le poids dans la bonne unité
        objPokemonFull.height = Math.round(pokeData.height * 0.1 * 100) / 100; //On converti la taille dans la bonne unité
        objPokemonFull.abilities = pokeData.abilities;
        objPokemonFull.stats = pokeData.stats;

        //Récupération des détails d'un pokémon pour la fiche Pokémon traduit en français: nom et description
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameP}`) 
          .then(res => res.json())
          .then(pokeDataFr => {
            objPokemonFull.name = pokeDataFr.names[4].name;
            objPokemonFull.description =
              pokeDataFr.flavor_text_entries[18].flavor_text;

            allPokemon.push(objPokemonFull);

            if (allPokemon.length === 151) {
              let tableauFin;
              tableauFin = allPokemon.sort((a, b) => { //On tri la liste de pokémon dans TableauFin
                return a.id - b.id;
              });

              setListePokemon(tableauFin); //On charge la liste trié dans la variable d'état ListePokemon
              setLoading(false);
            }
          })
          .catch(function (error) {
            console.log(
              'Il y a eu un problème avec votre opération de récupération : ' +
                error.message,
            );
            throw error;
          });
      })
      .catch(function (error) {
        console.log(
          'Il y a eu un problème avec votre opération de récupération : ' +
            error.message,
        );
        throw error;
      });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  if (affichePokemon) {
    return (
      <>
        <FichePokemon
          pokemon={listePokemon[selectedId - 1]}
          affichePokemon={affichePokemon}
          setAffichePokemon={stateAffichagePokemon}
        />
      </>
    );
  } else {
    return (
      <View style={styles.background}>
        <StatusBar style="auto" />
        <View>
        {isLoading ? <LoaderPage /> : (
          <FlatList
            numColumns={2}
            data={listePokemon}
            renderItem={({item}) => (
              <ItemPokemon
                id={item.id}
                nom={item.name}
                img={item.pic}
                type={item.types}
                affichePokemon={affichePokemon}
                setSelectedId={setSelectedId}
                setAffichePokemon={setAffichePokemon}
              />
            )}
            keyExtractor={item => item.id}
          />)
        }
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F7F7F7',
  }

});

export default ListePokemon;
