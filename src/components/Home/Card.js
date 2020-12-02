import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,title
  } from 'react-native';
  


export default class Card extends Component {
    constructor(props){
        super(props)
      }
    render(){
        const {title, onPress} = this.props;
      return ( 
        <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.cardContainer}>
        <View style={styles.cardTop}>
            <Image
                source={{uri: 'https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
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
        width: 50,
        height: 50,
      },
    
      container: {
        width: '25%',
        flexDirection: 'row',
        marginBottom: 15,
      },
    
      cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      cardTop: {
        backgroundColor: '#fff',
        padding: 15,
        shadowColor: '#222',
        shadowOffset: {width: 2, height: 2},
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