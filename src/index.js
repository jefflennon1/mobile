import React, { useState, useEffect} from 'react';
import {SafeAreaView,FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import api from '../services/api';


export default function  App(){
const [ comments, setComments ] = useState([]);

useEffect(()=>{
  api.get('all').then(response =>{
   setComments(response.data.docs);
    console.log(response.data.docs.name)
  }).catch(error =>{
    console.log(error)
  })
}, [comments]);
async function handleAddComment(){
  const response = await api.post('/', {
    name: "Pessoa física",
    email: "jefferson@gmai.com.br",
    comment: "muito bom!"
  })
}


  return (
    <>

      <SafeAreaView style={styles.container}>
        <FlatList
        data={comments}
        keyExtractor={ comment => comment._id}
        renderItem={({item: comment })=>(
          <Text style={styles.title}>{comment.name}</Text> 
        )}
        />
        <TouchableOpacity activeOpacity={0.5} style={styles.buttom} onPress={handleAddComment}>
          <Text style={styles.buttomText}>Adicionar novo Comentário</Text>
        </TouchableOpacity>
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
  },
  buttom:{
    backgroundColor: '#fafafa',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 20 
  },
  buttomText:{
    color: '#7159c1',
    textAlign: 'center'
  }
})