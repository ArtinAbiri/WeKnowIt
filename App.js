import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {enableScreens} from "react-native-screens";

enableScreens();
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Home from "./App/Screens/Home";
import Search from "./App/Screens/Search";
import PopulationDetail from "./App/Screens/PopulationDetail";
import CountryCities from "./App/Screens/CountryCities";



const Stack = createNativeStackNavigator();

export default function App({navigation}) {

    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="PopulationDetail" component={PopulationDetail}/>
                <Stack.Screen name="CountryCities" component={CountryCities}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
