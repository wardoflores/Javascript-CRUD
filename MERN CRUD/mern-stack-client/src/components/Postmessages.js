// postmessages component needs to have a capital first letter. [1]

import React from "react";
import { connect } from "react-redux";

const Postmessages = (props) => { // component that defines postmessages
    return ( <div>from postmessages</div> );
}

export default connect()(Postmessages);