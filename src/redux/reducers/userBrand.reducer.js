const userBrandReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_BRAND':
            return action.payload;
        default:
            return state;
    }
};


export default userBrandReducer;