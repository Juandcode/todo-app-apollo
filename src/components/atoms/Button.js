import React from 'react';
import {t} from "react-native-tailwindcss";
import {Text, View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {RectButton} from "react-native-gesture-handler";


const Button = ({onPress, icon, name, style}) => {
    return (
        <RectButton
            rippleColor="#FFFFFF"
            // style={{borderWidth: 1,backgroundColor:'yellow', borderColor: 'black', width: 300, height: 300, borderRadius: 30}}
            style={style}
            onPress={onPress}>
            <View style={[t.flexRow, t.itemsCenter]}>
                {icon && <FontAwesome name={icon} color={'white'} size={20}/>}
                <Text style={[t.textWhite, t.textLg, t.mL1, {fontFamily: 'NunitoBold'}]}>{name}</Text>
            </View>
        </RectButton>
    );
};
export default Button;
