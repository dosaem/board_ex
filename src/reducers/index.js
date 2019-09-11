import * as types from '../actions/ActionTypes'

// 리듀서
const initialState = {
    boards:[],
}

function boardReducer(state = initialState, action) {
    console.log(state);
    console.log("hi");
    switch(action.type) {
        case types.CONTENTVIEW:
            return {
                ...state,
                boards: action.boards,
                total: action.total,
            };
        case types.OPENBOARD:
            return {
                ...state,
            }
        default:
        return  state
    }
}

export default boardReducer;