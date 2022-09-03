import * as React from 'react';
import {actions} from "../store/reducers";
import {useEffect, useState} from "react";
import {useContext} from "../store/context";

export const useGetForms = (id) => {
    const {dispatch} = useContext();
    const [formData, setFormData] = useState()

    useEffect(() => {
        dispatch({type: actions.APP_LOADER, payload: true})

        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/forms/${id}`).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then((data) => {
            console.log(data);
            setFormData(data);
            dispatch({type: actions.FORM_DATA, payload: data});
            dispatch({type: actions.APP_LOADER, payload: false});
        })
        .catch((error) => {
            console.log(error)
        });
    }, [])

    return formData;
};