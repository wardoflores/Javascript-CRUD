// This is the Action payload.

export const ACTION_TYPES ={
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

export const fetchall = () => dispatch => {
    dispatch({
        type:ACTION_TYPES.FETCH_ALL,
        payload:[]
    })
}