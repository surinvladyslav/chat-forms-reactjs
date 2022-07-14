import React, {createContext, useEffect, useReducer} from 'react';
import rootReducer from "../reducers";
import messagesReducer from "../reducers/messages";
import useCombinedReducers from "../../hooks/useCombine";
import formsReducer from "../reducers/forms";

const AppContext = createContext(undefined);

export const Context = ({children}) => {
    const store = JSON.parse(localStorage.getItem('store'));

    const [state, dispatch] = useCombinedReducers({
        rootState: useReducer(rootReducer, {
            appLoader: false,
            chatSidebar: false,
            chatIndex: store?.chatIndex ? store.chatIndex : 0,
            chatTyping: false,
            chatDraft: store?.chatDraft ? store.chatDraft : "",
            chatDropdown: false,
            chatPopupConfirm: false,
            chatAnswers: false,
            chatPopupCopied: false,
        }),
        messageState: useReducer(messagesReducer, {
            chatMessages: store?.chatMessages ? store.chatMessages : [],
            messageDropdown: false,
            editMessage: false,
        }),
        formsState: useReducer(formsReducer, {
            googleAuth: store?.googleAuth ? store.googleAuth : null,
            formData: store?.formData ? store.formData : null,
            formId: store?.formId ? store.formId : null,
            formBaseData: store?.formBaseData ? store.formBaseData : null,
        }),
    });

    useEffect(() => {
        try {
            localStorage.setItem('store', JSON.stringify(state))
        } catch (error) {
            console.log(error);
        }
    }, [state])

    return <AppContext.Provider value={{...state, dispatch}}>{ children }</AppContext.Provider>
};

export const useContext = () => {
    return React.useContext(AppContext)
};