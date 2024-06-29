import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{borderWidth: '1px', borderColor: 'green', padding: '16px'}}>Hello, world!</Text>
      <Text style={{backgroundColor: 'red'}}>Hello, world!</Text>
      <Button title="Tap Me!" />
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
});
