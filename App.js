import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Platform, TextInput} from 'react-native';
import {t} from 'react-native-tailwindcss';
import {LinearGradient} from 'expo-linear-gradient';
import {RectButton} from "react-native-gesture-handler";
import AppNavigator from "./src/navigation";
import Principal from "./src";

export default function App() {
    return (
        <View style={{flex: 1}}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
            <AppNavigator/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
