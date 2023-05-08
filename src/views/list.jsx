import { FlatList, Text, View } from 'react-native'
import React from 'react'
const ListaDesplegable = () => {
  const dataSimple = ['Faker', 'Zeus', 'Oner', 'Gumayusi']

  return (
    <View>
    <Text>Lista simple</Text>  
    <FlatList data={dataSimple} renderItem={({ item }) => <Text>{item}</Text>}/>
    </View>
  );
};

export default ListaDesplegable;