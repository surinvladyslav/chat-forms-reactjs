import React, {useEffect} from 'react';

import cx from "classnames";
import {useCallback} from "react";
import {useContext} from "../../store/context";
import {actions} from "../../store/reducers";

import './index.scss';

const PopupConfirm = ({messageId}) => {
    const {chatPopupConfirm, dispatch} = useContext()

    function deleteMessage(){
        dispatch({type: actions.DELETE_MESSAGE, payload: messageId})
        dispatch({type: actions.CHAT_POPUP_CONFIRM, payload: false})
    }

    function cancelMessage() {
        dispatch({type: actions.CHAT_POPUP_CONFIRM, payload: false})
    }

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            dispatch({type: actions.CHAT_POPUP_CONFIRM, payload: false})
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    return (
        <div className={cx('popup popup-peer', {'active': chatPopupConfirm})}>
            <div className="popup-container z-depth-1 have-checkbox">
                <div className="popup-header">
                    <div className="popup-title">
                        <span className="i18n">Delete message</span>
                    </div>
                </div>
                <p className="popup-description">
                    <span className="i18n">Are you sure you want to delete this message?</span>
                </p>
                <div className="popup-buttons popup-buttons-row">
                    <button
                        className="btn danger rp"
                        onClick={deleteMessage}
                    >
                        <span className="i18n">Delete</span>
                    </button>
                    <button
                        className="btn primary rp"
                        onClick={cancelMessage}
                    >
                        <span className="i18n">Cancel</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PopupConfirm;