import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Card , Text,Image, ListItem, Avatar} from 'react-native-elements';
import React, {Component} from 'react';
import { View, Button  } from 'react-native';

  const styles = {    
    btnStyle: {
      borderRadius: 0, 
      marginLeft: 0, 
      marginRight: 0, 
      marginBottom: 0
    }
  }
  export default class Cardcontainer extends Component {
    constructor (props){
      super(props)
    }
    render(){
      const { navigation } = this.props;
        return (
          <View>
            <Card>
              <Card.Title>CARD CONTAINER</Card.Title>
              <Card.Divider/>
              <Card.Image source={{uri: 'https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
              <Text style={{marginBottom: 10}}>
                  The idea with React Native Elements is more about component structure than actual design.
              </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={styles.btnStyle}
                    title='VIEW NOW' 
                    onPress={() =>navigation.navigate('List')} 
                  />
            </Card>
          </View>
        )        
      }
    }
