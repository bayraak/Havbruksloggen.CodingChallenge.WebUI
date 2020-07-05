export const SET_TOKEN = '[AUTH] SET_TOKEN';
export const LOGOUT = '[AUTH] LOGOUT';
export const LOADING_FINISHED = '[AUTH] LOADING_FINISHED';

export const setToken = (token: any | null) => ({
    type: SET_TOKEN,
    payload: token,
});

export const logout = () => ({
    type: LOGOUT,
});

export const finishLoading = () => ({
    type: LOADING_FINISHED,
});
