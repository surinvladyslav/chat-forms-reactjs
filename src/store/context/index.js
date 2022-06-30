import React from 'react';
import { Reducer } from "../reducer";

const AppContext = React.createContext();

export const Context = ({children}) => {
    const [state, dispatch] = React.useReducer(Reducer, {
        user: null,
        data: null,
        form: null,
        loader: false,
        sidebar: false,
        dropdown: false,
    })

    return <AppContext.Provider value={{...state, dispatch}}>{ children }</AppContext.Provider>
};

export const useContext = () => {
    return React.useContext(AppContext)
};