import * as React from 'react';

import useDrivePicker from 'react-google-drive-picker'
import { useNavigate } from 'react-router-dom';

import { useContext } from "../../store/context";
import { actions } from "../../store/reducer";
import SidebarHeader from "../../components/sidebar-header";
import useData from "../../hooks/useData";

import './index.scss';

const Import = () => {
    const navigate = useNavigate();
    const [openPicker, authResponse] = useDrivePicker();
    const [form, setForm] = React.useState(null)
    const { dispatch } = useContext()

    const handleOpenPicker = async () => {
        openPicker({
            clientId: process.env.REACT_APP_CLIENT_ID,
            developerKey: process.env.REACT_APP_API_KEY,
            viewId: 'FORMS',
            callbackFunction: (data) => {
                if (data.action === 'picked') {
                    dispatch({type: actions.LOADER, payload: true})
                    setForm(data.docs[0])
                }
            },
        })
    }

    React.useEffect(() => {
        if(authResponse) {
            dispatch({type: actions.AUTH, payload: authResponse})
        }
    }, [authResponse])

    React.useEffect(() => {
        if(form) {
            dispatch({type: actions.FORM, payload: form})
            useData(form.id, authResponse.access_token).then(response => {
                dispatch({type: actions.DATA, payload: response})
                dispatch({type: actions.ABOUT_FORM, payload: response.info})
                dispatch({type: actions.FORM_ID, payload: response.formId})
                dispatch({type: actions.FORM_DATA, payload: response.items})
            })
            dispatch({type: actions.LOADER, payload: false})
            navigate('/chat')
        }
    }, [form])

    return (
        <>
            <SidebarHeader/>
            <div className="import">
                <p className="import-subtitle">Please sign in and import your Google Form.</p>
                <button className="import-button" onClick={handleOpenPicker}>import</button>
            </div>
        </>
    );
}

export default Import;