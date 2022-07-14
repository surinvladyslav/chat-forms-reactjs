import React, {useEffect} from 'react';

import cx from "classnames";
import {useContext} from "../../store/context";
import {actions} from "../../store/reducers";

import './index.scss';

const PopupCopied = () => {
    const {chatPopupCopied, dispatch} = useContext()

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: actions.CHAT_POPUP_COPIED, payload: false})
        }, 1000)
    },[chatPopupCopied])

    return (
        <div className={cx('popup-copied', {'active': chatPopupCopied})}>
            <p className="popup-copied-description">
                <span className="i18n">Message copied to clipboard.</span>
            </p>
        </div>
    );
}

export default PopupCopied;