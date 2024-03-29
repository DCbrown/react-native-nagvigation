import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View } from 'react-native';

export default function UserScreen({navigation, route}) {
  let username = route.params.name

  return (
    <View style={styles.container}>
      <Text>Welcome {username}</Text>
      <Button 
      title='Go to the First Screen'
      onPress={() => navigation.push("Home")}
      ></Button>
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
