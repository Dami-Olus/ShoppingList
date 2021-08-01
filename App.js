import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList, Alert } from 'react-native'
import uuid from 'react-native-uuid';

import Header from './components/Header'
import ListItem from './components/ListItem';
import AddItems from './components/AddItems';

function App() {
  

  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Bread'},
    {id: uuid.v4(), text: 'Juice'},

  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
    if(!text){
        Alert.alert('Error', 'Please enter an item' );
    } else{
      setItems(prevItems => {
        return [{id: uuid.v4, text}, ...prevItems];
      })
    }
  
  }

  return (
    <View style={styles.container}>
      <Header  />
      <AddItems addItem={addItem} />
  <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />} />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 60,
  },

  

  
})

export default App
