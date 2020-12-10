import React, { Component } from 'react';
import { Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
var {height, width } = Dimensions.get('window');

export default class Profile extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      
      dataCategories:[],
      selectCatg:0
    }
  }

  componentDidMount(){
    const url = "http://tutofox.com/foodapp/api.json"
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        
        dataCategories: responseJson.categories
      });

    })
    .catch((error) =>{
      console.error(error);
    });
  }
  render() {
    return (
       <ScrollView>
        <View style={{ flex: 1,backgroundColor:"#f2f2f2" }}>
          
           <View style={{width:width, borderRadius:20, paddingVertical:20, backgroundColor:'white'}}>
             <Text style={styles.titleCatg}>Categories {this.state.selectCatg}</Text>
             <FlatList
               horizontal={true}
               data={this.state.dataCategories}
               renderItem={({ item }) => this._renderItem(item)}
               keyExtractor = { (item,index) => index.toString() }
             />
             <View style={{height:20}} />
          </View>

      </View>
       </ScrollView>
     
    );
  }
  _renderItem(item){
    return(
      <TouchableOpacity style={[styles.divCategorie,{backgroundColor:item.color}]}
      onPress={()=>this.setState({selectCatg:item.id})}>
        <Image
          style={{width:100,height:80}}
          resizeMode="contain"
          source={{uri : item.image}} />
        <Text style={{fontWeight:'bold',fontSize:22}}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
 
  divCategorie:{
    backgroundColor:'red',
    margin:5, alignItems:'center',
    borderRadius:10,
    padding:10
  },
  titleCatg:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:10
  } 
});