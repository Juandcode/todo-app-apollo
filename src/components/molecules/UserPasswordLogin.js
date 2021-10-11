import React from 'react';
import {Text, TextInput, View} from "react-native";
import {t} from "react-native-tailwindcss";
import Feather from "react-native-vector-icons/Feather";
import Input from "../atoms/Input";
import TextTitle from "../atoms/TextTitle";

const UserPasswordLogin = ({text, setText, style}) => {
    return (
        <View style={style}>
            <TextTitle text={text}/>
            <View style={[t.flexRow, t.borderB2, t.wFull, t.borderGray400, t.mT4]}>
                <Feather name="lock" color={'#05375a'} size={20}/>
                <Input style={[t.flex1, t.pL2, t.textBase, {fontFamily: 'NunitoBold'}]} setText={setText}
                       text={text}/>
            </View>
        </View>
    );
};
export default UserPasswordLogin;
