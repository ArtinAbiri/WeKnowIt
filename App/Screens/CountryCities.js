import * as React from 'react';
import {View, Text, StyleSheet, Button, Alert} from "react-native";
import {useEffect, useState} from "react";
import {getCityPopulation, getLargestCities} from "../Api/ApiDataFetch.js";


const CountryCities = ({navigation, route}) => {
    const {routeText} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        getLargestCities(routeText.toString())
            .then((response) => {
                setData(response);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const firstButtonNavHandler = handler => {
        navigation.navigate('PopulationDetail', {routeText: data[0]})
    };
    const SecondButtonNavHandler = handler => {
        navigation.navigate('PopulationDetail', {routeText: data[1]})
    };
    const ThirdButtonNavHandler = handler => {
        navigation.navigate('PopulationDetail', {routeText: data[2]})
    };
    return (
        <View style={{flex: 1, padding: 24}}>
            <View style={style.backButton}>
                <Button title="CityPop" onPress={() => navigation.popToTop()}/>
            </View>
            {isLoading ? <Text>Loading...</Text> :
                (
                    <View style={style.buttonCluster}>
                        <Button title={data[0]} onPress={firstButtonNavHandler}/>
                        <Button title={data[1]} onPress={SecondButtonNavHandler}/>
                        <Button title={data[2]} onPress={ThirdButtonNavHandler}/>

                    </View>
                )}
        </View>);
}
export default CountryCities;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 10
    },  buttonCluster: {
        position: 'absolute',
        top: 0, left: 0,
        right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }

});