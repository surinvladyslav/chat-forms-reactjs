import {actions} from "./index";

const MessagesReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case actions.ADD_MESSAGE:
            localStorage.setItem('messages', JSON.stringify([...state.messages, payload]))
            return {...state, messages: [...state.messages, payload]}
        default:
            return state
    }
}

export default MessagesReducer;