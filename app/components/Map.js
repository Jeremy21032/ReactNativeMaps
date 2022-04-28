import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MapView, { Polygon } from 'react-native-maps'
import { getLocation } from '../services/MapService';
const height = Dimensions.get('window').height;

export default class Map extends React.Component {

    state = {
        coordinates: [
            {
                id: '1',
                latitude: -0.18683,
                longitude: -78.50838,
                title: 'Cuiabá',
                description: 'Cuiabá',
            },
            {
                id: '2',
                latitude: -0.18774,
                longitude: -78.50681,
                title: 'Campo Grande',
                description: 'Campo Grande',
                category: 1,
            },
            {
                id: '3',
                latitude: -0.18874,
                longitude: -78.50508,
                title: 'São Paulo',
                description: 'São Paulo',
                category: 1,
            },
            {
                id: '4',
                latitude: -0.18948,
                longitude: -78.50378,
                title: 'Rio de Janeiro',
                description: 'Rio de Janeiro',
                category: 1,
            },
            {
                id: '5',
                latitude: -0.19033,
                longitude: -78.50231,
                title: 'Ceará',
                description: 'Ceará',
                category: 1,
            },
            {
                id: '6',
                latitude: -0.19103,
                longitude: -78.50109,
                title: 'Rio Grande do Sul',
                description: 'Rio Grande do Sul',
                category: 1,
            },
            {
                id: '7',
                latitude: -0.19222,
                longitude: -78.49902,
                title: 'Acre',
                description: 'Acred',
                category: 1,
            }, {
                id: '8',
                latitude: -0.1928,
                longitude: -78.49801,
                title: 'Cuiabá',
                description: 'Cuiabá',
            },
            {
                id: '9',
                latitude: -0.19178,
                longitude: -78.49757,
                title: 'Campo Grande',
                description: 'Campo Grande',
                category: 1,
            },
            {
                id: '10',
                latitude: -0.1899,
                longitude: -78.49672,
                title: 'São Paulo',
                description: 'São Paulo',
                category: 1,
            },
            {
                id: '11',
                latitude: -0.18891,
                longitude: -78.49628,
                title: 'Rio de Janeiro',
                description: 'Rio de Janeiro',
                category: 1,
            },
            {
                id: '12',
                latitude: -0.18736,
                longitude: -78.49557,
                title: 'Ceará',
                description: 'Ceará',
                category: 1,
            },
            {
                id: '13',
                latitude: -0.18657,
                longitude: -78.49522,
                title: 'Rio Grande do Sul',
                description: 'Rio Grande do Sul',
                category: 1,
            },
            {
                id: '14',
                latitude: -0.18627,
                longitude: -78.4958,
                title: 'Acre',
                description: 'Acred',
                category: 1,
            }, {
                id: '15',
                latitude: -0.18579,
                longitude: -78.49696,
                title: 'Cuiabá',
                description: 'Cuiabá',
            },
            {
                id: '16',
                latitude: -0.18462,
                longitude: -78.4998,
                title: 'Campo Grande',
                description: 'Campo Grande',
                category: 1,
            },
            {
                id: '17',
                latitude: -0.18386,
                longitude: -78.50137,
                title: 'São Paulo',
                description: 'São Paulo',
                category: 1,
            },
            {
                id: '18',
                latitude: -0.18388,
                longitude: -78.50206,
                title: 'Rio de Janeiro',
                description: 'Rio de Janeiro',
                category: 1,
            },
            {
                id: '19',
                latitude: -0.18373,
                longitude: -78.50277,
                title: 'Ceará',
                description: 'Ceará',
                category: 1,
            },
            {
                id: '20',
                latitude: -0.18284,
                longitude: -78.50375,
                title: 'Rio Grande do Sul',
                description: 'Rio Grande do Sul',
                category: 1,
            },
            {
                id: '21',
                latitude: -0.18212,
                longitude: -78.5044,
                title: 'Acre',
                description: 'Acred',
                category: 1,
            }, {
                id: '22',
                latitude: -0.18146,
                longitude: -78.50507,
                title: 'Cuiabá',
                description: 'Cuiabá',
            },
            {
                id: '23',
                latitude: -0.18234,
                longitude: -78.50564,
                title: 'Campo Grande',
                description: 'Campo Grande',
                category: 1,
            },
            {
                id: '24',
                latitude: -0.18411,
                longitude: -78.5068,
                title: 'São Paulo',
                description: 'São Paulo',
                category: 1,
            },
            {
                id: '25',
                latitude: -0.18478,
                longitude: -78.50723,
                title: 'Rio de Janeiro',
                description: 'Rio de Janeiro',
                category: 1,
            }, {
                id: '26',
                latitude: -0.18606,
                longitude: -78.50803,
                title: 'Rio de Janeiro',
                description: 'Rio de Janeiro',
                category: 1,
            },
        ]
    }

    render() {

        return (
            <MapView
                style={styles.map}
                loadingEnabled={true}
                region={{
                    latitude: -0.18621,
                    longitude: -78.50208,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.015
                }}
            >

                {/* {this.state.coordinates.map(marker => (
                    <MapView.Marker
                        key={marker.id}
                        coordinate={{latitude:marker.latitude, longitude:marker.longitude}}
                   title={marker.title}
                        description={marker.description}
                    />
                ))
                } */}

                    <Polygon coordinates={this.state.coordinates} fillColor={'rgba(100,200,200,0.3)'} strokeColor="coral" strokeWidth={3}  />


            </MapView>
        )
    }
}


const styles = StyleSheet.create({
    map: {
        height: height,
    }
})