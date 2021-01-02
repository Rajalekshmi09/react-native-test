import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../pages/Home';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, Divider } from 'react-native-paper';
import { ScrollView } from "react-native-gesture-handler";
const DrawerMenu = () => {
  const drawer = useRef(null);
  //const [drawerPosition, setDrawerPosition] = useState("left");
  // const changeDrawerPosition = () => {
  //   if (drawerPosition === "left") {
  //     setDrawerPosition("right");
  //   } else {
  //     setDrawerPosition("left");
  //   }
  // };

  const navigationView = () => (
    <View>
      <View style={[styles.drawercontainer, styles.header, styles.navigationContainer]}>

        <View style={{ marginTop: 15 }}>
          <View style={{ paddingLeft: 10, flexDirection: 'row' }}>
            <Avatar.Image
              source={require('../../assets/image/mango.png')}
              size={50}
            />
            <Text style={styles.paragraph}>Hello,</Text>
          </View>
          <View style={{ marginLeft: 30, flexDirection: 'column' }}>
            <Title style={styles.title}>RajaLekshmi</Title>
            <Caption style={styles.caption}></Caption>
          </View>
        </View>
        <View style={{ marginTop: 15, }}>
          <Icon name="x" size={30} color="black" onPress={() => drawer.current.closeDrawer()} />
        </View>
        {/* <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      /> */}
      </View>
      <View>
        <Drawer.Section>
          <Drawer.Item
            icon={() => (<Icon2 name="home-outline" style={{ fontSize: 30, color: 'grey' }} />)}
            label="Home"
            onPress={() => { props.navigation.navigate('Home') }}
          />

          <Drawer.Item
            icon={() => (<Icon2 name="basket" style={{ fontSize: 30, color: 'grey' }} />)}
            label="Shop by category"
            onPress={() => { props.navigation.navigate('Home') }}
          />
          <Drawer.Item
            icon={() => (<Icon2 name="star-outline" style={{ fontSize: 30, color: 'grey' }} />)}
            label="Today's Deal"
            onPress={() => { props.navigation.navigate('Home') }}
          />
          <Divider />
          <Drawer.Item
            icon={() => (<Icon2 name="account-outline" style={{ fontSize: 30, color: 'grey' }} />)}
            label="Profile"
            onPress={() => { props.navigation.navigate('Profile') }}
          />
          <Drawer.Item
            icon={() => (<Icon2 name="basket-fill" style={{ fontSize: 30, color: 'grey' }} />)}
            label="Your Order"
            onPress={() => { props.navigation.navigate('wallet') }}
          />
          <Drawer.Item
            icon={() => (<Icon2 name="cards-heart" style={{ fontSize: 30, color: 'grey' }} />)}
            label="Wish List"
            onPress={() => { props.navigation.navigate('wallet') }}
          />
          <Drawer.Item
            icon={() => (<Icon2 name="wallet-outline" style={{ fontSize: 30, color: 'grey' }} />)}
            label="Your Account"
            onPress={() => { props.navigation.navigate('wallet') }}
          />
          <Divider />
          <Drawer.Item
            icon={() => (<Icon2 name="settings-outline" style={{ fontSize: 30, color: 'grey' }} />)}
            label="Settings"
            onPress={() => { props.navigation.navigate('Settings') }}
          />
          <Drawer.Item
            icon={() => (<Icon2 name="account-check-outline" style={{ fontSize: 30, color: 'grey' }} />)}
            label="Support"
            onPress={() => { props.navigation.navigate('Support') }}
          />
        </Drawer.Section>
      </View>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      // drawerPosition={drawerPosition}
      renderNavigationView={navigationView}    >
      <View>
        <View style={styles.container}>
          <View style={{ paddingTop: 30 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', alignContent: 'flex-start' }}>Welcome to</Text>
            <Text style={{ fontSize: 38, color: 'white', fontWeight: 'bold' }}>
              Annachi App
          </Text>
          </View>
          <View style={styles.header}>
            <View style={{ marginLeft: 10, }}>
              <Icon name="menu" size={30} color="black" onPress={() => drawer.current.openDrawer()} />
            </View>

            <View style={styles.searchBar}>
              <Icon name="search" size={20} color="Lightgray" />
              <TextInput placeholder="Search" style={styles.input} />
            </View>

            <View style={styles.cart}>
              <Icon1 name="shoppingcart" size={35} color="black" />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>0</Text>
              </View>
            </View>
          </View>
        </View>
        <ScrollView>

          <Home />
        </ScrollView>

      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#73a2d4',
  },
  header: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  paragraph: {
    padding: 5,
    fontSize: 30,
    //fontWeight: 'bold',
    fontFamily: ' sans-serif'
  },
  searchBar: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginHorizontal: 12,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    paddingVertical: 5,
  },
  cart: {
    paddingRight: 10,
  },
  badge: {
    position: 'absolute',
    backgroundColor: '#E6848C',
    width: 18,
    height: 18,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    right: -2,
    top: -5,
  },
  badgeText: {
    color: '#fff',
  },
  drawercontainer: {
    //flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
    //padding: 16,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: 'bold',
    paddingLeft: 30,
  },
});

export default DrawerMenu;