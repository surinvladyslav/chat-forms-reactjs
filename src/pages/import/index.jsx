import React, {useEffect, useState} from 'react';

import useDrivePicker from 'react-google-drive-picker'
import {useSaveForms} from "../../hooks/useSaveForms";

import './index.scss';

const ImportPage = () => {
    const [openPicker, authResponse] = useDrivePicker();
    const [formId, setFormId] = useState(null)

    useSaveForms(formId, authResponse?.access_token)

    const handleOpenPicker = async () => {
        openPicker({
            clientId: process.env.REACT_APP_CLIENT_ID,
            developerKey: process.env.REACT_APP_API_KEY,
            viewId: 'FORMS',
            callbackFunction: async (data) => {
                if (data.action === 'picked') {
                    setFormId(data.docs[0].id)
                }
            },
        })
    }

    return (
        <button
            onClick={handleOpenPicker}
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}
        >import from google forms</button>
    );
}

export default ImportPage;