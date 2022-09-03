import React, {createContext, useReducer} from 'react';
import rootReducer from "../reducers";
import messagesReducer from "../reducers/messages";
import useCombinedReducers from "../../hooks/useCombine";
import formsReducer from "../reducers/forms";

const AppContext = createContext(undefined);

export const Context = ({children}) => {
    const [state, dispatch] = useCombinedReducers({
        rootState: useReducer(rootReducer, {
            appLoader: false,
            chatSidebar: false,
            chatIndex: -1,
            chatTyping: false,
            chatDropdown: false,
        }),
        messageState: useReducer(messagesReducer, {
            chatMessages: [],
            chatSentences: [],
        }),
        formsState: useReducer(formsReducer, {
            formData: null,
        }),
    });

    return <AppContext.Provider value={{...state, dispatch}}>{ children }</AppContext.Provider>
};

export const useContext = () => {
    return React.useContext(AppContext)
};

