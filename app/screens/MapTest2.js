import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Polygon } from 'react-native-maps'

const height = Dimensions.get('window').height;
export const MapTest2 = ({ route }) => {
    let coordinates =null;
    let final = null;
    if (route != null && route.params != null && route.params.item != null) {
        console.log(route.params)
        coordinates=route.params.item;
        final=coordinates.sort();
    }
    return (
        <View>
            <Text style={{fontSize:50}}>MapTest2</Text>
            {coordinates==null ? <></> : <MapView
                style={styles.map}
                loadingEnabled={true}
                region={{
                    latitude: -0.18621,
                    longitude: -78.50208,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.015
                }}
            >

                {coordinates.sort((a,b)=>a.id-b.id).map(marker => (
                    <MapView.Marker
                        key={marker.id}
                        coordinate={{latitude:marker.latitude, longitude:marker.longitude}}
                   title={marker.title}
                        description={marker.description}
                    />
                ))
                } 

                <Polygon coordinates={final} fillColor={'rgba(100,200,200,0.3)'} strokeColor="coral" strokeWidth={3} />


            </MapView>}
        </View>
    )
}


const styles = StyleSheet.create({
    map: {
        height: height,
    }
})