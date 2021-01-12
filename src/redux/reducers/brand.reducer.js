const brandReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_BRAND':
            return action.payload;
        default:
            return state;
    }
};


export default brandReducer;