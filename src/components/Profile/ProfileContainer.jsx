import Profile from "./Profile";
import { connect } from "react-redux";
import React from "react";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import Preloader from "../../assets/Preloader";
import {
    getUserProfile,
    getUserStatus,
    updateMyStatus,
} from "../redux/usersReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let myId = this.props.authInfo.id;
        this.props.getUserProfile(myId);
        this.props.getUserStatus(myId);
    }

    render() {
        if (!this.props.usersPage.userProfile) {
            return <Preloader />;
        }

        return <Profile {...this.props} />;
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        usersPage: state.usersPage,
        authInfo: state.auth,
    };
};

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateMyStatus }),
    withAuthRedirect
)(ProfileContainer);
