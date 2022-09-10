import {actions} from "./index";

const messagesReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case actions.ADD_MESSAGE:
            return {...state, chatMessages: [...state.chatMessages, payload]}
        case actions.ADD_QUESTIONS:
            return {...state, chatQuestions: payload}
        case actions.CHANGE_QUESTIONS:
            state.chatQuestions.find(question => {
                if (question.questionId === payload.questionId) {
                    question.checked = !question.checked
                }
            })
            return {...state, chatQuestions: [...state.chatQuestions]}
        case actions.CLEAR_QUESTIONS:
            return {...state, chatQuestions: []}
        // case actions.DELETE_MESSAGE:
        //     return {...state, chatMessages: state.chatMessages.filter(c => c.itemId !== payload)}
        // case actions.CHANGE_MESSAGE:
        //     state.chatMessages.find(message => {
        //         if (message.itemId === payload.id) {
        //             message.title = payload.title;
        //             message.edited = payload.edited;
        //         }
        //     })
        //     return {...state, chatMessages: [...state.chatMessages]}
        // case actions.MESSAGE_DROPDOWN:
        //     return {...state, messageDropdown: payload}
        // case actions.EDIT_MESSAGE:
        //     return {...state, editMessage: payload}
        default:
            return state
    }
}

export default messagesReducer;