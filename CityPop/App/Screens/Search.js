import * as React from 'react';
import {View, StyleSheet, Button, Alert, TouchableOpacity, Image, Text} from "react-native";
import {TextInput} from 'react-native-paper';
import {useState} from "react";
import {checkIfCityExists, checkIfCountryValid} from "../Api/ApiDataFetch";


const Search = ({navigation, route}) => {
    const [text, setText] = useState('');
    const {searchType} = route.params;


    const handleSearch = handler => {
        if (searchType.toString() === "City") {
            checkIfCityExists(text).then((response) => {
                if (response)
                    navigation.navigate('PopulationDetail', {routeText: text})
                else
                    Alert.alert('City does not exist')
            })
        } else {
            checkIfCountryValid(text)
                .then((response) => {
                    if (response)
                        navigation.navigate('CountryCities', {routeText: text})
                    else
                        Alert.alert('Country does not exist')
                })
        }
    };
    let returnButton = "\u21E6 Citypop";

    return (
        <View style={style.container}>
            <View style={style.backButton}>
                <Button title={returnButton} onPress={() => navigation.popToTop()}/>
            </View>

            <View style={{position: 'absolute', top: '30%'}}>
                <Text style={{fontSize: 45, textAlign: 'center'}}>SEARCH BY {'\n'} {searchType.toUpperCase()}</Text>
            </View>

            <View style={style.textBox}>
                <TextInput
                    theme={{colors: {primary: '#00ACEE', underlineColor: 'transparent'}}}
                    label={"Search " + searchType.toString()}
                    value={text}
                    onChangeText={text => setText(text)}
                />
            </View>
            <View style={{position: 'absolute', bottom: '38%'}}>
                <TouchableOpacity activeOpacity={0.5} onPress={handleSearch} style={style.roundButton}>

                    <Image style={style.image}
                           source={require('../../assets/search.png')}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default Search;

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
    },
    textBox: {
        width: '85%',
    },
    roundButton: {
        width: 60,
        height: 60,
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'lightblue'
    }, image: {
        flex: 1,
        alignSelf: 'center',
        width: '100%',
        height: undefined,
        resizeMode: 'contain'
    }
});