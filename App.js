import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WorldMap from 'react-native-world-map-svg';

//TODO optimize the source code and include it in git 
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
