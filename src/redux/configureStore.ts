import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { IAction } from './interfaces/IAction';
import auth from './reducers/auth.reducer';

const appReducer = combineReducers({
    auth
});

const rootReducer = (state: any, action: IAction) => {
    return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
