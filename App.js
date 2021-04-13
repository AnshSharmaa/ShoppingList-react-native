import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItems';
import AddItem from './components/AddItem';

const App = () => {

  const [items, setItems] = useState([
    {
      id: 12,
      text: 'Milk',
    },
    {
      id: 2,
      text: 'Eggs',
    },
    {
      id: 4,
      text: 'Bread',
    },
    {
      id: 5,
      text: 'Juice',
    },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert("Error", "Item name cannot be empty", [{ text: "Ok", },],);
    } else {
      setItems(prevItems => {
        //here text is equal to typing text:text
        return [{ id: Math.random(), text }, ...prevItems];
      });
    }
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;