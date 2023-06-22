import profileReducer, { addPost, deletePost } from "./profileReducer";

let state = {
    postsData: [
        { id: "1", message: "Hi, im here" },
        { id: "2", message: "You are awesome!" },
        { id: "3", message: "Go fuck yourself" },
    ],
};

test("post should be added", () => {
    let action = addPost("new post test");
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(4);
});

test("post should be deleted", () => {
    let action = deletePost("2");
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(2);
});
