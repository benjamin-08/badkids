import {
    followThunk,
    unfollowThunk,
    setCurrentPage,
} from "../redux/usersReducer";
import { connect } from "react-redux";
import Users from "./Users";
import React from "react";
import { getUsers } from "../redux/usersReducer";
import { getUsersPage } from "../redux/selectors/usersSelector";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(
            this.props.state.currentPage,
            this.props.state.usersAmountOnPage
        );
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.state.usersAmountOnPage);
    };

    render() {
        return (
            <Users
                state={this.props.state}
                follow={this.props.followThunk}
                unfollow={this.props.unfollowThunk}
                onPageChanged={this.onPageChanged}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        state: getUsersPage(state),
    };
};

export default connect(mapStateToProps, {
    followThunk,
    unfollowThunk,
    setCurrentPage,
    getUsers,
})(UsersContainer);
