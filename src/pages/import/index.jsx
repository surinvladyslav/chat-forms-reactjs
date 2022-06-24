import * as React from 'react';

import useDrivePicker from 'react-google-drive-picker'

import './index.scss';
import { useContext } from "../../context";
import { actions } from "../../reducer";
import useData from "../../hooks/useData";

const Import = () => {
    const [openPicker, authResponse] = useDrivePicker();
    const { dispatch, user } = useContext()
    console.log(authResponse);
    const handleOpenPicker = async () => {
        dispatch({type: actions.LOADER, payload: true})
        let f = await useData(
            'https://forms.googleapis.com/v1/forms/1h7-giQUw0XH4UO3-x-s58pLvdEAhwBHzBqapeFZQKDA',
        'ya29.A0ARrdaM8BcDZvn1Pcle-3TeNwzkC8hsppWKyEKt1HIUxBIKR0yxEqdcdthrhXFeFaMmAxRjGv3V2-qNiN_BC6NXovnvqvMliO9hUln70JCF6uIm1ViHQ310JTBjnlyDUo12dk8rMceTkaIT2j1RR4TtXUJYOjZQYUNnWUtBVEFTQVRBU0ZRRl91NjFWZFAtaElVZWFQRnc2UDdjUi1nWklMdw0165'
            )
        console.log(f);
        // openPicker({
        //     clientId: process.env.REACT_APP_CLIENT_ID,
        //     developerKey: process.env.REACT_APP_API_KEY,
        //     viewId: 'FORMS',
        //     callbackFunction: (data) => {
        //         if (data.action === 'cancel') {
        //             console.log('User clicked cancel/close button')
        //         }
        //         console.log(data,'china')
        //     },
        // })
    }

    // if (authResponse) {
        // dispatch({type: actions.USER, payload: authResponse})
    // }

    // console.log(user,'user');
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

export default Import;