import * as React from 'react';
import { TextInput } from 'react-native-paper';
import {View,Text,StyleSheet} from "react-native";


const CountryCities = () => {
    const [text, setText] = React.useState('');
    return (
        <Text> CountryCities </Text>
    );
};
export default CountryCities;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});