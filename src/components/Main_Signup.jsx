import React, { Component } from "react";
import { Grid } from "react-bootstrap";

import SignUp from "./Signup/index";

export default class MainSignUp extends Component {

  render() {
    return(
        <div className="chat-container">
          <Grid
            style={{ width: "45%", paddingLeft: "0", paddingRight: "0" }}
            className="grid-class"
          >
            <SignUp />
          </Grid>
        </div>
        )
    }

}
    

