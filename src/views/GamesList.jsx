import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TextInput } from 'react-native';
import axios from 'axios';
import { useFonts } from 'expo-font';




const GamesList = () => {


  


  const [gamesData, setGamesData] = useState([]);
  const [filteredGamesData, setFilteredGamesData] = useState([]);
  const [searchText, setSearchText] = useState('');



  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.freetogame.com/api/games');
        setGamesData(response.data);
      } catch (error) {
        console.log('Hubo un error:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredGames = gamesData.filter((game) =>
      game.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredGamesData(filteredGames);
  }, [gamesData, searchText]);






  const [loaded] = useFonts({
    'Anton': require('../../assets/fonts/Anton-Regular.ttf'),
    'Rubik': require('../../assets/fonts/Rubik-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }


  return (
    <View style={styles.viewList} >
      <TextInput
        placeholder="Buscar juegos..."
        value={searchText}
        onChangeText={setSearchText}
      />

      {filteredGamesData.length === 0 ? (
        <Text>No se encontraron juegos</Text>
      ) : (
        <FlatList 
          data={filteredGamesData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.list}>
              <Text style={{ fontFamily: 'Rubik', fontSize: 25, fontWeight: 'bold', color: '#ffff' }}>Nombre: {item.title}</Text>
              <Text style={styles.texto2}>Categoría: {item.genre}</Text>
              <Text style={styles.texto2}>Publicador: {item.publisher}</Text>
              <Text style={styles.texto2}>Fecha de lanzamiento: {item.release_date}</Text>
              <Text style={styles.texto2}>Plataforma: {item.platform}</Text>
              <Image style={styles.img} source={{ uri: item.thumbnail }}/>
            </View>
          )}
        />
      )}
    </View>
  );
};



const styles = StyleSheet.create({

  list
  : {
    position: 'relative',
    
    alignItems:'center',
    justifyContent: 'center',
    
  
  },

  viewList: {
    position: 'relative',
    
    alignItems:'center',
    justifyContent: 'center',
    
  
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 22,
    color: "#ffff",
    fontFamily: 'Rubik'
  },
  texto2: {
    fontSize: 15,
    fontStyle: 'italic',
    color: "#ffff",
  },
  img: {
    
    
    width: 280, 
    height: 150
  },

})
export default GamesList;
