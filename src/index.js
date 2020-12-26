import React, { useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, ScrollView, Text, StyleSheet, StatusBar } from 'react-native';
import api from '../services/api';


export default function  App(){
const [ comments, setComments ] = useState([]);

useEffect(()=>{
  api.get('/all').then(response =>{
    setComments(response.data.docs);
    console.log(comments)
  })
}, [])

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
        data={comments}
        keyExtractor={ comment => comment._id}
        renderItem={({item})=>(
          <Text style={styles.title}>{item.name}</Text> 
        )}
        />
      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  container :{
    flex: 1,
    backgroundColor: '#7159c1',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fafafa',
    textAlign: 'center',
    fontFamily: 'sans-serif'
  }
})