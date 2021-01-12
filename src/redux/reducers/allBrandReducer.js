const allBrandReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_BRAND':
            return action.payload;
        default:
            return state;
    }
};


export default allBrandReducer;