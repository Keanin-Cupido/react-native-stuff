import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Open up App.js to start working on your app!</Text>
      <Text style={{color: 'white'}}>Hello, world. I'm new to React Native.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    backgroundColor: '#101010',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
