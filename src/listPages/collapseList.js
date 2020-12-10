import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import SearchBar from './../../src/components/Home/SearchBar';
export default class collapseList extends Component {
  render() {
    return (

        
      <ScrollView>

      <View style={styles.container}>
       <View style={styles.header}>
                   <SearchBar/>
                </View>
        <View>
            <Collapse>
              <CollapseHeader style={styles.textBox}>
                <Separator bordered>
                  {/* <Image style={styles.image}
                    source={{ uri: 'https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}

                  ></Image> */}
                  <Text style={styles.textHead}>Fruits</Text>


                </Separator>
              </CollapseHeader>
              <CollapseBody>
                <ListItem >
                  <Text style={styles.textBody}>Fresh Fruits</Text>
                </ListItem>
                <ListItem>
                  <Text>Claire Barclay</Text>
                </ListItem>
                <ListItem last>
                  <Text>Kelso Brittany</Text>
                </ListItem>
              </CollapseBody>
            </Collapse>
            {/* 1 line */}
            <Collapse>
              <CollapseHeader style={styles.textBox}>
                <Separator bordered>
                  <Text style={styles.textHead}>Vegetables</Text>
                </Separator>
              </CollapseHeader>
              <CollapseBody>
                <ListItem >
                  <Text style={styles.textBody}>Fresh Vegetables</Text>
                </ListItem>

                <ListItem last>
                  <Text style={styles.textBody}>Herbs & Seasonings</Text>
                </ListItem>
              </CollapseBody>
            </Collapse>
            {/* 2 line */}
            <Collapse>
              <CollapseHeader style={styles.textBox}>
                <Separator bordered>
                  <Text style={styles.textHead}>Dry Fruits</Text>
                </Separator>
              </CollapseHeader>
              <CollapseBody>
                <ListItem >
                  <Text style={styles.textBody}>Almonds</Text>
                </ListItem>
                <ListItem >
                  <Text style={styles.textBody}>Pistha</Text>
                </ListItem>
                <ListItem last>
                  <Text style={styles.textBody}>Dates</Text>
                </ListItem>
              </CollapseBody>
            </Collapse>
            {/* 3 line */}
            <Collapse>
              <CollapseHeader style={styles.textBox}>
                <Separator bordered>
                  <Text style={styles.textHead}>Dairy & Bakery</Text>
                </Separator>
              </CollapseHeader>
              <CollapseBody>
                <ListItem >
                  <Text style={styles.textBody}>Dairy</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.textBody}>Toast& Khari</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.textBody}>Ghee</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.textBody}>Cheese</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.textBody}>Paneer & Tofu</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.textBody}>Bakery Snacks</Text>
                </ListItem>
                <ListItem last>
                  <Text style={styles.textBody}>Cakes & Muffins</Text>
                </ListItem>
              </CollapseBody>
            </Collapse>
            {/* 4 line */}
            <Collapse>
              <CollapseHeader style={styles.textBox}>
                <Separator bordered>
                  <Text style={styles.textHead}>Staples</Text>
                </Separator>
              </CollapseHeader>
              <CollapseBody>
                <ListItem >
                  <Text style={styles.textBody}> Atta,Flours & Sooji</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.textBody}>Dals & Pulses</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.textBody}>Rice & Rice Products</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.textBody}>Masala & Spices</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.textBody}>Salt,Sugger & Jaggery</Text>
                </ListItem>
                <ListItem last>
                  <Text style={styles.textBody}>Soya Products, Whwat & Other Grains</Text>
                </ListItem>
              </CollapseBody>
            </Collapse>
            {/* 5 line */}
            <Collapse>
              <CollapseHeader style={styles.textBox}>
                <Separator bordered>
                  <Text style={styles.textHead}>Snacks & Branded Foods</Text>
                </Separator>
              </CollapseHeader>
              <CollapseBody>
                <ListItem >
                  <Text style={styles.textBody}>Biscuits & Cookies</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.textBody}>Chocolates & Candies</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.textBody}>Noodles, Pasta , vermiCelli</Text>
                </ListItem>
                <ListItem last>
                  <Text style={styles.textBody}>Frozen Products</Text>
                </ListItem>
              </CollapseBody>
            </Collapse>
            {/* 6 line */}
            <Collapse>
              <CollapseHeader style={styles.textBox}>
                <Separator bordered>
                  <Text style={styles.textHead}>Beverages</Text>
                </Separator>
              </CollapseHeader>
              <CollapseBody>
                <ListItem >
                  <Text style={styles.textBody}>Tea</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.textBody}>Coffee</Text>
                </ListItem>
                <ListItem last>
                  <Text style={styles.textBody}>Health Drinks & Supplement</Text>
                </ListItem>
              </CollapseBody>
            </Collapse>
            {/* 7 line */}
            <Collapse>
              <CollapseHeader style={styles.textBox}>
                <Separator bordered>
                  <Text style={styles.textHead}>Personal care</Text>
                </Separator>
              </CollapseHeader>
              <CollapseBody>
                <ListItem >
                  <Text style={styles.textBody}>Hair care</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.textBody}>Oral Care</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.textBody}>Skin Care</Text>
                </ListItem>
                <ListItem last>
                  <Text style={styles.textBody}>Covid Essentials</Text>
                </ListItem>
              </CollapseBody>
            </Collapse>
            {/* 8 line */}
            <Collapse>
              <CollapseHeader style={styles.textBox}>
                <Separator bordered>
                  <Text style={styles.textHead}>Home Care</Text>
                </Separator>
              </CollapseHeader>
              <CollapseBody>
                <ListItem >
                  <Text style={styles.textBody}>Detergents</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.textBody}>Dish Wash</Text>
                </ListItem>
                <ListItem last>
                  <Text style={styles.textBody}>All Purpose Cleaners</Text>
                </ListItem>
              </CollapseBody>
            </Collapse>
            {/* 9 line */}
            <Collapse>
              <CollapseHeader style={styles.textBox}>
                <Separator bordered>
                  <Text style={styles.textHead}>Baby Care</Text>
                </Separator>
              </CollapseHeader>
              <CollapseBody>
                <ListItem >
                  <Text style={styles.textBody}>Baby Grooming</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.textBody}>Baby Bath & Hygiene</Text>
                </ListItem>
                <ListItem last>
                  <Text style={styles.textBody}>Baby accessories</Text>
                </ListItem>
                <ListItem last>
                  <Text style={styles.textBody}></Text>
                </ListItem>
                <ListItem last>
                  <Text style={styles.textBody}></Text>
                </ListItem>
              </CollapseBody>
            </Collapse>
         
        </View>
      
        </View>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    paddingTop: 50,
  },
  header: {
    paddingTop: 10,
    height: 80,
    backgroundColor: '#3f8fd1',
    alignItems: 'center',
    justifyContent: 'center',
},
  textBox: {
    width: "100%",
    height: 60,
  },
  textHead: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 5,
    alignItems: 'center',
    
  },
  textBody: {
    // marginVertical: 5,
    fontSize: 15,
    //marginLeft: 5,

  },
  image:
  {
   
    width: 60,
    height: 60,
    marginTop: 10,
    alignContent: "flex-start",
  },

})
