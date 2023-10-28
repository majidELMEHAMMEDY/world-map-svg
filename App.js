import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WorldMap from 'react-native-world-map-svg';

//TODO add new branch for library sourceCode
// optimize code and push new version to github and update npm

export default function App() {
  return (
    <View style={{flex:1}}>
      <WorldMap onSelectContinent={(el) => alert(el)} color='black'  selectedColor="red" />
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
