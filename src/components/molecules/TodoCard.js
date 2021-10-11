import React from 'react';
import Card from '../atoms/Card';
import {LongPressGestureHandler, State} from "react-native-gesture-handler";
import {Alert, View} from "react-native";
import {t} from "react-native-tailwindcss";
import {DELETE_TODO, TODOLIST} from "../../services";
import {useMutation} from "@apollo/client";
import {Text} from "react-native-paper";
import {RadioButton} from 'react-native-paper';
import TextTitle from "../atoms/TextTitle";

const TodoCard = ({style, data, onPress, editable}) => {

    /*const updateCache = (client, {data: {deleteTodo}}) => {
        const data = client.readQuery({
            query: TODOLIST,
        });
        const newTodos = {todosUser: data.todosUser.filter((elem) => elem.id !== deleteTodo.id)};
        console.log(newTodos);
        client.writeQuery({
            query: TODOLIST,
            data:
            newTodos,

        });
        console.log(deleteTodo);
    };*/

    const [deleteTodo, {loading, error, data: data1}] = useMutation(DELETE_TODO, {
        onComplete: (data) => {
            console.log(data);
        },
        //update: updateCache,
        refetchQueries: [
            TODOLIST, // DocumentNode object parsed with gql
            //'todosUser' // Query name
        ],
    });
    return (
        <LongPressGestureHandler
            onHandlerStateChange={({nativeEvent}) => {
                if (nativeEvent.state === State.ACTIVE) {
                    Alert.alert("Eliminar", "Desea eliminar?",
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            {
                                text: "OK", onPress: () => deleteTodo({
                                    variables:
                                        {id: parseInt(data.id)}
                                })
                            }
                        ]);
                }
            }}
            minDurationMs={200}>
            <View style={[t.wFull, t.itemsCenter]}>
                <Card style={style} data={data}>
                    {editable && <RadioButton
                        onPress={onPress}
                        color={'#3730A3'}
                        status={data.completado ? 'checked' : 'unchecked'}
                    />}
                    <TextTitle style={[data.completado && t.lineThrough]} text={data.nombre}/>
                </Card>
            </View>
        </LongPressGestureHandler>
    );
}
export default TodoCard;
