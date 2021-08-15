import * as React from 'react';
import { TextInput } from 'react-native-paper';
import {View,Text,StyleSheet} from "react-native";


const CountrySearch = () => {
    const [text, setText] = React.useState('');
    return (
        <Text> CountrySearch </Text>
    );
};
export default CountrySearch;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});