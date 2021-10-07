import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Router from './src/Navigations/Router';
const App = ({
    params,
}) => (
    <View style={{flex:1}}>
        <Router/>
    </View>
);

export default App;
