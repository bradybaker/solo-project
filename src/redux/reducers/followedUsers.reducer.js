const followedUsersReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FOLLOWED_USERS':
            return action.payload;
        default:
            return state;
    }
};


export default followedUsersReducer;