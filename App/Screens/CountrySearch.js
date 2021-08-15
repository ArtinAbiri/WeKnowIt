import * as React from 'react';
import { TextInput } from 'react-native-paper';
import {View, Text, StyleSheet, Button} from "react-native";


const CountrySearch  = ({navigation}) => {
    return (
        <View style={style.container}>
            <View style={style.backButton}>
                <Button title="CityPop" onPress={() => navigation.popToTop()}/>
            </View>
            <Button title={"CountryCities"} onPress={() => navigation.navigate('CountryCities')}/>
        </View>
    )
}
export default CountrySearch;

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