import * as actionTypes from './actionTypes';

const initialState = {
    words: '',
    types: [],
    sugestions: [],
    recents: [],
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

        case actionTypes.SET_RECENT:
            // this is not fix yet, this added the same recent we have search before
            // to the new recent list, we need to fix this to ->> the new search will not
            // that have searched before will remove from search before, and we add the new
            // one to the top of the list
            const newRecent = state.recents.filter( 
                recent => recent.words !== action.recent.word
            );

            newRecent.unshift(action.recent);

            return {
                ...state,
                recents: newRecent
            }

        case actionTypes.RESET_RECENT:
            // this is not fix yet, this added the same recent we have search before
            // to the new recent list, we need to fix this to ->> the new search will not
            // that have searched before will remove from search before, and we add the new
            // one to the top of the list
            const updateRecent = state.recents.filter( 
                recent => recent.words !== action.recent.word
            );
            updateRecent.unshift(action.recent);

            return {
                ...state,
                recents: updateRecent
            }
        
        case actionTypes.SET_SEARCH_MODE:
            return {
                ...state,
                isSearchMode: true
            }

        case actionTypes.REMOVE_SEARCH_MODE:
            return {
                ...state,
                isSearchMode: false
            }
            
        default:
            return state;
    }
}

export default reducer;