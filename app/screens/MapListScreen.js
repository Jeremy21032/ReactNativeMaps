import { StyleSheet, Text, FlatList, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { ListItem } from 'react-native-elements'
const response = [
    {
        id: '1',
        title: 'Cuiabá',
    },
    {
        id: '2',
        title: 'Campo Grande',
    },
    {
        id: '3',
        title: 'São Paulo',
    },
    {
        id: '4',
        title: 'Rio de Janeiro',
    },
    {
        id: '5',
        title: 'Ceará',
    },
    {
        id: '6',
        title: 'Rio Grande do Sul',
    },
    {
        id: '7',
        title: 'Acre',
    }
]
export const MapListScreen = ({navigation}) => {
    return (
        <>
            <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
                <FlatList
                    data={response}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.button}
                                onPress={() => { 
                                    navigation.navigate("MapDetail", {item: item})
                                }}>
                                <Text>{item.title}</Text>
                            </TouchableOpacity>)
                    }}
                />
            </SafeAreaView>
        </>
    )
}



const styles = StyleSheet.create({
    container: {
        margin: 4,
        padding: 20
    }, button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginVertical: 2
    },
})