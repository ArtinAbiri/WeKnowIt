import * as React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";
import {getLargestCities} from "../Api/ApiDataFetch.js";


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
    let returnButton = "\u21E6 Citypop";

    return (
        <View style={style.container}>

            {isLoading ? <Text>Loading...</Text> :
                (
                    <View style={style.buttonCluster}>
                        <TouchableOpacity style={style.button} onPress={firstButtonNavHandler}>
                            <Text style={{color: '#FFFFFF', fontSize: 20}}>{data[0]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.button} onPress={SecondButtonNavHandler}>
                            <Text style={{color: '#FFFFFF', fontSize: 20}}>{data[1]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.button} onPress={ThirdButtonNavHandler}>
                            <Text style={{color: '#FFFFFF', fontSize: 20}}>{data[2]}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            <View style={{position: 'absolute', top: '30%'}}>
                <Text style={{fontSize: 45}}>{routeText}</Text>
            </View>

            <View style={style.backButton}>
                <Button title={returnButton} onPress={() => navigation.popToTop()}/>
            </View>
        </View>);
}
export default CountryCities;

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

    }, buttonCluster: {
        position: 'absolute',
        width: '120%',
        top: '45%',
        justifyContent: 'center',
        alignItems: 'center'
    }, button: {
        width: '70%',
        alignItems: "center",
        backgroundColor: "#00ACEE",
        padding: 20,
        borderRadius: 8,
        margin: 5
    }

});