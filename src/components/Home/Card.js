import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions, title
} from 'react-native';



export default class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { title, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.cardContainer}>
          <View style={styles.cardTop}>
            <Image
              source={require("../../../assets/image/veg2.png")}
              style={styles.image}
            />
          </View>
          <Text style={styles.cartTitle}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
  },

  container: {
    width: '25%',
    flexDirection: 'row',
    marginBottom: 15,
    padding: 5,
  },

  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardTop: {
    backgroundColor: '#e4ebe8',
    padding: 15,
    shadowColor: '#222',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 8,
    width: Dimensions.get('screen').width / 5,
  },

  cartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});