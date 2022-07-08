import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView , FlatList, renderItem, TouchableOpacity, Button, Animated} from 'react-native';
import { Modal } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './Home';
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      img: 'https://cruzeiro.com.br/media/fotos_noticias/17/03/2022/temp_nfaNvPQ.png'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      img: 'https://i.pinimg.com/736x/27/c7/11/27c71155eb59db1dc170775f17305879.jpg'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg'
    },
  
  
    
  ];

  const renderItem2 = ({ item }) => (
    
    <TouchableOpacity >
   
     <Image   
         source={{uri: (item.img)}}
         style={styles.Imagem} 
      
         />
         </TouchableOpacity>
   );

export default function maps () {
 
return (
    <ScrollView  style={styles.container} >
    <View style={styles.container}>

    <Image
        style={styles.ImagLogo}
        source={require('../img/Street.png')}
        />

   <Text style = {styles.TextLoja}>

    POXA, AINDA ESTAMOS EM MANUTENÇÃO!  {'\n'}
    <Text>
        EM BREVE ESTAREMOS TUDO FUNCIONANDO.  {'\n'}
        {'\n'}OBRIGADO!
    </Text>
   </Text>


</View> 
     
</ScrollView>

);
}
const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#161613',
     
    },
    ImagLogo: {
        alignSelf: 'center',
  
    marginTop: 50,
  
  
    
  },
  TextLoja: {
  fontSize: 16,
  alignSelf: 'center',
  color: '#FFF',
  marginTop: 45,
  fontWeight: 'bold',
  
  },
   
  item2:{
      marginLeft: 3,
      height: 70,
      width: 70,
      borderWidth: 2,
      borderRadius : 35,
      borderColor: 'grey',
      justifyContent: 'center',
     alignItems: 'center',
    },
    
  
   
   perfil:{
    height: 70,
    width: 70,
    marginTop: 70,
    borderRadius : 10
    
   },
    Forma: {  
   
      marginHorizontal: 70,
      width: 500,
      height: 1,
      borderRadius : -10,
      marginTop: -30,
    },
    textPerfil :{
  
      fontSize: 16,
  
      color: '#FFF',
      marginTop: -19,
      fontWeight: 'bold',
      alignSelf: 'flex-end',
      
  
    },
    TextNome: {
      fontSize: 16,
      color: '#FFF',
      marginHorizontal: 75,
      marginTop: 10,
  
    },
    Imagem :{
      width:150,
       height: 230, 
       marginTop: 70, 
       borderRadius: 10,
       marginLeft: 5,
       alignSelf: 'center',
       alignContent: 'center',
      
    },
    modalBackGround: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.6)',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      
    },
    modalContainer: {
      width: '100%',
      paddingHorizontal: 20,
      paddingVertical: 30,
      elevation: 20,
      
    },
    header: {
      width: '100%',
      height: 40,
      alignItems: 'flex-end',
      alignSelf: 'center'
    },
  barra : {
   
  
  position: 'absolute',
  backgroundColor: '#rgba(0,0,0,0.5)',
  width: 225,
  marginTop: 320,
  height: 30,
  borderRadius: 3
  },
  textCarrousel :{
    fontSize: 16,
    color: '#FFF',
    marginTop: -22,
    alignSelf: 'center',
  

  
    
  },
  });
  