import { createReducer } from '../../app/common/utils/reducerUtils';
import { LOGIN_USER_SUCCESS, SIGN_OUT_USER } from './authConstants';

const initialState = {
    authenticated: false,
    currentUser: null,
};

const loginUser = (state, payload) => {
    console.log("pyloadmmmmmmmmm", payload);
    return {
        authenticated: true,
        currentUser: payload,
    };
};

const signOutUser = () => {
    return {
        authenticated: false,
        currentUser: null,
    };
};

export default createReducer(initialState, {
    [LOGIN_USER_SUCCESS]: loginUser,
    [SIGN_OUT_USER]: signOutUser,
});
