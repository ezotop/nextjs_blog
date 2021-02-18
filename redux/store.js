import { applyMiddleware, createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const makeStore = () => createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper(makeStore);