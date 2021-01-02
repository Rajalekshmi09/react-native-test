import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default class CardDeal extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { type, price, item, onPress, title } = this.props;
    return (
      
        <View style={styles.container}>
          <View style={styles.imgcard}>
            <Image
              source={require("../../../assets/image/mango.png")}
              style={styles.image}
            />
          </View>
          <TouchableOpacity>
          <View style={styles.body}>

            <Text style={styles.bodyTitle}>{type}</Text>
            <Text style={styles.bodyItem}>{item}</Text>
            <Text style={styles.bodyPrice}>
              {price} <Text style={styles.bodyPriceOri}>$19</Text>
            </Text>
            <Text style={styles.bodyTime}>Ends in 05:21:46</Text>
          </View>
          </TouchableOpacity>
          <View style={styles.saleOff}>
            <Text style={styles.saleOffText}>-30%</Text>
          </View>

        </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,

    shadowColor: '#222',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 8,
    backgroundColor: '#f7faf9',
    marginTop: 16,
  },
  image: {
    width: 70,
    height: 80,

  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
  },

  bodyTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  bodyItem: {
    fontSize: 15,

  },
  bodyPrice: {
    fontWeight: '500',
    color: 'red',
    fontSize: 16,
    marginVertical: 3,
  },

  bodyPriceOri: {
    color: '#222',
    textDecorationLine: 'line-through',
  },

  bodyTime: {
    color: '#ABB0B8',
  },

  saleOff: {
    position: 'absolute',
    backgroundColor: '#E4828B',
    paddingHorizontal: 8,
    paddingVertical: 1,
    top: 8,
  },
  saleOffText: {
    color: '#fff',
    fontSize: 10,
  },
  imgcard: {
    padding: 8,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    //marginLeft: 9,
    alignItems: 'center',
    elevation: 3,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    backgroundColor: 'white',
  }
});