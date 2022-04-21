import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>
          Sistema de gerenciamento de gado leiteiro
        </Text>
      </View>
      <Text style={styles.text}>Ola mundo </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color : 'white',
    alignItems : 'center',
    textAlign : 'center',
    marginTop: '10px'
  },
  header : {
    position: 'absolute',
    top: 0,
    left: 0,
    width:'100%',
    height:'10%',
    backgroundColor:"black"
  }

});
