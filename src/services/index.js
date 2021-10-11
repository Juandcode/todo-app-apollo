import {gql} from "@apollo/client";

export const TODOLIST = gql`
    query{
        todosUser {
            id
            completado
            nombre
        }
    }`;

export const LOGIN = gql`
    mutation($loginEmail: String!, $loginPassword: String!){
        login(email: $loginEmail, password: $loginPassword) {
            id
            email
            token
        }
    }`;

export const COMPLETETODO = gql`
    mutation($id:Int!,$completado:Boolean!){
        completeTodo(id:$id,completado:$completado){
            id
            completado
            nombre
        }
    }`;

export const CREATETODO = gql`
    mutation($nombre:String!,$userId:Int){
        createTodoItem(nombre:$nombre,userId:$userId){
            id
            nombre
            completado
        }
    }`;

export const DELETE_TODO = gql`
    mutation($id:Int!){
        deleteTodo(id:$id){
            id
            completado
            nombre
        }
    }
`;
export const LISTUSERS_GROUP = gql`
    query($grupoId:Int){
        listUsersGrupo(grupoId:$grupoId){
            id
            nombre
            todos{
                id
                nombre
                completado
            }
        }
    }
`;

export const SUBSCRIBE = gql`
    subscription($addTodoGroupId:Int){
        addTodo(groupId: $addTodoGroupId) {
            id
            completado
            nombre
        }
    }`;
