import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text
      style={{
        textAlign: 'center',
         fontSize: 32,
         fontWeight: 'bold'
      }}>NATHAN</Text>
      <View
        style={{
          flex: 1,
          justifyContent:"center",
          alignItems:"center"
        }}>
        <Text>Handsome </Text>
        <Image
          source={{
            uri:'https://i.ytimg.com/vi/OpA8Bdjl7Co/hq2.jpg?sqp=-oaymwEoCOADEOgC8quKqQMcGADwAQH4Ac4FgALQBYoCDAgAEAEYZSBZKE4wDw==&rs=AOn4CLArIxj_O-5u0SFY3PhXKJpaw7FPSQ'
          }}
          style={{width: 200, height: 200}}
        />
      </View
      >
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          textAlign: 'center'
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

export default App;