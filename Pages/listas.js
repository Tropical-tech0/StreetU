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
    img: 'https://www.elasviajando.com.br/wp-content/uploads/2019/03/por-do-sol-na-praia-grande.jpg'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    img: 'https://www.pousadadossonhos.com.br/wp-content/uploads/2017/12/147772-atividades-na-praia-6-opcoes-diferentes-para-curtir-com-a-familia-1-1280x720.jpg'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    img: 'https://i0.wp.com/www.mildicasdemae.com.br/wp-content/uploads/2019/12/1539.jpg?resize=600%2C400&ssl=1'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    img: 'https://i.pinimg.com/originals/fa/bb/6b/fabb6b060ad01d5cd036c9784bb31344.jpg'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    img: 'https://st3.depositphotos.com/3591429/13179/i/1600/depositphotos_131795536-stock-photo-people-playing-with-ball-on.jpg'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    img: 'https://thumbs.dreamstime.com/b/equipe-dos-amigos-que-saltam-na-praia-16377269.jpg'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    img: 'https://a.cdn-hotels.com/gdcs/production20/d1304/098351e7-4800-426c-af28-fbe6f6047c14.jpg'
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

export default function Lista () {
 
return (
    <ScrollView  style={styles.container} >
    <View style={styles.container}>
    <Image
        style={styles.ImagLogo}
        source={require('../img/Street.png')}
        />

    <Image
    style={styles.perfil}
    source={require('../img/perfil1.png')}
    />
      <Image
    style={styles.Forma}
    source={require('../img/Traço.png')}
    />

    <Text style={styles.textPerfil}> APROVEITANDO OS DIAS DE VERÃO!   
    </Text> 

    <Text style={styles.TextNome}> Suzana Silva   
    </Text> 
    <FlatList 
    showsHorizontalScrollIndicator = {false}
    horizontal
    data={DATA}
    renderItem={renderItem2}
    keyExtractor={item => item.img }
    style={{  marginTop:-55,  width: 500}}
    />




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
  marginLeft: 16,
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
  