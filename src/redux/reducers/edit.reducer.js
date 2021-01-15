const editReducer = (state = [], action) => {
    switch (action.type) {
        case 'SEND_EDIT_INFORMATION':
            return action.payload;
        default:
            return state;
    }
};


export default editReducer;