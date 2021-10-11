import React from 'react';
import {t} from "react-native-tailwindcss";
import {View} from "react-native";
import {RectButton} from "react-native-gesture-handler";
import {Text} from "react-native-paper";

const Card = ({style, data, onPress, children}) => {
    return (
        <RectButton
            rippleColor='#F3F4F6'
            onPress={onPress}
            style={style}>
            <View style={[t.flex1, t.itemsCenter, t.justifyCenter,t.flexRow]}>
                {children}
            </View>
        </RectButton>
    )
};

export default Card;
