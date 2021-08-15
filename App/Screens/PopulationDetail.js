import * as React from 'react';
import { TextInput } from 'react-native-paper';
import {View,Text,StyleSheet} from "react-native";


const PopulationDetail = () => {
    const [text, setText] = React.useState('');
    return (
        <Text> PopulationDetail </Text>
    );
};
export default PopulationDetail;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});