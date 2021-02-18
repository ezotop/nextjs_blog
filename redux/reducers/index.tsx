import { POST_REQUESTED, POST_LOADED, LOADING_ERROR, CHANGED_VALUE, CLEAR_INPUTS } from '../types';
import { StateObj } from '../../interfaces/state';

const initialState: StateObj = {
    loading: false,
    error: false,
    posts: [],
    postTitle: '',
    postBody: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_REQUESTED:
            return {
                ...state,
                loading: true
            };

        case POST_LOADED:
            return {
                ...state,
                loading: false,
                posts: [...action.payload]
            };

        case LOADING_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };

        case CHANGED_VALUE:        
            if (action.isTitle) {
                return {
                    ...state,
                    postTitle: action.payload
                }
            }
            return {
                ...state,
                postBody: action.payload
            };

        case CLEAR_INPUTS:
            return {
                ...state,
                postTitle: '',
                postBody: ''
            };
    
        default:
            return state;
    }
};

export default reducer;