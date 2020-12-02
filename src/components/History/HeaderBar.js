import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class HeaderBar extends Component {
    constructor (props){
        super(props)
      }
render(){
    const { goBack } = this.props;
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={goBack}>
            <Icon name="left" size={30} color="gray" />
        </TouchableOpacity>

        <Text style={styles.title}>History</Text>
        <Icon name="search1" size={30} color="gray" />
        </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});