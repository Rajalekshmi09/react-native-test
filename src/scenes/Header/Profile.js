import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Fontisto';
import { itemList } from '../../app-utils';
import SearchBar from '../../components/Home/SearchBar';

export default class List extends Component {
  render() {
    const item = itemList.map((item, index) => {

      return <View key={item.id} style={styles.item}>
        <View style={styles.img}>
          <Image
            source={{ uri: item.imageurl }}
            style={{ width: 120, height: 90, margin: 5 }}
          >
          </Image>
        </View>

        <View style={styles.body}>
          <Text style={styles.text}>{item.text} </Text>
          <Text style={styles.bodyPrice}>  {item.price}</Text>
          <Text style={styles.textkg}>{item.size} </Text>
        </View>

        <View>
          <Button style={styles.btn}
            icon={
              <Icon
                name="shopping-basket-add"
                size={15}
                color="white"
              />
            }
            title=" Add "
          />
        </View>

      </View>
    })
    return (

      <View style={styles.container}>
        <View style={styles.header}>
          <SearchBar />
        </View>
        <View style={styles.contentContainer}>

          <ScrollView >
            <View>
              {item}
            </View>
          </ScrollView>
        </View>
      </View>

    )
  }
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,

  },
  header: {
    paddingTop: 20,
    height: 80,
    backgroundColor: '#3f8fd1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // headerText: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: 'white',
  // },
  contentContainer: {
    backgroundColor: '#f2f5f5',
    paddingTop: 30,

  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e4e7ed',
    alignItems: 'center',
  },
  // marginLeft: {
  //   marginLeft: 5,
  // },

  text: {
    //marginVertical: 30,
    fontSize: 20,
    // fontWeight: 'bold',
    marginLeft: 10,
  },
  textkg: {
    fontSize: 15,
    marginLeft: 10,
    color: "#2dba54"
  },
  // moreIcon: {
  //   color: "#d6d7da",
  //   alignContent: 'flex-end',
  // },
  btn: {
    alignItems: 'flex-end',
    marginLeft: 50
  },
  bodyPrice: {
    fontWeight: '500',
    color: 'red',
    fontSize: 16,
    marginVertical: 3,
  },
  img: {
    flexDirection: 'row',
    padding: 10,
  }
}) 