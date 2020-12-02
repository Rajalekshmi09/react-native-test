import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Image } from 'react-native-elements';
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';



export default class Profile extends Component {

  render() {

    return (
      <View style={styles.container}>

        <View style={{width:'100%',flexDirection:'row',backgroundColor:'yellow',padding:10 }} >
            <View style={{backgroundColor:'red', marginHorizontal:10 ,padding:10}}>
            <Card style={styles.box}>
              <Card.Title>CARD</Card.Title>
              <Card.Divider />
              <Card.Image source={{ uri:'' }} />
              <Text style={{ marginBottom: 10 }}>
                The idea of with React.
                </Text>
              <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW'
                 />
            </Card>
            </View>

            <View  style={{backgroundColor:'red' ,marginHorizontal:10,padding:10}}>
            <Card style={styles.box}>
              <Card.Title>CARD</Card.Title>
              <Card.Divider />
              <Card.Image source={{ uri: '' }} />
              <Text style={{ marginBottom: 10 }}>
                The idea with React.
                </Text>
              <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW' />
            </Card>
            </View>

            <View  style={{backgroundColor:'red',marginHorizontal:10 ,padding:10}} >
            <Card style={styles.box}>
              <Card.Title> CARD</Card.Title>
              <Card.Divider />
              <Card.Image source={{ uri: '' }} />
              <Text style={{ marginBottom: 10 }}>
                The idea with React.
                </Text>
              <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW' />
            </Card>
            </View>

    </View>




    <View  style={{flexDirection:'row' ,backgroundColor:'orange' ,padding:10}}>
        
        <Card style={styles.box}>
          <Card.Title>CARD</Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: '' }} />
          <Text style={{ marginBottom: 10 }}>
            The idea with Native Elements.
            </Text>
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='VIEW NOW' />
        </Card>
    </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'space-around',
    backgroundColor: 'skyblue',
    
  },
  box:{
    width:50,
    height:50
  }

})







