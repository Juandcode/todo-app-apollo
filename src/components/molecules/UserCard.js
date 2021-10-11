import React from 'react';
import {t} from "react-native-tailwindcss";
import {View} from "react-native";
import Card from '../atoms/Card';
import TextTitle from "../atoms/TextTitle";

const UserCard = ({style, data, onPress}) => {
    return (
        <Card style={style} onPress={onPress}>
            <TextTitle text={data.nombre}/>
        </Card>
    );
};

export default UserCard;
