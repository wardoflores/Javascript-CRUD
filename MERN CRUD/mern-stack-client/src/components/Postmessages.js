// postmessages component needs to have a capital first letter. [1]

import React,{useEffect, useState} from "react"; // useEffect, useState for declaring the fetchall function.
import { connect } from "react-redux";
import * as actions from "../actions/Postmessages";

const Postmessages = (props) => { // component that defines postmessages
    
     // X is the value, setX is the function to interact with X
    const [x,setX] = useState(0) // value in useState parameter is will be the value of X
    // setX(5) // value in setX parameter will be the new value of X. just comment this code.


     // second parameter is an array that specify the X state property. Callback happens if it changes.
    useEffect(() =>{
        props.fetchallpostmessages()
    },[]) // if second param is empty it is like the component DidMount

    return ( <div>from postmessages</div> );
}

const mapstatetoprops = state => ({
    Postmessagelist : state.Postmessage.list // State the List of the Reducer
})

const mapactiontoprops = {
    fetchallpostmessages : actions.fetchall
}
// props.fetchallpostmessages


export default connect(mapstatetoprops, mapactiontoprops)(Postmessages);