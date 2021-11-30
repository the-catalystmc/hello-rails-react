const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST';
const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';

export const getMessages = () => {
    return dispatch => {
        dispatch({ type: GET_MESSAGES_REQUEST });
        return fetch(`v1/messages.json`)
        .then(response => response.json())
        .then(json => dispatch(getMessagesSuccess(json)))
        .catch(error => console.log(error));
    };
};

export const getMessagesSuccess = (json) => {
    return {
        type: GET_MESSAGES_SUCCESS,
        json,
    };
};

export const initialState = {message: ''};


const messagesReducer = (state = initialState, action) => {
    switch (action.type) {       
            case GET_MESSAGES_SUCCESS:
              return { ...state, message: action.json[0].body };
        
        default:
            return state
    }
}

export default messagesReducer;