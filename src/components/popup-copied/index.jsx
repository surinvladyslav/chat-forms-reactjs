import * as React from 'react';

import cx from "classnames";
import {useContext} from "../../store/context";
import {actions} from "../../store/reducer";

import './index.scss';

const PopupCopied = () => {
    const {popupCopied, dispatch} = useContext()

    React.useEffect(() => {
        setTimeout(() => {
            dispatch({type: actions.POPUP_COPIED, payload: false})
        }, 1000)
    },[popupCopied])

    return (
        <div className={cx('popup-copied', {'active': popupCopied})}>
            <p className="popup-copied-description">
                <span className="i18n">Message copied to clipboard.</span>
            </p>
        </div>
    );
}

export default PopupCopied;