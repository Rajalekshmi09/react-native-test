import { ListItem, Avatar} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {Component} from 'react';
import { View ,Button  } from 'react-native';
import {productList} from "../app-utils"

const styles = {
    container: {
        
        marginTop: 100,
        //alignItems: 'center',
        paddingLeft: 30,
    }}
export default class List extends Component {
    render(){
      return (            
            <View styles={styles.container}>
                {productList.map((item, index) => (
                        <ListItem key={index} bottomDivider>
                        <Avatar source={{uri: item.avatar_url}} />
                        <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                       
                        <ListItem.Chevron />
                    </ListItem>
                ))}
            </View>
        )
    }    
}
