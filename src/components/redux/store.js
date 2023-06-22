import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                { id: "1", name: "Sasha" },
                { id: "2", name: "Masha" },
                { id: "3", name: "Pasha" },
                { id: "4", name: "Dasha" },
            ],

            messagesData: [
                { id: "1", message: "Hi!" },
                { id: "2", message: "How are you?" },
                { id: "3", message: "Pizza Chicago" },
            ],

            newMessageText: "",
        },

        profilePage: {
            postsData: [
                { id: "1", message: "Hi, im here" },
                { id: "2", message: "You are awesome!" },
                { id: "3", message: "Go fuck yourself" },
            ],

            currentPostText: "blabla",
        },
    },

    _callSubscriber() {},

    dispatch(action) {
        this._state.profilePage = profileReducer(
            this._state.profilePage,
            action
        );
        this._state.dialogsPage = dialogsReducer(
            this._state.dialogsPage,
            action
        );
        this._callSubscriber(this._state);
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
};

window.store = store;

export default store;
