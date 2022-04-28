import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-navigation'
import  Icon  from 'react-native-vector-icons/Ionicons'
import Map from '../components/Map'


export const MapScreen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={{ fontSize: 50 }}>MapScreen</Text>
            <Map />
        </SafeAreaView>
    )
}
MapScreen.navigationOptions = {
    tabBarIcon: ({
        tintColor
    }) => (<Icon name="md-map" color={tintColor} size={30} />)
}

const styles = StyleSheet.create({})