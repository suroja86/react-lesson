let renderEntireTree = () => {
    console.log('state was chanched')
}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        likesCount: 0,
        message: state.profilePage.newPostText,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree();
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree();
}

export const subscribe = (observe) => {
    renderEntireTree = observe; // патерн наблюдатель
}

export default state;