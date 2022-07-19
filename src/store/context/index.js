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
            // chatIndex: 0,
            chatTyping: false,
            chatDraft: store?.chatDraft ? store.chatDraft : "",
            chatDropdown: false,
            chatPopupConfirm: false,
            chatScrollButton: false,
            chatAnswers: [],
            chatPopupAnswers: false,
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
            formImage: 'https://lh4.googleusercontent.com/0QamtH-IShBVL1SskiR0EhyYqIhVcyaxWEkxjF03AHzN6v29uucfSBj2U3pvEaeMbukWrre-r3l7yYIW-ok2bd_gI_nxhHRKIxDuKJL3boDCOKlzloHSW0xxijHvWJPqM2vk6sLAwJ4DJKx2on9kxfdNCw',
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