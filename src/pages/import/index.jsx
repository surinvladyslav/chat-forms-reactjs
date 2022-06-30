import * as React from 'react';

import useDrivePicker from 'react-google-drive-picker'
import { useNavigate } from 'react-router-dom';

import { useContext } from "../../store/context";
import { actions } from "../../store/reducer";
import SidebarHeader from "../../components/sidebar-header";

import './index.scss';

const Import = () => {
    const navigate = useNavigate();
    const [openPicker, authResponse] = useDrivePicker();
    const [data, setData] = React.useState(null)
    const { dispatch, user, form } = useContext()

    const handleOpenPicker = async () => {
        openPicker({
            clientId: process.env.REACT_APP_CLIENT_ID,
            developerKey: process.env.REACT_APP_API_KEY,
            viewId: 'FORMS',
            callbackFunction: (data) => {
                if (data.action !== 'cancel') {
                    console.log(data);
                    setData(data.docs[0])
                }
            },
        })
    }

    React.useEffect(() => {
        if(authResponse) {
            dispatch({type: actions.USER, payload: authResponse})
        }
    }, [authResponse])

    React.useEffect(() => {
        if(data) {
            dispatch({type: actions.LOADER, payload: true})
            dispatch({type: actions.FORM, payload: data})
            navigate(`/load`);
        }
    }, [data])

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