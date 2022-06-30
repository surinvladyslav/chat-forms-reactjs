export const actions = {
    LOADER: 'LOADER',
    USER: 'USER',
    DATA: 'DATA',
    FORM: 'FORM',
    SIDEBAR: 'SIDEBAR',
    DROPDOWN: 'DROPDOWN',
}

export const Reducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case actions.LOADER:
            return {...state, loader: payload}
        case actions.USER:
            return {...state, user: payload}
        case actions.DATA:
            return {...state, data: payload}
        case actions.FORM:
            return {...state, form: payload}
        case actions.SIDEBAR:
            return {...state, sidebar: payload}
        case actions.DROPDOWN:
            return {...state, dropdown: payload}
        default:
            return state
    }
}