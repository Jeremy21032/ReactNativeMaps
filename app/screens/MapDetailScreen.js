import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

export const MapDetailScreen = ({ navigation, route }) => {
    let _id = null;
    let _title = null;
    if (route != null && route.params != null && route.params.item != null) {

        const mapInfo = route.params.item;
        _id = mapInfo.id;
        _title =mapInfo.title;
        // console.log(mapInfo)
    }
    return (
        <View>
            <Text style={{ fontSize: 48 }}>{_title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({})