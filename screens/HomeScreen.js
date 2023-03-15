import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';


export default function HomeScreen({navigation}) {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text>This is the Home Screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={newText => setText(newText)}
        placeholder={"what is your name?"}
        value={text}
      />
      <Button 
      title='Login'
      onPress={() => navigation.navigate("User", {name: text})}
      ></Button>
      <Button 
      title='Go to the Second Screen'
      onPress={() => navigation.push("Second")}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
