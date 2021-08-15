import React from "react";
import {View, StyleSheet, Button} from "react-native";

const Home = ({navigation}) => {
    return (
        <View style={style.container}>
            <Button title={"CitySearch"} onPress={() => navigation.navigate('CitySearch')}/>
            <Button title={"CountrySearch"} onPress={() => navigation.navigate('CountrySearch')}/>
        </View>
    )
}
export default Home;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});