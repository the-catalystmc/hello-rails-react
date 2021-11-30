const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST';
const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';


export const getMessages = () => ({
    type: GET_MESSAGES_REQUEST
});

export const getCurrencySuccess = (message) => ({
    type: GET_MESSAGES_SUCCESS,
    payload: message,
});

// export const initialState = {
//     message: []
// };
export const initialState = {message: 'Some String that you wanna show.'};


const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        
            case GET_MESSAGES_REQUEST:
              return { ...state, loading: true };
        
            case GET_MESSAGES_SUCCESS:
              return {
                ...state,
                loading: true,
                currency: action.payload,
                error: '',
              };
        
        default:
            return state
    }
}

export default messagesReducer;