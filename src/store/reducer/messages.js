import {actions} from "./index";

const messagesReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case actions.ADD_MESSAGE:
            return {...state, messages: [...state.messages, payload]}
        case actions.DELETE_MESSAGE:
            return {...state, messages: state.messages.filter(c => c.itemId !== payload)}
        case actions.CHANGE_MESSAGE:
            state.messages.find(message => {
                if (message.itemId === payload.id) {
                    message.title = payload.title;
                    message.edited = payload.edited;
                }
            })
            return {...state, messages: [...state.messages]}
        case actions.MESSAGE_DROPDOWN:
            return {...state, messageDropdown: payload}
        case actions.EDITED:
            return {...state, edited: payload}
        default:
            return state
    }
}

export default messagesReducer;