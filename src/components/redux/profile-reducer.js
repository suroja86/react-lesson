const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, likes: 20, message: "kjhjkjhgh j hghjkjhbgi i gvuukhbuh"},
        {id: 2, likes: 251, message: "jhcoasuci ub iouy uhijou yytuyioj uy"},
        {id: 3, likes: 100, message: "opiuyty uiyt yui uyty uiuy tyu"},
        {id: 4, likes: 10, message: "kjhiopoiuy uiu ty r tyy ty uy tyu yty u"},
    ],
    newPostText: 'Serggggg'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case (ADD_POST): {
            let newPost = {
                id: 5,
                likesCount: 0,
                message: state.newPostText,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case (UPDATE_NEW_POST_TEXT): {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST, });
export const updateNewPostActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text, });

export default profileReducer;