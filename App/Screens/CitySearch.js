import * as React from 'react';
import { TextInput } from 'react-native-paper';
import {View,Text,StyleSheet} from "react-native";


const CitySearch = () => {
    const [text, setText] = React.useState('');
    return (
        <Text> CitySearch </Text>

    );
};
export default CitySearch;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});