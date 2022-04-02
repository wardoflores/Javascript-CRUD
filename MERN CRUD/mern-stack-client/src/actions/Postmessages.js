// Action for retrieving all records. [4]

import api from "./api.js";

export const ACTION_TYPES ={
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

export const fetchall = () => dispatch => { // exports fetchall command towards all modules.
    api.Postmessage().fetchall()
    .then(res => { // If the statement above is called, then:
        dispatch({
            type:ACTION_TYPES.FETCH_ALL, // `fetchall: () => axios.get(url)`
            payload: res.data
        }) 
    })
    .catch(err => console.log()) // Error catching
    
}

export const create =(data, onSuccess) => dispatch => {
    api.Postmessage().create(data)
        .then(res => {
            dispatch({
                type:ACTION_TYPES.CREATE, // `create: newrecord => axios.post(url, newrecord)`
                payload: res.data
            }) 
            onSuccess()
        })
        .catch(err => console.log())
}

export const update =(id, data, onSuccess) => dispatch => {
    api.Postmessage().delete(id, data)
        .then(res => {
            dispatch({
                type:ACTION_TYPES.UPDATE, // `create: newrecord => axios.post(url, newrecord)`
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log())
}

export const Delete =(id, data, onSuccess) => dispatch => {
    api.Postmessage().update(id)
        .then(res => {
            dispatch({
                type:ACTION_TYPES.DELETE, // `create: newrecord => axios.post(url, newrecord)`
                payload: id
            })
            onSuccess()
        })
        .catch(err => console.log())
}