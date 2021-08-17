import * as React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from "react-native";
import {useEffect, useState} from "react";
import {getCityPopulation} from "../Api/ApiDataFetch.js";
import async from "async";


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


    return (
        <View style={{flex: 1, padding: 24}}>
            <View style={style.backButton}>
                <Button title="CityPop" onPress={() => navigation.popToTop()}/>
            </View>
            {isLoading ? <Text>Loading...</Text> :
                (<View>
                        <Text>{data.title}</Text>
                        <Text>Population:</Text>
                        <Text>{data}</Text>
                    </View>
                )}
        </View>);
}
export default PopulationDetail;

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
    }
});