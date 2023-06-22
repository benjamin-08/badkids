import { addPost } from "../../../redux/profileReducer";
import NewPost from "./NewPost";
import { connect } from "react-redux";

export default connect(null, { addPost })(NewPost);

