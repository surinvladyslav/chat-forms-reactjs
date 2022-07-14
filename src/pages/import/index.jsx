import React, {useEffect, useState} from 'react';

import useDrivePicker from 'react-google-drive-picker'
import { useNavigate } from 'react-router-dom';

import { useContext } from "../../store/context";
import { actions } from "../../store/reducers";
import SidebarHeader from "../../components/sidebar-header";
import useData from "../../hooks/useData";

import './index.scss';

const Import = () => {
    const navigate = useNavigate();
    const [openPicker, authResponse] = useDrivePicker();
    const [form, setForm] = useState(null)
    const { dispatch } = useContext()

    const handleOpenPicker = async () => {
        openPicker({
            clientId: process.env.REACT_APP_CLIENT_ID,
            developerKey: process.env.REACT_APP_API_KEY,
            viewId: 'FORMS',
            callbackFunction: (data) => {
                if (data.action === 'picked') {
                    dispatch({type: actions.APP_LOADER, payload: true})
                    setForm(data.docs[0])
                }
            },
        })
    }

     useEffect(() => {
        if (authResponse) {
            dispatch({type: actions.GOOGLE_AUTH, payload: authResponse})
        }
    }, [authResponse])

     useEffect(() => {
        if (form) {
            dispatch({type: actions.FORM_BASE_DATA, payload: form})
            useData(form.id, authResponse.access_token).then(response => {
                dispatch({type: actions.FORM_DATA, payload: response})
                dispatch({type: actions.FORM_ID, payload: response.formId})
            })
            dispatch({type: actions.APP_LOADER, payload: false})
            navigate('/chat')
        }
    }, [form])

    return (
        <>
            <SidebarHeader/>
            <div className="import">
                <p className="import-subtitle">Please sign in and import your Google Form.</p>
                <button
                    className="import-button"
                    onClick={handleOpenPicker}
                >import</button>
            </div>
        </>
    );
}

export default Import;