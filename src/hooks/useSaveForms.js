import * as React from 'react';
import {actions} from "../store/reducers";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useContext} from "../store/context";

export const useSaveForms = (formId, accessToken) => {
    const {dispatch} = useContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (formId && accessToken) {
            dispatch({type: actions.APP_LOADER, payload: true});

            fetch(`${process.env.REACT_APP_BACKEND_URL}/api/forms`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    formId,
                    accessToken
                })
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.statusText);
            })
            .then((id) => {
                console.log(id);
                navigate(`/share/${id}`);
                dispatch({type: actions.APP_LOADER, payload: false});
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, [formId, accessToken]);
};