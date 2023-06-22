import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
});

export function getUserProfileAPI(userId) {
    return instance("profile/" + userId).then((response) => response.data);
}

export function getUsersAPI(currentPage, usersAmountOnPage) {
    return instance(
        `users?page=${currentPage}&count=${usersAmountOnPage}`
    ).then((response) => response.data);
}

export function authMeAPI() {
    return instance("auth/me").then((response) => response.data);
}

export function followAPI(userId) {
    return instance.post("follow/" + userId).then((response) => response.data);
}

export function unfollowAPI(userId) {
    return instance
        .delete("follow/" + userId)
        .then((response) => response.data);
}

export function getUserStatusAPI(userId) {
    return instance("profile/status/" + userId).then(
        (response) => response.data
    );
}

export function updateMyStatusAPI(statusText) {
    return instance.put("profile/status", { status: statusText });
}

export function loginAPI(values) {
    return instance
        .post("auth/login", values)
        .then((response) => response.data);
}

export function logoutAPI() {
    return instance.delete("auth/login").then((response) => response.data);
}

export function updateAvatarAPI(photo) {
    let formData = new FormData();
    formData.append("file", photo);
    return instance.put('profile/photo', formData, {headers: {'Content-Type': "multipart/form-data"}}).then(response => response.data)
}

export function getCaptchaAPI() {
    return instance('security/get-captcha-url').then(response => response.data)
}

export function updateProfileAPI(values) {
    return instance.put('profile', values).then(response => response.data)
}
