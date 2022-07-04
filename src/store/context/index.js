import React from 'react';
import {baseReducer} from "../reducer";

const AppContext = React.createContext(undefined);

export const Context = ({children}) => {
    const formData = JSON.parse(localStorage.getItem('formData'));
    const formId = JSON.parse(localStorage.getItem('formId'));
    const auth = JSON.parse(localStorage.getItem('auth'));
    const messages = JSON.parse(localStorage.getItem('messages'));
    const aboutForm = JSON.parse(localStorage.getItem('aboutForm'));

    const [state, dispatch] = React.useReducer(baseReducer, {
        auth: auth ? auth : null,
        messages: messages ? messages : [],
        formId: formId ? formId : null,
        formData: formData ? formData : null,
        aboutForm: aboutForm ? aboutForm : null,
        loader: false,
        sidebar: false,
        dropdown: false,
        messageDropdown: false,
        popup: false,
        popupCopied: false,
        edited: false,
    })
    // const store = React.useMemo(() => [...state, dispatch], [state]);
    return <AppContext.Provider value={{...state, dispatch}}>{ children }</AppContext.Provider>
};

export const useContext = () => {
    return React.useContext(AppContext)
};