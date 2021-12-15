let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, likes: 20, message: "kjhjkjhgh j hghjkjhbgi i gvuukhbuh"},
                {id: 2, likes: 251, message: "jhcoasuci ub iouy uhijou yytuyioj uy"},
                {id: 3, likes: 100, message: "opiuyty uiyt yui uyty uiuy tyu"},
                {id: 4, likes: 10, message: "kjhiopoiuy uiu ty r tyy ty uy tyu yty u"},
            ],
            newPostText: 'Serggggg'
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
        console.log('state was chanched')
    },

    getState() {
        return this._state;
    },
    subscribe (observe) {
        this._callSubscriber = observe; // патерн наблюдатель
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                likesCount: 0,
                message: this._state.profilePage.newPostText,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
    }
}

export default store;
window.store = store;