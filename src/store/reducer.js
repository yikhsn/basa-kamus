import * as actionTypes from './actionTypes';

const initialState = {
    words: '',
    sugestions: [],
    type: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_WORD:
            return {
                ...state,
                word: action.word
            };

        case actionTypes.SET_SUGESTIONS:

            console.log('going to set seugestions');
            
            return {
                ...state,
                sugestions: action.sugestions
            }
            
        default:
            return state;
    }
}

export default reducer;