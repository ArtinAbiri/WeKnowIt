import * as React from 'react';
import { TextInput } from 'react-native-paper';
import {View,Text,StyleSheet} from "react-native";


const Home = () => {
    const [text, setText] = React.useState('');
    return (
        <Text> Home </Text>
    );
};
export default Home;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});