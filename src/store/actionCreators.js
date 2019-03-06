import * as actionTypes from './actionTypes';

export const setWord = word => {
    return {
        type: actionTypes.SET_WORD,
        word: word
    }
}

export const setTypes = types => {
    return {
        type: actionTypes.SET_TYPES,
        types: types
    }
}

export const setSugestions = sugestions => {
    return {
        type: actionTypes.SET_SUGESTIONS,
        sugestions: sugestions
    }
}

export const setRecent = recent => {
    return {
        type: actionTypes.SET_RECENT,
        recent: recent
    }
}

export const resetRecent = recent => {
    return {
        type: actionTypes.RESET_RECENT,
        recent: recent
    }
}

export const setSearchMode = () => {
    return {
        type: actionTypes.SET_SEARCH_MODE
    }
}

export const removeSearchMode = () => {
    return  {
        type: actionTypes.REMOVE_SEARCH_MODE
    }
}