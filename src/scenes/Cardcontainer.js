import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem, Avatar, flexwrap ,Input, Card , Image} from 'react-native-elements';
import React, {Component} from 'react';
import { View ,  Text ,StyleSheet , Button  } from 'react-native';

 export default class Cardcontainer extends Component {
  constructor (props){
    super(props)
  }
    render(){
      const { navigation } = this.props;
      return(
     <View style={styles.container}>
      <View style={{flexDirection:'row',padding:10}} >
       <View style={styles.box}>
          <View style={styles.inner}>
          <Text>box1</Text>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/54200/pexels-photo-54200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                style={{ width: 250, height: 250 }}
              />
              <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={styles.btnStyle}
                    title='ADD' 
                    onPress={() =>navigation.navigate('List')} 
                  />
              
          </View>
       </View>

       <View style={styles.box}>
          <View style={styles.inner}>
              <Text>box2</Text>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/54200/pexels-photo-54200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                style={{ width: 250, height: 250 }}
              />
              <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={styles.btnStyle}
                    title='ADD' 
                    onPress={() =>navigation.navigate('List')} 
                  />
          </View>
       </View>

       <View style={styles.box}>
          <View style={styles.inner}>
              <Text>box3</Text>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/54200/pexels-photo-54200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                style={{ width: 250, height: 250 }}
              />
              <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={styles.btnStyle}
                    title='ADD' 
                    onPress={() =>navigation.navigate('List')} 
                  />
          </View>
       </View>

       <View style={styles.box}>
          <View style={styles.inner}>
              <Text>box4</Text>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/54200/pexels-photo-54200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                style={{ width: 250, height: 250 }}
              />
              <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={styles.btnStyle}
                    title='ADD' 
                    onPress={() =>navigation.navigate('List')} 
                  />
          </View>
       </View>
       
       
       </View>
     </View>
      );    
      }
    }
const styles = StyleSheet.create({
  container: {
   alignContent: 'stretch',  
   width: '100%' ,
   height: '85%' ,
   padding: 5,
   flexDirection: "row",
   flexWrap: 'wrap',
   backgroundColor: '#eee'
  },
  box:{
    width: '50%',
    height:'50%',
    padding: 5
  }, 
  inner:
  {
    flex: 2,
    backgroundColor: '#eee' ,
    alignContent: 'center',
    justifyContent: 'center'
  },
  btnStyle: {
    borderRadius: 0, 
    marginLeft: 0, 
    marginRight: 0, 
    marginBottom: 0
  }
  
})







