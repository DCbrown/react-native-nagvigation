import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>This is the Home Screen</Text>
      <Button 
      title='Second Screen'
      onPress={() => navigation.navigate("Second")}
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
