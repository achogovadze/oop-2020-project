import * as actionTypes from '../actions/actionTypes'

const initialState = {
    darkMode: JSON.parse(localStorage.getItem('darkMode'))
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_DARK_MODE:
            return {
                darkMode: JSON.parse(localStorage.getItem('darkMode')),
            }
        case actionTypes.SWITCH_DARK_MODE:
            return {
                darkMode: JSON.parse(localStorage.getItem('darkMode')),
            }
        default: return state
    }
}

export default reducer