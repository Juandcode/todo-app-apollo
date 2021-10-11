import React from 'react';
import {View} from 'react-native';
import {t} from "react-native-tailwindcss";
import Feather from "react-native-vector-icons/Feather";
import Input from "../atoms/Input";
import TextTitle from "../atoms/TextTitle";
import Button from '../atoms/Button';

const Search = ({style}) => {
    return (
        <View style={style}>
            <View style={[t.flexRow, t.borderB2, t.borderGray400, t.w8_12, t.hFull, t.itemsCenter]}>
                <Feather name="search" color={'#05375a'} size={20}/>
                <Input style={[t.flex1, t.pL2, t.textBase, {fontFamily: 'NunitoBold'}]} text={'Buscar'}/>
            </View>
            <Button
                style={[t.w3_12, t.hFull, t.bgIndigo800, t.roundedLg, t.shadowLg, t.flex, t.itemsCenter, t.justifyCenter]}
                name={'Buscar'}/>
        </View>
    );
};
export default Search;
