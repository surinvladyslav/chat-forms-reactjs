import * as React from 'react';

import cx from "classnames";
import {useContext} from "../../store/context";
import {actions} from "../../store/reducer";

import './index.scss';

const Popup = ({id}) => {
    const {popup, dispatch} = useContext()

    function deleteMessage(){
        dispatch({type: actions.DELETE_MESSAGE, payload: id})
        dispatch({type: actions.POPUP, payload: false})
    }

    function cancelMessage() {
        dispatch({type: actions.POPUP, payload: false})
    }
    return (
        <div className={cx('popup popup-peer', {'active': popup})}>
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

export default Popup;