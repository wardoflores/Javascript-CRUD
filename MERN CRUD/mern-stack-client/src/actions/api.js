// Module to make a HTTP request.

import axios from "axios";
import Postmessages from "../components/Postmessages";

const databaseurl = 'http://localhost:4000'

export default {
    Postmessage(url=databaseurl+'Postmessages/')
    {
        return {
            fetchall: () => axios.get(url),
            fetchbyid: id => axios.get(url+id),
            create: newrecord => axios.post(url, newrecord),
            update: (id, updatedrecord) => axios.put(url + id, updatedrecord),
            delete: id => axios.delete(url + id)
        }
    }
}