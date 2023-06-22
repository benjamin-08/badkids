import { connect } from "react-redux";
import Posts from "./Posts";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
    };
};

export default connect(mapStateToProps, null)(Posts);
