import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

function FichePokemon(props) {
  const affichePokemon = props.affichePokemon;
  const setAffichePokemon = props.setAffichePokemon;
  // var {Icon} = require('react-native-icons');

  return (
    <View style={styles.body}>
      <StatusBar />
      <View style={styles.top}>
        <TouchableOpacity onPress={() => setAffichePokemon(!affichePokemon)}>
            <Text style={styles.name}> Bulbizarre</Text>
        </TouchableOpacity>
        <Text style={styles.id}>#001</Text>
      </View>
      <View style={styles.image}>
        <Image style={styles.pic} source={require('../assets/Mimiqui.png')} />
      </View>
      <View style={styles.info}></View>
      {/* <Button
          style={styles.topButton}
          title="🔙"
          onPress={() => setAffichePokemon(!affichePokemon)}
        /> */}
      {/* <Image style={styles.image} source={require('../assets/Mimiqui.png')} />
        <View style={styles.info}>
          <Text style={{flex: 1}}>ID: 123</Text>
          <Text style={{flex: 1}}>Nom: Mimiqui</Text>
          <Text style={{flex: 1}}>Type: Spectre</Text>
          <Text style={{flex: 5}}>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse dapibus urna elementum enim aliquam imperdiet.
            Morbi condimentum congue orci vehicula sodales. Proin dui lectus,
            placerat ut metus sit amet, tempus hendrerit magna. Nam pretium
            ipsum et turpis ornare, a cursus nunc vulputate. Donec iaculis erat
            sed risus venenatis, nec fermentum arcu fringilla. Nullam rutrum at
            urna vel rhoncus.
          </Text>
          <Text style={{flex: 1}}>Espèce: .....</Text>
          <Text style={{flex: 1}}>Talent: .....</Text>
        </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  //FICHE POKEMON
  body: {
    backgroundColor: '#74CB48',
    height: '100%',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  id: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    flex: 3,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  pic: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    // backgroundColor: 'blue',
    top: 30,
  },
  info: {
    flex: 6,
    backgroundColor: '#F6F6F6',
    marginBottom: 8,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    zIndex: 2,
    //   flexDirection: 'column',
    //   paddingLeft: 10,
  },

  topButton: {},
});

export default FichePokemon;
