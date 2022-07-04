export const actions = {
    LOADER: 'LOADER',
    USER: 'USER',
    DATA: 'DATA',
    FORM: 'FORM',
    SIDEBAR: 'SIDEBAR',
    DROPDOWN: 'DROPDOWN',
    MESSAGE_DROPDOWN: 'MESSAGE_DROPDOWN',
    ADD_MESSAGE: 'ADD_MESSAGE',
    DELETE_MESSAGE: 'DELETE_MESSAGE',
    POPUP: 'POPUP',
    POPUP_COPIED: 'POPUP_COPIED',
    CHANGE_MESSAGE: 'CHANGE_MESSAGE',
    EDITED: 'EDITED',
}

export const baseReducer = (state, action) => {
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
        case actions.POPUP:
            return {...state, popup: payload}
        case actions.EDITED:
            return {...state, edited: payload}
        case actions.POPUP_COPIED:
            return {...state, popupCopied: payload}
        case actions.MESSAGE_DROPDOWN:
            return {...state, messageDropdown: payload}
        case actions.ADD_MESSAGE:
            localStorage.setItem('messages', JSON.stringify([...state.messages, payload]))
            return {...state, messages: [...state.messages, payload]}
        case actions.DELETE_MESSAGE:
            localStorage.setItem('messages', JSON.stringify([...state.messages.filter(c => c.itemId !== payload)]))
            return {...state, messages: state.messages.filter(c => c.itemId !== payload)}
        case actions.CHANGE_MESSAGE:
            state.messages.find(c => {
                if(c.itemId === payload.id) {
                    c.title = payload.title;
                    c.edited = payload.edited;
                    console.log(c);
                };
            })
            // localStorage.setItem('messages', JSON.stringify([...state.messages.find(c => {
            //     if(c.itemId === payload.id) {
            //         console.log(c);
            //         c.title = payload.title;
            //         c.edited = payload.edited;
                // };
            // })]))
            // return {...state, messages: state.messages.find(c => {
            //         if(c.itemId === payload.id) {
            //             c.title = payload.title;
            //             c.edited = payload.edited;
            //         };
            //     })
            // }
            break;
        default:
            return state
    }
}