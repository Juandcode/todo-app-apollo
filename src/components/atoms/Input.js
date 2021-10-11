import React from 'react';
import {useFonts} from 'expo-font';
import {Text, TextInput} from "react-native";
import {t} from "react-native-tailwindcss";

const Input = ({text, setText, style}) => {
    return <TextInput onChangeText={setText} placeholder={text}
                      style={style}/>
};
export default Input;
