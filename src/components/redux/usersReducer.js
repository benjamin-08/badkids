import {
    getUsersAPI,
    unfollowAPI,
    followAPI,
    getUserProfileAPI,
    getUserStatusAPI,
    updateMyStatusAPI,
    updateAvatarAPI, updateProfileAPI
} from "../../api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_AMOUNT = "SET-TOTAL-AMOUNT";
const SET_CURRENT_PAGE = "CURRENT-PAGE";
const TOGGLE_FOLLOW_IN_PROGRESS = "TOGGLE-FOLLOW-IN-PROGRESS";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";
const UPDATE_AVATAR = "UPDATE-AVATAR";

let initialState = {
    users: [],
    totalAmount: 0,
    usersAmountOnPage: 20,
    currentPage: 1,
    followInProgress: [],

    userProfile: null,
    userStatus: "no status",
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                }),
            };

        case SET_USERS:
            return {
                ...state,
                users: action.users,
            };

        case SET_TOTAL_AMOUNT:
            return {
                ...state,
                totalAmount: action.amount,
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };

        case TOGGLE_FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followInProgress: action.isFetching
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(
                          (id) => id != action.userId
                      ),
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile,
            };

        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.status,
            };

        case UPDATE_AVATAR:
            return {
                ...state,
                userProfile: {...state.userProfile, photos: {small: action.photoSmall, large: action.photoLarge}}
            }

        default:
            return state;
    }
};

export const follow = (id) => ({ type: FOLLOW, userId: id });
export const unfollow = (id) => ({ type: UNFOLLOW, userId: id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalAmount = (amount) => ({ type: SET_TOTAL_AMOUNT, amount });
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});
export const toggleFollowInProgress = (isFetching, userId) => ({
    type: TOGGLE_FOLLOW_IN_PROGRESS,
    isFetching,
    userId,
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
export const updateAvatarSuccess = (photoSmall, photoLarge) => ({ type: UPDATE_AVATAR, photoSmall, photoLarge})

//Thunks

export const getUsers = (currentPage, usersAmountOnPage) => (dispatch) => {
    getUsersAPI(currentPage, usersAmountOnPage).then((data) => {
        dispatch(setUsers(data.items));
        dispatch(setTotalAmount(data.totalCount));
    });
};

export const unfollowThunk = (userId) => (dispatch) => {
    dispatch(toggleFollowInProgress(true, userId));
    unfollowAPI(userId).then((data) => {
        if (data.resultCode === 0) {
            dispatch(unfollow(userId));
        }
    });
    dispatch(toggleFollowInProgress(false, userId));
};

export const followThunk = (userId) => (dispatch) => {
    dispatch(toggleFollowInProgress(true, userId));
    followAPI(userId).then((data) => {
        if (data.resultCode === 0) {
            dispatch(follow(userId));
        }
    });
    dispatch(toggleFollowInProgress(false, userId));
};

export const getUserProfile = (userId) => (dispatch) => {
    getUserProfileAPI(userId).then((data) => {
        dispatch(setUserProfile(data));
    });
};

export const getUserStatus = (userId) => (dispatch) => {
    getUserStatusAPI(userId).then((data) => {
        dispatch(setUserStatus(data));
    });
};

export const updateMyStatus = (status) => (dispatch) => {
    updateMyStatusAPI(status).then((data) => {
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    });
};

export const updateAvatarThunk = (photo) => (dispatch) => {
    updateAvatarAPI(photo).then(data => {
        if (data.resultCode === 0) {
            dispatch(updateAvatarSuccess(data.data.photos.small, data.data.photos.large))
        } else {
            alert('Error occured, try again later')
        }
    })
}

export const updateProfile = (object) => (dispatch, getState) => {
    updateProfileAPI(object).then((data) => {
        if (data.resultCode === 0) {
            dispatch(getUserProfile(getState().auth.id));
        } else {alert('error')}
    });
};

export default usersReducer;
