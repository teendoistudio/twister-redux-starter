import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from './types'
import config from '../config'
import { push } from 'connected-react-router'

const loginSuccess = (username, name, token) => ({
    type: AUTH_LOGIN_SUCCESS,
    payload: {
        username,
        name,
        token
    },
})

const { host, port } = config.api

const login = (username, password) => (dispatch) => {
    const uri = `http://${host}:${port}/api/TwisterUsers/login`

    fetch(uri, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
            username,
            password,
        }),
    }).then((response) => {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response.json()
    })
        .then(authInfo => dispatch(loginSuccess(authInfo.username, authInfo.name, authInfo.token)))
        .catch(err => console.error(err))
}

const signup = (username, name, email, password) => (dispatch) => {
    const uri = `http://${host}:${port}/api/TwisterUsers`

    fetch(uri, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
            username,
            name,
            email,
            password,
        }),
    }).then((response) => {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response.json()
    })
        .then(() => dispatch(push('/login')))
        .catch(err => console.error(err))
}

const logout = () => ({
  type: AUTH_LOGOUT,
})

export {
    login,
    signup,
    logout,
}
