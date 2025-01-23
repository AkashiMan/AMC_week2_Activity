import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInANest = () => {
  const [titleText, setTitleText] = useState("NATHANIEL SANTOS");
  const bodyText = 'Santos, Nathaniel S. from BSIT 303.I play mobile legends bang bang. And my main is Leomord. And if you want to achieve mythic glory just invite me. And Im the database and back end developer of our sysarch 2. And we plan to not to continue our last projects, so for capstone 1 we plan to create a new project. And in the future I want to be a back end developer and have a honda civic and have a nice house.  .';

  const onPressTitle = () => {
    setTitleText("SUPRISEEEEEEEE!");
  };



  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {'\n'}
            {'\n'}
          </Text>
          <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
    
  },
  baseText: {
    fontFamily: 'Cochin',
    textAlign: 'center'
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});



export default TextInANest;