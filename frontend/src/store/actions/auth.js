import * as actionTypes from './actionTypes'
import axios from 'axios'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')

    return {
        type: actionTypes.AUTH_LOGOUT,
        // type: actionTypes.AUTH_INITIATE_LOGOUT,
    }
}

export const logoutSucceed = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    }
}

export const auth = (email, password, isSignup, birthDate, country, phone, firstName, lastName) => {
    return dispatch => {
        // auth...
        dispatch(authStart())
        let authData = {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
            birth_date: birthDate,
            country: country,
            phone_number: phone,
            city: 'Tbilisi',
            user_role: 'user',
            address: 'Pekini',
            returnSecureToken: true,
        }

        let url = 'http://localhost:8081/oop_final4_war/register'
        if (!isSignup) {
            url = 'http://localhost:8081/oop_final4_war/login'
            authData = {
                email: email,
                password: password,
                returnSecureToken: true,
            }
        }
        axios.get(url, {
            params: authData,
        })
            .then(response => {
                // const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)

                // localStorage.setItem('expirationDate', expirationDate)
                localStorage.setItem('userId', email)
                alert(response.data.message)
                axios.get('http://localhost:8081/oop_final4_war/getUserServlet', {
                    params: {
                        email: email,
                    }
                }).then(res => {
                    dispatch(authSuccess(res.data.id, email))
                    localStorage.setItem('token', res.data.id)
                })
                    .catch(error => error)
                // dispatch(checkAuthTimeout(response.data.expiresIn))
            })
            .catch(error => {
                console.log(error)
                // dispatch(authFail(error.response.data.error))
            })
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path,
    }
}

export const deleteAccountFromDatabase = () => {
    return dispatch => {
        const email = localStorage.getItem('userId')
        axios.get('http://localhost:8081/oop_final4_war/deleteUser', {
            params: {
                email: email,
            }
        }).then(res => dispatch(deleteAccount()))
            .catch(error => console.log(error))
    }
}

export const deleteAccount = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    return {
        type: actionTypes.DELETE_ACCOUNT,
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout())
        } else {
            // const expirationDate = new Date(localStorage.getItem('expirationDate'))
            // if (expirationDate > new Date()) {
            const userId = localStorage.getItem('userId')
            dispatch(authSuccess(token, userId))
            // dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            // } else {
            // dispatch(logout())
            // }
        }
    }
}