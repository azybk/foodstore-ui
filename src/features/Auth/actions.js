import { USER_LOGIN, USER_LOGOUT } from "./Constants";

const userLogin = (user, token) => {
    return {
        type: USER_LOGIN,
        user,
        token
    }
}

const userLogout = () => {
    return {
        type: USER_LOGOUT
    }
}

export { userLogin, userLogout };
