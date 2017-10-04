

const reducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_ATTENDEE':
            return [{
                name: action.name,
                color: action.color
            }, ...state];
        case 'REMOVE_ATTENDEE':
            return [
                // In the array grab the state from beginning to index of one to delete
                ...state.slice(0, action.index),
                // Grab state from the one after one we want to delete
                ...state.slice(action.index + 1)
            ];
        default: 
            return state;
    }
}

export default reducer;