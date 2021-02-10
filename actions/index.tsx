const loadingError = () => {
    return {
        type: 'LOADING_ERROR'
    }
};

const changedValue = (text: string, isTitle: boolean = false) => {
    // console.log('action')
    return {
        type: 'CHANGED_VALUE',
        payload: text,
        isTitle: isTitle
    }
};

const clearInputs = () => {
    return {
        type: 'CLEAR_INPUTS'
    }
};

export {
    loadingError,
    changedValue,
    clearInputs
}