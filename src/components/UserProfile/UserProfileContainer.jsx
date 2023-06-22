import UserProfile from "./UserProfile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus } from "../redux/usersReducer";
import React from "react";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

export function withRoater(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />;
    };
}

class UserProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (userId) {
            this.props.getUserProfile(userId);
        }
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <UserProfile
                userProfile={this.props.state}
                userStatus={this.props.userStatus}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.usersPage.userProfile,
        userStatus: state.usersPage.userStatus,
    };
};

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus }),
    withRoater,
    withAuthRedirect
)(UserProfileContainer);
