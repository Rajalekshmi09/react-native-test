import React, { Component } from 'react';
import { View, Image, Dimensions, Text, StyleSheet, ScrollView } from 'react-native';


const { width } = Dimensions.get("window");
const height = width * 2;

const images = [

  'https://images.pexels.com/photos/209449/pexels-photo-209449.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/5529540/pexels-photo-5529540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/2949140/pexels-photo-2949140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/162709/apple-red-fruit-fruits-162709.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
]
export default class Home extends Component {
  state = {
    active: 0
  }
  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  }
  render() {
    return (
      
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={styles.scroll} >

          {
            images.map((image, index) => (
              <Image
                key={index} a
                source={{ uri: image }}
                style={styles.image} />
            ))
          }

        </ScrollView>
        <View style={styles.pagination}>
          {
            images.map((i, k) => (
              <Text key={k} style={k == this.state.active ? styles.pagingActiveText : styles.pagingText}>▔</Text>
            ))
          }
        </View>
      </View>


    )
  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    // margin: 10,
    marginTop: 100,
    marginBottom: 200,
    borderWidth: 3,
    borderColor: 'lightgray',
    borderRadius: 8,

  },
  scroll:
  {
    width: width,
    height: height / 2,
  },
  image:
  {

    width: width,
    height: height / 2,
    resizeMode: 'cover'
  },
  pagination:
  {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 70,
    alignSelf: 'center'
  },
  pagingText:
  {
    fontSize: (width / 20),
    color: '#888',
    margin: 3
  },
  pagingActiveText:
  {
    fontSize: (width / 20),
    color: 'lightgray',
    margin: 3
  }

})