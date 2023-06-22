const SENT_MESSAGE = "SENT-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SENT_MESSAGE:
            return {
                ...state,
                messagesData: [
                    ...state.messagesData,
                    { id: 10, message: action.message },
                ],
            };

        default:
            return state;
    }
};

export const sentMessage = (message) => ({ type: SENT_MESSAGE, message });

export default dialogsReducer;
