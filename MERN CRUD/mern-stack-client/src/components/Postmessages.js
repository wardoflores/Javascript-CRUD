// postmessages component needs to have a capital first letter. [1]

import React,{useEffect, useState, Fragment } from "react"; // useEffect, useState for declaring the fetchall function.
import { connect } from "react-redux";
import * as actions from "../actions/Postmessages";
import { Grid, List, ListItem, ListItemText, Paper, Typography, withStyles, Button, Divider, smMargin } from "@material-ui/core";
import PostMessageForm from "./PostMessageForm";

const styles = theme => ({
    paper :{
        margin: theme.spacing(3),
        padding: theme.spacing(2),
    },
    smMargin: {
        margin: theme.spacing(1)
    },
    actionDiv: {
        textAlign: "center"
    }
})


// props.classes.paper

const Postmessages = ({classes, ...props}) => { // component that defines postmessages
    //const {classes, ...props} = props

     // X is the value, setX is the function to interact with X
     // const [x,setX] = useState(0) // value in useState parameter is will be the value of X
     // setX(5) // value in setX parameter will be the new value of X. just comment this code.

    const [currentId, setCurrentId] = useState(0) 

    const onDelete = id => {
        
        const onSuccess = () => { 
            window.alert('Deleted successfully.')
        
        }

        if (window.confirm('Are you sure to delete this record?'))
            props.deletepostmessages(id, onSuccess)
    }

     // second parameter is an array that specify the X state property. Callback happens if it changes.
    useEffect(() =>{
        props.fetchallpostmessages()
    },[]) // if second param is empty it is like the component DidMount

     // Designed with Material UI
    return ( 
        <Grid container>
            <Grid item xs={5}>
                <Paper className={classes.paper}>
                    <PostMessageForm {...{currentId,setCurrentId}} />
                </Paper>
            </Grid>
            <Grid item xs={7}>
                <Paper className={classes.paper}>
                    <List>
                        {
                            props.Postmessagelist.map((record, index) => {
                                return (
                                    <Fragment key={index}>
                                        <ListItem>
                                            <ListItemText>
                                                <Typography variant="h5">
                                                    {record.title}
                                                </Typography>
                                                <div>
                                                    {record.message}
                                                </div>
                                                <div className={classes.actionDiv}>
                                                    <Button variant="contained" color="primary" size="small" className={classes.smMargin} onClick={()=>setCurrentId(record._id)}>
                                                        Edit
                                                    </Button>
                                                    <Button variant="contained" color="seconddary" size="small" className={classes.smMargin} onClick={()=> onDelete(record._id)}>
                                                        Delete
                                                    </Button>
                                                </div>
                                            </ListItemText>
                                        </ListItem>
                                        <Divider component="li" />
                                    </Fragment>
                                )
                            })
                        }
                    </List>
                </Paper>
            </Grid>
        </Grid>
    );
}

const mapstatetoprops = state => ({
    Postmessagelist : state.Postmessage.list // State the List of the Reducer
})

const mapactiontoprops = {
    fetchallpostmessages : actions.fetchall,
    deletepostmessages : actions.Delete
}
// props.fetchallpostmessages


export default connect(mapstatetoprops, mapactiontoprops)(withStyles(styles)(Postmessages));