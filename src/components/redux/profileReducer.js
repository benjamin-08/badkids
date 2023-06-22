const DELETE_POST = "DELETE-POST";
const ADD_POST = "ADD-POST";

let initialState = {
    postsData: [
        { id: "1", message: "Hi, im here" },
        { id: "2", message: "You are awesome!" },
        { id: "3", message: "Go fuck yourself" },
    ],

    myAvatar: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [
                    ...state.postsData,
                    { id: 4, message: action.text },
                ],
            };

        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(
                    (post) => post.id != action.postId
                ),
            };

        default:
            return state;
    }
};

export const addPost = (text) => ({ type: ADD_POST, text });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export default profileReducer;
