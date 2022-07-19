export const actions = {
    APP_LOADER: 'APP_LOADER',
    CHAT_POPUP_ANSWERS: 'CHAT_POPUP_ANSWERS',
    CHAT_TYPING: 'CHAT_TYPING',
    CHAT_DRAFT: 'CHAT_DRAFT',
    CHAT_SIDEBAR: 'CHAT_SIDEBAR',
    CHAT_INDEX: 'CHAT_INDEX',
    CHAT_SCROLLABLE: 'CHAT_SCROLLABLE',
    CHAT_TIME: 'CHAT_TIME',
    CHAT_SCROLL_BUTTON: 'CHAT_SCROLL_BUTTON',
    CHAT_DROPDOWN: 'CHAT_DROPDOWN',
    CHAT_POPUP_CONFIRM: 'CHAT_POPUP_CONFIRM',
    CHAT_POPUP_COPIED: 'POPUP_COPIED',

    GOOGLE_AUTH: 'GOOGLE_AUTH',
    FORM_DATA: 'FORM_DATA',
    FORM_ID: 'FORM_ID',
    FORM_BASE_DATA: 'FORM_BASE_DATA',

    CLEAR_MESSAGES: 'CLEAR_MESSAGES',
    MESSAGE_DROPDOWN: 'MESSAGE_DROPDOWN',
    ADD_MESSAGE: 'ADD_MESSAGE',
    DELETE_MESSAGE: 'DELETE_MESSAGE',
    CHANGE_MESSAGE: 'CHANGE_MESSAGE',
    EDIT_MESSAGE: 'EDIT_MESSAGE',
}

const rootReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case actions.APP_LOADER:
            return {...state, appLoader: payload}
        case actions.CHAT_DRAFT:
            return {...state, chatDraft: payload}
        case actions.CHAT_INDEX:
            return {...state, chatIndex: payload ? payload : state.chatIndex++}
        case actions.CHAT_SIDEBAR:
            return {...state, chatSidebar: payload}
        case actions.CHAT_DROPDOWN:
            return {...state, chatDropdown: payload}
        case actions.CHAT_SCROLLABLE:
            return {...state, chatScrollable: payload}
        case actions.CHAT_TIME:
            return {...state, chatTime: payload}
        case actions.CHAT_SCROLL_BUTTON:
            return {...state, chatScrollButton: payload}
        case actions.CHAT_POPUP_CONFIRM:
            return {...state, chatPopupConfirm: payload}
        case actions.CHAT_TYPING:
            return {...state, chatTyping: payload}
        case actions.CHAT_POPUP_COPIED:
            return {...state, chatPopupCopied: payload}
        case actions.CHAT_POPUP_ANSWERS:
            return {...state, chatPopupAnswers: payload}
        default:
            return state
    }
}

export default rootReducer;