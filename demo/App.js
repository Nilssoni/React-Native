import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [miles, setMiles] = useState('');

  const kilometers = miles * 1.609;

  return (
    <View style={styles.container}>
      <Text>Miles</Text>
      <TextInput
        value={miles}
        onChangeText={text => setMiles(text)}
        keyboardType='decimal-pad'
      />
      <Text>Kilometers</Text>
      <Text>{kilometers}</Text>
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
});
