import React, {createContext, useEffect, useReducer} from 'react';
import rootReducer from "../reducer";
import messagesReducer from "../reducer/messages";
import useCombinedReducers from "../../hooks/useCombine";
import formsReducer from "../reducer/forms";

const AppContext = createContext(undefined);

export const Context = ({children}) => {
    const store = JSON.parse(localStorage.getItem('store'));

    const [state, dispatch] = useCombinedReducers({
        rootState: useReducer(rootReducer, {
            loader: false,
            sidebar: false,
            draft: store?.draft ? store.draft : "",
            dropdown: false,
            popup: false,
            popupCopied: false,
        }),
        messageState: useReducer(messagesReducer, {
            messages: store?.messages ? store.messages : [],
            messageDropdown: false,
            edited: false,
        }),
        formsState: useReducer(formsReducer, {
            auth: store?.auth ? store.auth : null,
            data: store?.data ? store.data : null,
            formId: store?.formId ? store.formId : null,
            form: store?.form ? store.form : null,
            formData: store?.formData ? store.formData : null,
            aboutForm: store?.aboutForm ? store.aboutForm : null,
        }),
    });

    const { rootState, messageState, formsState } = state;

    useEffect(() => {
        try {
            localStorage.setItem('store', JSON.stringify({...rootState, ...messageState, ...formsState}))
        } catch (error) {
            console.log(error);
        }
    }, [rootState, messageState, formsState])

    return <AppContext.Provider value={{...rootState, ...messageState, ...formsState, dispatch}}>{ children }</AppContext.Provider>
};

export const useContext = () => {
    return React.useContext(AppContext)
};