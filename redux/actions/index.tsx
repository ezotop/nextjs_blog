import axios, {AxiosRequestConfig} from 'axios';
import { POST_REQUESTED, POST_LOADED, LOADING_ERROR, CHANGED_VALUE, CLEAR_INPUTS } from '../types';

const postRequested = () => {
    return {
        type: POST_REQUESTED
    }
};

const postLoaded = (posts) => {
    return {
        type: POST_LOADED,
        payload: posts
    }
};

const loadingError = (error) => {
    return {
        type: LOADING_ERROR,
        payload: error
    }
};

const changedValue = (text: string, isTitle: boolean = false) => {
    // console.log('action')
    return {
        type: CHANGED_VALUE,
        payload: text,
        isTitle: isTitle
    }
};

const clearInputs = () => {
    return {
        type: CLEAR_INPUTS
    }
};

const getPosts = (url: string, id: string = '') => {
    return async dispatch => {
        dispatch(postRequested())
        await axios.get(url + id)
            .then(response => {
                console.log('loaded by effect')
                dispatch(postLoaded(response.data.reverse()))
            })
            .catch(err => {
                dispatch(loadingError(err))
            })
    }
};

export {
    postLoaded,
    loadingError,
    changedValue,
    clearInputs,
    getPosts
};