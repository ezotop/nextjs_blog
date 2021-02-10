import { StateObj } from '../interfaces/state';

const initialState: StateObj = {
    loading: true,
    error: false,
    postTitle: '',
    postBody: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_LOADED':
            return {
                ...state,
                loading: false
            };

        case 'LOADING_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            };

        case 'CHANGED_VALUE':        
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

        case 'CLEAR_INPUTS':
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