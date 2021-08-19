import * as React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import {useEffect, useState} from "react";
import {getCityPopulation} from "../Api/ApiDataFetch.js";


const PopulationDetail = ({navigation, route}) => {
    const {routeText} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        getCityPopulation(routeText.toString())
            .then((response) => {
                setData(response);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    function onPressStartTheGame() {
        console.log("Pushed button Start the Game!")
        //dispatch({ type: ADD_PLAYER_NAME, playerNumber: 5, playerName: "Sandro" })

    }

    let returnButton = "\u21E6 Citypop";

    return (
        <View style={{flex: 1, padding: 24}}>

            {isLoading ? <Text>Loading...</Text> :
                (<View style={style.container}>
                        <View style={{position: 'absolute', top: '30%'}}>
                            <Text style={{fontSize: 45, textAlign: 'center'}}>{routeText.toUpperCase()} </Text>
                        </View>
                        <View style={{
                            position: 'absolute',
                            top: '45%',
                            borderWidth: 3,
                            borderColor: 'lightblue',
                            width: '90%',
                            height: '15%%',
                            justifyContent: 'center'
                        }}>
                            <Text style={{fontSize: 25, textAlign: 'center'}}>POPULATION</Text>
                            <Text style={{fontSize: 42, textAlign: 'center'}}>{data}</Text>
                        </View>
                    </View>
                )}
            <View style={style.backButton}>
                <Button title={returnButton} onPress={() => navigation.popToTop()}/>
            </View>
        </View>);
}
export default PopulationDetail;

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 10
    }
});