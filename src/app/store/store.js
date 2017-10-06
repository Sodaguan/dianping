import {createStore} from 'redux'
import rootReducer from '../reducers/reducer'

// const store = createStore(rootReducer);
//
// export default store

const configureStore = initialState => {
    const store = createStore(rootReducer, initialState,
        //触发chrome redux-devtools插件
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}

export default configureStore
