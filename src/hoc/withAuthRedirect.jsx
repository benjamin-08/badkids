import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import React from "react";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuthorized,
    };
};

function withAuthRedirect(Component) {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to="/login" />;
            }
            return <Component {...this.props} />;
        }
    }

    let connectedRedirectComponent =
        connect(mapStateToProps)(RedirectComponent);
    return connectedRedirectComponent;
}

export default withAuthRedirect;
