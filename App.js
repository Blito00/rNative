import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5,  Ionicons, MaterialIcons, Octicons, AntDesign } from '@expo/vector-icons'
import ListaDesplegable from './src/views/list.jsx';


export default function App() {
  return (
    <View style={styles.container}>
      <Text  style={styles.text}>Bienvenido.</Text>
      <StatusBar style="auto" />


    <View  style={styles.view1}>
    <TouchableOpacity onPress={console.log('holis')}>
    <AntDesign name="down" color={"green"} size={20} />
    
    </TouchableOpacity>
    <ListaDesplegable/>
    </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems:'center',
    justifyContent: 'center',
    fontFamily: 'Roboto',
  },

  view1:{
  position: 'relative',
  top: -350,

  },
  text:{
    fontWeight: 'bold',
    top:-350,
    fontSize: 25,
    
  }
});


