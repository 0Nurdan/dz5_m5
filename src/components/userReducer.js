import { CREATE_USER_SUCCESS, CREATE_USER_FAILURE, HIDE_SUCCESS_MESSAGE } from './userAction';

const initialState = {
    user: null,
    error: null,
    successMessageVisible: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,
                successMessageVisible: true,
            };
        case CREATE_USER_FAILURE:
            return {
                ...state,
                user: null,
                error: action.payload,
                successMessageVisible: false,
            };
        case HIDE_SUCCESS_MESSAGE:
            return {
                ...state,
                successMessageVisible: false,
            };
        default:
            return state;
    }
};

export default userReducer;
