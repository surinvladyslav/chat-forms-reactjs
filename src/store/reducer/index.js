export const actions = {
    LOADER: 'LOADER',
    AUTH: 'AUTH',
    DATA: 'DATA',
    FORM: 'FORM',
    DRAFT: 'DRAFT',
    SIDEBAR: 'SIDEBAR',
    DROPDOWN: 'DROPDOWN',
    MESSAGE_DROPDOWN: 'MESSAGE_DROPDOWN',
    ADD_MESSAGE: 'ADD_MESSAGE',
    DELETE_MESSAGE: 'DELETE_MESSAGE',
    POPUP: 'POPUP',
    POPUP_COPIED: 'POPUP_COPIED',
    CHANGE_MESSAGE: 'CHANGE_MESSAGE',
    EDITED: 'EDITED',
    ABOUT_FORM: 'ABOUT_FORM',
    FORM_ID: 'FORM_ID',
    FORM_DATA: 'FORM_DATA',
}

const rootReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case actions.LOADER:
            return {...state, loader: payload}
        case actions.DRAFT:
            return {...state, draft: payload}
        case actions.SIDEBAR:
            return {...state, sidebar: payload}
        case actions.DROPDOWN:
            return {...state, dropdown: payload}
        case actions.POPUP:
            return {...state, popup: payload}
        case actions.POPUP_COPIED:
            return {...state, popupCopied: payload}
        default:
            return state
    }
}

export default rootReducer;