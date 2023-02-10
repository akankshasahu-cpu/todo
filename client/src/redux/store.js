import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import todosReducer from './reducer/todosReducer'
import {tabsReducer} from './reducer/tabsReducer'

const reducer = combineReducers({
    todos :todosReducer ,
    currentTab : tabsReducer ,
})

const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store ;