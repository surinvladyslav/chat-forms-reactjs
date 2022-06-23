import * as React from 'react';

import useDrivePicker from 'react-google-drive-picker'

import './index.scss';

export default function ImportPage () {
    const [openPicker, authResponse] = useDrivePicker();
    console.log(authResponse);
    const handleOpenPicker = () => {
        openPicker({
            clientId: process.env.REACT_APP_CLIENT_ID,
            developerKey: process.env.REACT_APP_API_KEY,
            viewId: 'FORMS',
            callbackFunction: (data) => {
                if (data.action === 'cancel') {
                    console.log('User clicked cancel/close button')
                }
                console.log(data,'china')
            },
        })
    }
    return (
        <div className="import">
            {/*<div className="import-inner active">*/}
            {/*    <h4 className="import-title">Sign in to Google Parse</h4>*/}
            {/*    <p className="import-subtitle">Please enter google form URL.</p>*/}
            {/*    <input*/}
            {/*        className="import-input"*/}
            {/*        type="text"*/}
            {/*        placeholder="https://docs.google.com/forms/d/1dlHsMG..."*/}
            {/*        autoFocus*/}
            {/*    />*/}
            {/*    <button className="import-button">*/}
            {/*        next*/}
            {/*        <span className="loader"></span>*/}
            {/*    </button>*/}
            {/*    <button className="import-button toggle">*/}
            {/*        or import your form from google forms*/}
            {/*    </button>*/}
            {/*</div>*/}

            <div className="import-inner active">
                <h4 className="import-title">Sign in to Google Parse</h4>
                <p className="import-subtitle">Please sign in and import your google form.</p>
                <button className="import-button" onClick={handleOpenPicker}>
                    Import from Google Forms
                    <span className="loader"></span>
                </button>
                <button className="import-button toggle">
                    or type in your google forms form link
                </button>
            </div>
        </div>
    );
}