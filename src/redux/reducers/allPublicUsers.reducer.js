const allPublicUsers = (state = [], action) => {
    switch (action.type) {
        case 'SET_PUBLIC_USERS':
            return action.payload;
        default:
            return state;
    }
};


export default allPublicUsers;