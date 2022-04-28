import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native";
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
//Vistas 
import { HomeScreen } from './app/screens/HomeScreen';
import { MapScreen } from './app/screens/MapScreen';
import { MapListScreen } from './app/screens/MapListScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MapDetailScreen } from './app/screens/MapDetailScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { MapTestScreen } from './app/screens/MapTestScreen';
import { loadFirebaseConfiguration } from './app/util/FirebaseConfiguration';
import React from 'react';
import { getLocation } from './app/services/MapService';
import { MapTest2 } from './app/screens/MapTest2';
import { LogBox } from 'react-native';
import _ from 'lodash';
//Constantes de Navegación
const NativeStackNavigator = createNativeStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();
//Funciones de navegación

function RootNav() {
  return (
    <BottomTabNavigator.Navigator initialRouteName="MapTest" screenOptions={{
      headerShown: false, tabBarActiveTintColor: 'red',
    }} >
      <BottomTabNavigator.Screen name='MapTest' component={MapTestScreen} options={{ tabBarIcon: ({ color }) => (<Icon name="md-map" color={color} size={30} />), tabBarShowLabel: false }} />
      <BottomTabNavigator.Screen name='MapTest2' component={MapTest2} options={{ tabBarIcon: ({ color }) => (<Icon name="md-map" color={color} size={30} />), tabBarShowLabel: false }} />
      <BottomTabNavigator.Screen name='MapScreen' component={MapScreen} options={{ tabBarIcon: ({ color }) => (<Icon name="md-map" color={color} size={30} />), tabBarShowLabel: false }} />
      <BottomTabNavigator.Screen name='MapList' component={ListFlow} options={{ tabBarIcon: ({ color }) => (<Icon name="ios-list" color={color} size={30} />), tabBarShowLabel: false }} />

    </BottomTabNavigator.Navigator>
  );
}
function ListFlow() {
  return (
    <NativeStackNavigator.Navigator>
      <NativeStackNavigator.Screen name="Maps" component={MapListScreen} />
      <NativeStackNavigator.Screen name="MapDetail" component={MapDetailScreen} />

    </NativeStackNavigator.Navigator>
  );
}


export default function App() {
  loadFirebaseConfiguration();

LogBox.ignoreLogs(['Warning:...']); // ignore specific logs
LogBox.ignoreAllLogs(); // ignore all logs
const _console = _.clone(console);
console.warn = message => {
if (message.indexOf('Setting a timer') <= -1) {
   _console.warn(message);
   }
};

  return (
    <NavigationContainer>
      <RootNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
