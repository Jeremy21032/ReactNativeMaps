import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Overlay } from 'react-native-elements'
import { getLocation, getDirections } from '../services/MapService'
import { Picker } from '@react-native-picker/picker'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const MapTestScreen = ({ navigation }) => {
    const [coordinates, setCoordinates] = React.useState([]);
    const [directions, setDirections] = React.useState([]);
    const [stateArray, setStateArray] = React.useState([]);
    const [selectedValue, setSelectedValue] = React.useState("java");
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        getD();


        if (coordinates.length > 0) {
            //canContinue();
        }
    }, [coordinates])
        ;
    const getDirection = (location) => {
        getLocation(refreshScreen, location);

    }
    const getD = async () => {
        await getDirections(setDirections);
    }
    let canContinue = () => {
        navigation.navigate("MapTest2", { item: coordinates });
    }
    //para rescar la pantalla
    const refreshScreen = (personRetrieved) => {
        setCoordinates(personRetrieved);
    };
    //Open Overlay
    const toggleOverlay = () => {
        setVisible(!visible);
    };
    // let loadState = () => {
    //     let arrayTmp = [];
    //     let item = null;
    //     if (coordinates.length > 0) {
    //         for (let i = 0; i < coordinates.length; i++) {
    //             item = stateArray[i];
    //             arrayTmp.push(
    //                 <Picker.Item key={item.id} label={"a"} value={item.id} />
    //             );
    //             console.log(typeof item)
    //         }
    //     }
    //     return arrayTmp;
    // };

    return (
        <View style={styles.container}>
            <Text>MapTestScreen</Text>
            <Text>{coordinates.length}</Text>
            <Button title="Test La granja" onPress={() => {
                getDirection("La Granja")
            }} />
            <Button title="Test Altamarina" onPress={() => {
                getDirection("Altamarina")
            }} />
            <Button title="Open Overlay" onPress={toggleOverlay} />

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ height: height / 2, width: width / 1.25 }} >
                <FlatList
                    data={directions}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.button} onPress={()=>{
                                console.log(item)
                            }}>
                                <Text>{item}</Text>
                            </TouchableOpacity>)
                    }}
                />
            </Overlay>

            {/* <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150, }}

                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                {loadState()}
            </Picker> */}
            {/* <Text>{selectedValue}</Text> */}


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, map: {
        height: height,

    }, button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginVertical: 2
    },
})