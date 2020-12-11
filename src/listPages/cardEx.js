import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import Example from './src/listPages/Example';
import Profile from './src/scenes/Header/Profile';
//var {height, width } = Dimensions.get('window');

export default class App extends Component {
  state = {
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={3}
          data={[
            require("./assets/image/img9.jpeg"), require("./assets/image/img1.jpeg"),
            require("./assets/image/img2.jpeg"), require("./assets/image/img3.jpeg"),
            require("./assets/image/img4.jpeg"), require("./assets/image/img5.jpeg"),
            require("./assets/image/img6.jpeg"), require("./assets/image/img7.jpeg"),
            require("./assets/image/img8.jpeg"),
          ]}
          renderItem={({ item }) => {
            return <Example image={item} />
          }}
          keyExtractor={
            (index) => { return index }

          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'white',
  },

})