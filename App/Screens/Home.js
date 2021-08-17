import React from "react";
import {View, StyleSheet, Button} from "react-native";

const Home = ({navigation}) => {
    return (
        <View style={style.container}>
            <Button title={"Search City"} onPress={() => navigation.navigate('Search',{searchType: 'City'})}/>
            <Button title={"Search Country"} onPress={() => navigation.navigate('Search',{searchType: 'Country'})}/>
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