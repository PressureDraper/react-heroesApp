import { types } from "../types/types";

export const uiReducer = (state = {}, action ) => { //initial state & action (params)

    switch (action.type) {
        case types.uiDarkModeOn:
            return {
                theme: 'dark'
            }
        
        case types.uiDarkModeOff:
            return {
                theme: 'light'
            }
    
        default:
            return state;
    }
}