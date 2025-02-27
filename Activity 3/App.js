import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    
      <Text style={styles.baseText}>    
        I am  
        <Text style={styles.innerText1}> Nathaniel S. Santos</Text> and im the database and backend in our   
        <Text style={styles.innerText2}> Sysarch 1.</Text> And in our
        <Text style={styles.innerText3}> Sysarch 2</Text> Im also the Back End and the database of our group 
      </Text>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  baseText: {
    textAlign: 'center'
  },
  innerText1: {
    color: 'blue',
    fontWeight: 'bold',
  },
  innerText2: {
    color: 'black',
    fontWeight: 'bold',
  },
  innerText3: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default BoldAndBeautiful;