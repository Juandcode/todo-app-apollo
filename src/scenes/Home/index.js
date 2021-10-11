import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableHighlight, View, ScrollView} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import {t} from "react-native-tailwindcss";
import Entypo from "react-native-vector-icons/Entypo";
import {FAB} from 'react-native-paper';
import {RectButton, LongPressGestureHandler} from "react-native-gesture-handler";
import FormMyTodo from "../../components/organisms/FormMyTodo";
import {useMutation, useQuery} from "@apollo/client";
import {Dialog, Portal, Button, Provider, TextInput, List} from "react-native-paper";

import {context1} from "../../Context1";
import {CREATETODO, TODOLIST, LISTUSERS_GROUP} from "../../services";
import jwtDecode from "jwt-decode";

const HomeScreen = ({navigation}) => {

    const [dialog, setDialog] = useState(false);
    const [content, setContent] = useState("");
    const [userSelected, selectUser] = useState("");
    const [userIdSelected, selectUserId] = useState('');
    const [expanded, setExpanded] = useState(false);

    const [grupoId] = useState(jwtDecode(useContext(context1)).grupoId);
    const [userId] = useState(jwtDecode(useContext(context1)).userId);
    const {loading: loading1, error: error1, data: listUsers} = useQuery(LISTUSERS_GROUP, {
        variables: {
            grupoId: grupoId,
        }
    });

    /*const updateCache = (client, {data: {createTodoItem}}) => {
        const data = client.readQuery({
            query: TODOLIST
        });
        client.writeQuery({
            query: TODOLIST,
            data: {
                todosUser: [...data.todosUser, {...createTodoItem}],
            }
        });
    };*/

    const [createTodo, {loading, error, data}] = useMutation(CREATETODO,
        {
            variables: {
                nombre: content,
                userId: parseInt(userIdSelected),
            },
            onError: (err) => {
                console.log(err);
            },
            onCompleted: (data) => {
                //console.log(data);
            },
            refetchQueries: [
                TODOLIST, // DocumentNode object parsed with gql
                //'todosUser' // Query name
            ],
        },
    );
    return (
        <SafeAreaView style={{flex: 1}}>
            <Provider>
                <Portal>
                    <Dialog visible={dialog} onDismiss={() => setDialog(false)}>
                        <Dialog.Title><Text style={{fontFamily: 'NunitoBold'}}>Create</Text></Dialog.Title>
                        <ScrollView style={{height: expanded ? 'auto' : '50%'}}>
                            <Dialog.Content>

                                <TextInput
                                    style={{fontFamily: 'NunitoBold'}}
                                    mode={'outlined'}
                                    label="Name TODO"
                                    value={content}
                                    onChangeText={text => setContent(text)}
                                />
                                <List.Section title="Select a user">
                                    <List.Accordion
                                        style={{fontFamily: 'NunitoBold'}}
                                        expanded={expanded}
                                        onPress={() => setExpanded(!expanded)}
                                        title={userSelected ? expanded ? "Usuarios" : userSelected : "Usuarios"}
                                        left={props => <List.Icon icon="account"/>}>
                                        {listUsers && listUsers.listUsersGrupo.map((e, key) => <List.Item key={key}
                                                                                                          onPress={() => {
                                                                                                              selectUser(e.nombre);
                                                                                                              selectUserId(e.id);
                                                                                                              setExpanded(false);
                                                                                                          }}
                                                                                                          title={parseInt(e.id) === userId ? 'My Account' : e.nombre}/>)
                                        }
                                    </List.Accordion>
                                </List.Section>

                            </Dialog.Content>
                        </ScrollView>
                        <Dialog.Actions>
                            <Button onPress={async () => {
                                await createTodo();
                                setDialog(false);

                            }}>Done</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>

                <RectButton
                    icon="plus"
                    rippleColor='#FFFFFF'
                    onPress={async () => {
                        //await createTodo();
                        setDialog(true);
                    }}
                    style={[t.right0, t.bottom0, t.w16, t.h16, t.shadowLg, t.roundedFull, t.flex, t.itemsCenter, t.justifyCenter, t.contentCenter, t.m4, {
                        position: 'absolute',
                        backgroundColor: '#6D28D9',
                        zIndex: 1,
                    }]}>
                    <Entypo color={'white'} name={'plus'} size={30}/>
                </RectButton>
                <FormMyTodo/>
            </Provider>
        </SafeAreaView>
    )
};

export default HomeScreen;
