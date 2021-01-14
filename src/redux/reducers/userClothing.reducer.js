const userClothingReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_CLOTHING':
            return action.payload;
        default:
            return state;
    }
};


export default userClothingReducer;