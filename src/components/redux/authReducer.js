import { authMeAPI, loginAPI, logoutAPI, getCaptchaAPI } from "../../api";

const SET_AUTH_DATA = "SET-AUTH-DATA";
const LOGOUT = "LOGOUT";
const IS_INITIALIZED = "IS-INITIALIZED";
const SET_CAPTCHA = 'SET-CAPTCHA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuthorized: false,
    captchaImage: null,

    isInitialized: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.authInfo,
                isAuthorized: true,
            };

        case LOGOUT:
            return {
                ...state,
                id: null,
                email: null,
                login: null,
                isAuthorized: false,
            };

        case IS_INITIALIZED:
            return {
                ...state,
                isInitialized: true,
            };

        case SET_CAPTCHA:
            return {
                ...state,
                captchaImage: action.url
            }
        default:
            return state;
    }
};

export const setAuthData = (id, email, login) => ({
    type: SET_AUTH_DATA,
    authInfo: { id, email, login },
});
export const setLogout = () => ({ type: LOGOUT });
export const setIsinitialized = () => ({ type: IS_INITIALIZED });
export const setCaptcha = (url) => ({type: SET_CAPTCHA, url})

export const getAuthData = () => (dispatch) => {
    return authMeAPI().then((data) => {
        if (data.resultCode === 0) {
            let { id, email, login } = data.data;
            dispatch(setAuthData(id, email, login));
        }
    });
};

export const login = (values) => (dispatch) => {
    loginAPI(values).then((data) => {
        if (data.resultCode === 0) {
            dispatch(getAuthData());
            dispatch(setCaptcha(null))
        } else if (data.resultCode === 10) {
            getCaptchaAPI().then(data => {
              dispatch(setCaptcha(data.url))  
            })
        } else {
            alert("Incorrect data");
        }
       
    });
};

export const logout = () => (dispatch) => {
    logoutAPI().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setLogout());
        }
    });
};

export const initialize = () => (dispatch) => {
    let promise = dispatch(getAuthData());
    promise.then(() => {
        dispatch(setIsinitialized());
    });
};

export default authReducer;
