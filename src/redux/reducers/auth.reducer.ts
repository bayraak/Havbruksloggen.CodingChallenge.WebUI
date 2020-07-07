import { IAuthState } from "../interfaces/IAuthState";
import { IAction } from "../interfaces/IAction";
import { SET_PROFILE, LOADING_FINISHED, LOGOUT } from "../actions/auth.action";

const INITIAL_STATE: IAuthState = {
    token: null,
    isLoading: false,
    username: null
};

const auth = (state = INITIAL_STATE, action: IAction) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                isLoading: false,
                token: action.payload,
            };
        }

        case LOADING_FINISHED: {
            return {
                ...state,
                isLoading: false,
            };
        }

        case LOGOUT: {
            return {
                ...state,
                isLoading: false,
                token: null,
            };
        }

        default:
            return state;
    }
};

export default auth;
