import * as actionTypes from './actionTypes';

const initialState = {
    words: '',
    sugestions: [],
    types: [],
    isSearchMode: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_WORD:
            return {
                ...state,
                word: action.word
            };

        case actionTypes.SET_TYPES:
            return {
                ...state,
                types: action.types
            }

        case actionTypes.SET_SUGESTIONS:            
            return {
                ...state,
                sugestions: action.sugestions
            }
        
        case actionTypes.SET_SEARCH_MODE:
            return {
                ...state,
                isSearchMode: true
            }

        case actionTypes.REMOVE_SEARCH_MODE:
            console.log('gooing to remove search mode');
            return {
                ...state,
                isSearchMode: false
            }
            
        default:
            return state;
    }
}

export default reducer;