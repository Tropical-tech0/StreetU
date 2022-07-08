
import { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, ScrollView , FlatList, renderItem, TouchableOpacity, Button, Animated} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Modal } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    img: 'https://st2.depositphotos.com/1441511/11313/i/450/depositphotos_113137774-stock-photo-couple-fun-on-beach-romantic.jpg'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    img: 'https://thumbs.dreamstime.com/b/crian%C3%A7a-com-anel-do-brinquedo-na-piscina-87889148.jpg'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    img: 'https://exame.com/wp-content/uploads/2016/09/size_960_16_9_pessoas-dancando-na-praia3.jpg'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    img: 'https://r4t2s9v3.stackpathcdn.com/wp-content/uploads/2018/02/baladas-cancun.jpg'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/02/27133032/balada.jpeg'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    img: 'https://cdn.pixabay.com/photo/2019/02/17/03/53/love-4001504_960_720.jpg'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    img: 'http://passeiodebarcobuzios.com/wp-content/uploads/2018/10/ferias-de-inverno-na-praia-opcoes-de-diversao33-thumb-570.jpg'
  },


  
];

const lista = [
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


 //MODAL
const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
    
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default function Home () {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = React.useState(false);
  const [ligado, setLigado] = useState(false);
  const [desligado, setDesligado] = useState(false);
  const [lojas, setLojas] = useState(false); 
  const [lojas1, setLojas1] = useState(false);

  //renderizar item
  const renderItem = ({ item }) => (
    

    <View style = {styles.item2} >
    <Image  
        source={{uri: (item.img)}}
        style={{width:68, height: 68, borderRadius:34  }} 
        />
         </View>
      
  );

  const Tab = createBottomTabNavigator();

  const renderItem1 = ({ item, index }) => (
 
  <View >
       <Image 
        source={{uri: (item.img)}}
        style={{height: 400, width: 230, borderRadius: 8, }} 
       />
       
 
     <View  style={styles.barra} >
       
      <TouchableOpacity>
      <Icon   name="search" color="#fff" size={25} />
      </TouchableOpacity>

      <TouchableOpacity>
      <Icon style = {{ marginStart: 200, marginTop: -22}} name="share" color="#fff" size={25} />
      </TouchableOpacity>
 
      <TouchableOpacity>
     <Icon style = {{ marginStart: 175, marginTop: -25}} name="bookmark-outline" color="#fff" size={25}    />
     </TouchableOpacity>

     <TouchableOpacity >
     <Text  style={styles.textCarrousel}> LOJAS 
     </Text>
     
     </TouchableOpacity>



      </View> 


  </View>

    
    
      


   );

  const renderItem2 = ({ item }) => (
    
    <TouchableOpacity onPress={() => setVisible(true)} >
   
     <Image   
         source={{uri: (item.img)}}
         style={styles.Imagem} 
      
         />
         </TouchableOpacity>
   );

   const lista1 = ({ item }) =>  (
    
    <TouchableOpacity onPress={() => setVisible(true)} >
     <Image   
         source={{uri: (item.img)}}
         style={styles.Imagem} 
         />
         </TouchableOpacity>
   );

   return (
    

    <ScrollView  style={styles.container} >
    <View >
    <LinearGradient 
  style={{
	height: 1200, 
	width: 1200, 
  position: 'absolute',
	borderRadius: 5}}

	start={{x:1,y:0}}
	end={{x:0,y:1}}
	colors={['#454B51','#121212']}>

</LinearGradient>
     <View >
     <TouchableOpacity>
     
     <Icon style={{ position : 'absolute' ,  marginTop: 45, alignSelf: 'flex-end'}}
      name="more-vert" color="#F64747" size={35} 
          /> 
     </TouchableOpacity>
</View>
  
     

   
      <Image
        style={styles.ImagLogo}
        source={require('../img/Street.png')}
        />
        
       <Text style={styles.TextLoja}> LOJAS   
        </Text> 

        <FlatList 
        showsHorizontalScrollIndicator = {false}
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.img }
        style={{  marginTop:-40, marginHorizontal: 72, width: 420}}
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


 <View>

 <TouchableOpacity onPress={() => setLigado (true)} 
 style= {{position: 'relative', alignSelf: 'flex-end', marginTop: -20 , marginEnd: 20,  }}>
   <Icon  name="keyboard-arrow-down" color="#fff" size={30}   />   
   </TouchableOpacity>

     {ligado?
   <View style = {{ marginLeft: -55}}>  
  <Text style={styles.TextNome}>  
   Criada em 23/05/2022       {'\n'}
   Por TimeOut Porto e outros       {'\n'}
   Lista pública . 1203 views . 60 partilhas      {'\n'}
   11 imagens . 1 filme      {'\n'}
   7 lojas       {'\n'}
   </Text> 

    <View>
    <TouchableOpacity onPress={() => setLojas (true)} 
 style= {{position: 'relative', alignSelf: 'center', marginTop: -34 , marginEnd: 210 }}>
   <Icon  name="keyboard-arrow-down" color="#fff" size={23}   />   
   </TouchableOpacity>

   {lojas?
 <View style = {{ alignItems: 'center', marginEnd: 40}}>
   <Text style={styles.TextNome}>  
Marques soares  {'\n'}
Zara  {'\n'}
Candido dos Reis  {'\n'}
Essa  {'\n'}
Outra que tal  {'\n'}
Boi Preto  {'\n'}
Bar da esquina  {'\n'}
   </Text>   

<View >
<TouchableOpacity onPress={() => setLigado(false)} 
 style= {{position: 'relative', alignSelf: 'center', marginTop: -70 , marginStart: 200}}>
       <Icon  name="keyboard-arrow-down" color="#F64747" size={50}   />
</TouchableOpacity>
</View>

</View>   
  :
<Text>  </Text>
}
</View>
</View>
  :
  <Text>  </Text>
} 
 
   




 </View>


    
       <FlatList 
        showsHorizontalScrollIndicator = {false}
        horizontal
        data={DATA}
        renderItem={renderItem2} 
        keyExtractor={item => item.img }
        
      
        />
    <Image
        style={styles.perfil}
        source={require('../img/perfil2.png')}
        />
          <Image
        style={styles.Forma}
        source={require('../img/Traço.png')}
        />

        <Text style={styles.textPerfil}> APROVEITANDO OS DIAS DE VERÃO!   
        </Text> 

        <Text style={styles.TextNome}> Thiago Borges  
        </Text> 
        
        <View>

 <TouchableOpacity onPress={() => setDesligado (true)} 
 style= {{position: 'relative', alignSelf: 'flex-end', marginTop: -20 , marginEnd: 20,  }}>
   <Icon  name="keyboard-arrow-down" color="#fff" size={30}   />   
   </TouchableOpacity>

     {desligado?
   <View style = {{ marginLeft: -55}}>  
  <Text style={styles.TextNome}>  
   Criada em 23/05/2022       {'\n'}
   Por TimeOut Porto e outros       {'\n'}
   Lista pública . 1203 views . 60 partilhas      {'\n'}
   11 imagens . 1 filme      {'\n'}
   7 lojas       {'\n'}
   </Text> 

    <View>
    <TouchableOpacity onPress={() => setLojas1 (true)} 
 style= {{position: 'relative', alignSelf: 'center', marginTop: -34 , marginEnd: 210 }}>
   <Icon  name="keyboard-arrow-down" color="#fff" size={23}   />   
   </TouchableOpacity>

   {lojas1?
 <View style = {{ alignItems: 'center', marginEnd: 40}}>
   <Text style={styles.TextNome}>  
Marques soares  {'\n'}
Zara  {'\n'}
Candido dos Reis  {'\n'}
Essa  {'\n'}
Outra que tal  {'\n'}
Boi Preto  {'\n'}
Bar da esquina  {'\n'}
   </Text>   

<View >
<TouchableOpacity onPress={() => setDesligado(false)} 
 style= {{position: 'relative', alignSelf: 'center', marginTop: -70 , marginStart: 200}}>
       <Icon  name="keyboard-arrow-down" color="#F64747" size={50}   />
</TouchableOpacity>
</View>

</View>   
  :
<Text>  </Text>
}
</View>
</View>
  :
  <Text>  </Text>
} 
 
   




 </View> 
      
        <FlatList 
        showsHorizontalScrollIndicator = {false}
        horizontal
        data={lista}
        renderItem={lista1} 
        keyExtractor={item => item.img }
        />
      
      
       
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ModalPoup visible={visible}>
        <View >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Icon  name="close" color="#fff" size={25}    
                style={{height: 30, width: 30}}  />
                </TouchableOpacity>
                </View>
                 </View>
                  <View style={{alignItems: 'center'}}>
                   <Carousel
                        
                         data={lista}
                         ref={carouselRef}
                         sliderWidth= {500}
                         itemWidth= {224}
                         renderItem= {renderItem1} 
                         inactiveSlideOpacity={1.5}
                         inactiveSlideShift = { 20}
                        >

                      <View

                      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                     <ModalPoup visible={visible}> 
                     <View style={{alignItems: 'center'}}>
                     <View style={styles.header}>


                </View>
                 </View>
        
        </ModalPoup> 
        


                      </View>
               

              
       
              </Carousel> 
        </View>
      </ModalPoup>
    </View>

  







     
 
     
    

    </View>
   </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161613',
   
  },
  ImagLogo: {
  marginHorizontal: 12,
  marginLeft: 25,
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
   
    height: 70,
    width: 70,
    marginLeft: 2,
    borderWidth: 2,
    borderRadius : 35,
    borderColor: 'grey',
    justifyContent: 'center',
   alignItems: 'center',
  },
  

 
 perfil:{
  height: 70,
  width: 70,
  marginTop: 15,
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
    marginTop: -25,
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
     height: 250, 
     marginTop: 5, 
     borderRadius: 10,
     marginLeft: 5,
     alignSelf: 'center',
     alignContent: 'center',
    
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
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
width: 235,
marginTop: 370,
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
