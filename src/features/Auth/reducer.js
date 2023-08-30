import { USER_LOGIN, USER_LOGOUT } from "./Constants"

let initialState = {
    user: null,
    token: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGIN:
            return {
                user: action.user,
                token: action.token
            }

        case USER_LOGOUT:
            return {
                user: null,
                token: null
            }

        default:
            return state
    }
}

export default reducer