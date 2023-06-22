import React from "react";
import { login } from "../redux/authReducer";
import Login from "./Login";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, { login })(Login);
