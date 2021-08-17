import * as React from 'react';
import {View, Text, StyleSheet, Button, Alert} from "react-native";
import {TextInput} from 'react-native-paper';
import {useState} from "react";
import {checkIfCityExists, checkIfCountryValid} from "../Api/ApiDataFetch";


const Search = ({navigation, route}) => {
    const [text, setText] = useState('');
    const {searchType}= route.params;


    const handleSearch = handler => {
            if (searchType.toString()==="City"){
                checkIfCityExists(text).then((response) =>{
                    if (response)
                        navigation.navigate('PopulationDetail', {routeText: text})
                    else
                        Alert.alert('City does not exist')
                })
            }else {
                checkIfCountryValid(text)
                    .then((response) => {
                        if(response)
                            navigation.navigate('CountryCities', {routeText: text})
                        else
                            Alert.alert('Country does not exist')
                    })
            }
    };
    return (
        <View style={style.container}>
            <View style={style.backButton}>
                <Button title="CityPop" onPress={() => navigation.popToTop()}/>
            </View>
            <View style={style.textBox}>
                <TextInput

                    label={"Search " + searchType.toString()}
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <Button title={"Search"} onPress={handleSearch}/>
            </View>
        </View>
    )
}
export default Search;

const style = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 10
    },
    textBox:{
        width:'85%'
    }

            });