const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogsData: [
        {id: 1, name: "Serg"},
        {id: 2, name: "Maks"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Andrey"},
    ],
    messagesData: [
        {id: 1, message: "kjhjkjhgh j hghjkjhbgi i gvuukhbuh"},
        {id: 2, message: "jhcoasuci ub iouy uhijou yytuyioj uy"},
        {id: 3, message: "opiuyty uiyt yui uyty uiuy tyu"},
        {id: 4, message: "kjhiopoiuy uiu ty r tyy ty uy tyu yty u"},
    ],
    newMessageBody: ""
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return { //state copy
                ...state,
                newMessageBody: action.body,
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return  { //state copy
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 10, message: body}]
            };
        default:
            return state;
    }
}

export const sedMessageCreator = () => ({ type: SEND_MESSAGE, });
export const updateNewMessageBodyCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: text, });

export default dialogReducer;