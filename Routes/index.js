import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../Pages/Home';
import Lista from '../Pages/listas';
import procurar from '../Pages/procurar';
import maps from '../Pages/maps';

const Tab = createBottomTabNavigator();

export default function Routes() {
    
    return (
  
        <Tab.Navigator
        tabBarOptions={{ 
         activeTintColor: '#fff',
         inactiveTintColor: '#777',
        }}
        screenOptions={{ 
        tabBarStyle: { backgroundColor: '#000000' , 
        borderTopColor: 'transparent'
          }
          }}
              >
            <Tab.Screen 
             name="INICIO" component={Home}
             options={{
                tabBarIcon: ({ color, size }) => (
                 <Icon name="home" color="#fff" size={25} />
                ),
                headerShown: false }} 
             />
             <Tab.Screen 
             name="BUSCAR" component={procurar}
             options={{
             tabBarIcon: ({ color, size }) => (
             <Icon name="search" color="#fff" size={25} /> 
             ),
             headerShown: false }} 
              />
             <Tab.Screen 
             name="LISTAS" component={Lista}
             options={{
            tabBarIcon: ({ color, size }) => (
           <Icon name="bookmark-outline" color="#fff" size={25} />
                ),
                headerShown: false }} 
             />
              <Tab.Screen 
             name="MAPA" component={maps}
             options={{
             tabBarIcon: ({ color, size }) => (
            <Icon name="map" color="#fff" size={25} />
              ),
              headerShown: false }} 
           />
   
        </Tab.Navigator>

    );
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
});
