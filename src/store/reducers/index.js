export const actions = {
    APP_LOADER: 'APP_LOADER',
    CHAT_TYPING: 'CHAT_TYPING',
    CHAT_INDEX: 'CHAT_INDEX',

    FORM_DATA: 'FORM_DATA',

    CHANGE_QUESTIONS: 'CHANGE_QUESTIONS',
    CLEAR_QUESTIONS: 'CLEAR_QUESTIONS',
    ADD_QUESTIONS: 'ADD_QUESTIONS',
    ADD_MESSAGE: 'ADD_MESSAGE',
    ADD_SENTENCE: 'ADD_SENTENCE',
    CHANGE_MESSAGE: 'CHANGE_MESSAGE',
    DELETE_MESSAGE: 'DELETE_MESSAGE',
    EDIT_MESSAGE: 'EDIT_MESSAGE',

    CHAT_DROPDOWN: 'CHAT_DROPDOWN',
    MESSAGE_DROPDOWN: 'MESSAGE_DROPDOWN',
}

const rootReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case actions.APP_LOADER:
            return {...state, appLoader: payload}
        case actions.CHAT_INDEX:
            return {...state, chatIndex: state.chatIndex+1 }
        case actions.CHAT_DROPDOWN:
            return {...state, chatDropdown: payload}
        case actions.CHAT_TYPING:
            return {...state, chatTyping: payload}
        default:
            return state
    }
}

export default rootReducer;