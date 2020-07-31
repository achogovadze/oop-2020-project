import * as actionTypes from './actionTypes'

export const switchDarkMode = () => {
    localStorage.setItem('darkMode', !JSON.parse(localStorage.getItem('darkMode')))
    return {
        type: actionTypes.SWITCH_DARK_MODE,
    }
}

export const initDarkMode = () => {
    if (localStorage.getItem('darkMode') === null) {
        if (window.matchMedia) {
            localStorage.setItem('darkMode', window.matchMedia('(prefers-color-scheme: dark)').matches)
        }
    }
    return {
        type: actionTypes.INIT_DARK_MODE,
    }
}