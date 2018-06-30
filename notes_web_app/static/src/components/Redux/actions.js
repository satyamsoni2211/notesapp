const ADD = 'add';
const ADD_TOKEN = 'addtoken';
const REMOVE = 'remove';

export const addData = (data) => {
    return {type: ADD,
    payload: data}
}
export const addToken = (data) => {
    return {
        type: ADD_TOKEN,
        payload: data
    }
}