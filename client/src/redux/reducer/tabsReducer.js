import * as actionTypes   from '../action/type';

export const tabsReducer = (state = actionTypes.ALL_TODO , action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_TAB :
            return action.selected ;
        default :
            return state ;
    }
} ;

