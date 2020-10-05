import { LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, SIGN_OUT_USER } from './../auth/authConstants';
import { loginApi } from '../../app/common/data/mock';

export const login = (user) => {
    console.log('user', user);
    return (dispatch) => {
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: {
                user,
            },
        });
    };
};



export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: SIGN_OUT_USER,
        });
    };
};
