import React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";

const Home = ({navigation}) => {
    return (
        <View style={style.container}>
            <View style={{position: 'absolute', top: '30%'}}>
                <Text style={{fontSize: 45, textAlign: 'center'}}>CityPop</Text>
            </View>


            <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Search', {searchType: 'City'})}>
                <Text style={{color: '#FFFFFF', fontSize: 30}}>Search City</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button}
                              onPress={() => navigation.navigate('Search', {searchType: 'Country'})}>
                <Text style={{color: '#FFFFFF', fontSize: 30}}>Search Country</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Home;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }, button: {
        width: '70%',
        alignItems: "center",
        backgroundColor: "#00ACEE",
        padding: 20,
        borderRadius: 8,
        margin: 5

    }
});