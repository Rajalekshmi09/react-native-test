import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image ,TouchableOpacity} from 'react-native';
import { Data } from '../app-utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from '../components/Home/SearchBar';

export default class List extends Component {
    render() {
        const item = Data.map((item, index) => {

            return <View key={item.id} style={styles.item}>
                
                <Image
                    source={{ uri: item.imageurl }}
                    style={{ width: 70, height: 70, margin: 5 }}
                >
                </Image>
                <TouchableOpacity>
                <Text style={styles.text}>{item.text} </Text></TouchableOpacity>
                     <View style={styles.chevron}>   
                        <Icon name="chevron-down" size={15} style={styles.moreIcon}/>
                    </View> 
            </View>
        })
        return (
            <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.header}>
                   <SearchBar/>
                </View>
               
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
        //paddingTop: 30,
      },
    header: {
        paddingTop: 20,
        height: 100,
        backgroundColor: '#3f8fd1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    contentContainer: {
        backgroundColor: '#f2f5f5',
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        alignItems: 'center',
        //justifyContent: 'space-between'
    },
    marginLeft: {
        marginLeft: 5,
    },
    
    text: {
        marginVertical: 30,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10, 
      
    },
    
    chevron: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'flex-end',
      
       
    },
    moreIcon: {
        color: "#d6d7da",
        alignContent: 'flex-end',
       },
}) 