import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, TouchableOpacity, View } from 'react-native';
import { FontAwesome5, Ionicons, MaterialIcons, Octicons, AntDesign } from '@expo/vector-icons'
import { useState } from 'react';
import GamesList from './GamesList';
import { useFonts } from 'expo-font';




export default function Home({ navigation }) {

  const [mostrar, setMostrar] = useState(false)
  const [loaded] = useFonts({
    'Anton': require('../../assets/fonts/Anton-Regular.ttf'),
    'Rubik': require('../../assets/fonts/Rubik-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }



  return (
    <View style={styles.container}>

      
      <Text style={styles.text}>Bienvenido</Text>
      <Text style={{fontFamily: 'Rubik'}}>  Ésta app muestra una lista de juegos consumida a traves de una API. </Text>
      <Button
        onPress={() => {

          navigation.navigate('gamesList')
        }}
        title="Mostrar"
        color="green"
      />
      <StatusBar style="auto" />


      <View style={styles.view1}>
        <TouchableOpacity onPress={() => setMostrar(!mostrar)}>

          <AntDesign name="pluscircle" color={"white"} size={30} />
        </TouchableOpacity>

        {
          mostrar
            ? <GamesList />
            : <></>
        }

      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5c5b58'
  },
  view1: {
    position: 'relative',
    marginTop: 30,
  },
  text: {
    fontWeight: 'bold',
    top: -300,
    fontSize: 25,
    color: "#ffff",
  },
  text2: {
    position: 'relative',
    margin: 10,
    color: 'white',
    fontSize: '5',
    fontFamily: 'Roboto'
  },
});