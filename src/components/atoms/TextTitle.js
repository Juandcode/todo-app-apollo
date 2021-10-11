import React from 'react';
import {useFonts} from 'expo-font';
import {Text} from "react-native";
import {t} from "react-native-tailwindcss";

const TextTitle = ({text, style}) => {
    return <Text style={[t.textLg, t.textGray800, {fontFamily: 'NunitoBold'}, style]}>{text}</Text>;
};
export default TextTitle;
