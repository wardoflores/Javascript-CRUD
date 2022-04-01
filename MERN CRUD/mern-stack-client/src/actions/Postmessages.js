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
        console.log(res)
        dispatch({
            type:ACTION_TYPES.FETCH_ALL, // `fetchall: () => axios.get(url),`
            payload: res.data
    }) 
    })
    .catch(err => console.log()) // Error catching
    
}