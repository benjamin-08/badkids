import React from "react";
import NewPostContainer from "./NewPost/NewPostContainer";
import Post from "./Post/Post";

function Posts(props) {
    let posts = props.postsData.map((post) => (
        <Post key={post.id} message={post.message} />
    ));

    return (
        <div>
            <NewPostContainer />
            {posts}
        </div>
    )
}

export default Posts