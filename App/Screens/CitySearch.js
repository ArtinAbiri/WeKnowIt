import * as React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";


const CitySearch = ({navigation}) => {
    return (
        <View style={style.container}>
            <View style={style.backButton}>
                <Button title="CityPop" onPress={() => navigation.popToTop()}/>
            </View>
            <Button title={"PopulationDetail"} onPress={() => navigation.navigate('PopulationDetail')}/>
        </View>
    )
}
export default CitySearch;

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