import { LoginResponse } from '../../services/interfaces/LoginResponse';
import { Dispatch } from 'redux';
import { RegisterService } from '../../services/registerService';
import { LoginRequest } from '../../services/interfaces/LoginRequest';
import { LoginService } from '../../services/loginService';
import { push } from 'react-router-redux'
import { RegisterRequest } from '../../services/interfaces/RegisterRequest';

export const SET_PROFILE = '[AUTH] SET_PROFILE';
export const REGISTER = '[AUTH] REGISTER';
export const LOGIN = '[AUTH] LOGIN';
export const LOGIN_SUCCESS = '[AUTH] LOGIN_SUCCESS';
export const LOGIN_FAIL = '[AUTH] LOGIN_FAIL';
export const LOGOUT = '[AUTH] LOGOUT';
export const LOADING_FINISHED = '[AUTH] LOADING_FINISHED';


export const setProfile = (userProfile: LoginResponse | null) => ({
    type: SET_PROFILE,
    payload: userProfile,
});

export const login = (user: LoginRequest) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: LOGIN,
        });

        try {
            const result = await LoginService.login(user);

            if (result && result.token) {

                debugger; 
                localStorage.setItem("@token", result.token);
                dispatch(setProfile(result));
                dispatch(loginSuccess());
                window.location.href = '/';
            }

        } catch (err) {
            console.log('Register Error ', err);
            dispatch(loginFail());
        }
    };
}

export const register = (user: RegisterRequest | LoginRequest) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: REGISTER,
        });

        try {
            await RegisterService.register(user);
            dispatch(login(user) as any);
        } catch (err) {
            console.log('Register Error ', err);
            dispatch(loginFail());
        }
    };
}

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

export const loginFail = () => ({
    type: LOGIN_FAIL
});

export const logout = () => ({
    type: LOGOUT,
});

export const finishLoading = () => ({
    type: LOADING_FINISHED,
});
