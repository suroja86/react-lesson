const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        // {id: 1, photoUrl: 'https://cstor.nn2.ru/users/users/foto/1064-2017-01-03-serg-2001-07-19-serg.bmp.bmp', followed: true, fullName: 'Serg', status: 'learn js', location: {city: 'Krop', country: 'Ukraine'}},
        // {id: 2, photoUrl: 'https://cstor.nn2.ru/users/users/foto/1064-2017-01-03-serg-2001-07-19-serg.bmp.bmp', followed: false, fullName: 'Serg2', status: 'learn js', location: {city: 'Krop', country: 'Ukraine'}},
        // {id: 3, photoUrl: 'https://cstor.nn2.ru/users/users/foto/1064-2017-01-03-serg-2001-07-19-serg.bmp.bmp', followed: true, fullName: 'Serg3', status: 'learn js', location: {city: 'Krop', country: 'Ukraine'}},
        // {id: 4, photoUrl: 'https://cstor.nn2.ru/users/users/foto/1064-2017-01-03-serg-2001-07-19-serg.bmp.bmp', followed: true, fullName: 'Serg4', status: 'learn js', location: {city: 'Krop', country: 'Ukraine'}},
        // {id: 5, photoUrl: 'https://cstor.nn2.ru/users/users/foto/1064-2017-01-03-serg-2001-07-19-serg.bmp.bmp', followed: false, fullName: 'Serg5', status: 'learn js', location: {city: 'Krop', country: 'Ukraine'}},
        // {id: 6, photoUrl: 'https://cstor.nn2.ru/users/users/foto/1064-2017-01-03-serg-2001-07-19-serg.bmp.bmp', followed: true, fullName: 'Serg6', status: 'learn js', location: {city: 'Krop', country: 'Ukraine'}},
    ],
    newPostText: 'Serggggg'
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true,
                        }
                    }
                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false,
                        }
                    }
                    return u;
                }),
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId});
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;