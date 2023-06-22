import { connect } from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {
    getUserProfile,
    getUserStatus,
    updateMyStatus,
    updateAvatarThunk,
    updateProfile
} from "../../redux/usersReducer";
import { logout } from "../../redux/authReducer";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        auth: state.auth
    };
};

export default connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateMyStatus,
    updateAvatarThunk,
    updateProfile,
    logout
})(ProfileInfo);
