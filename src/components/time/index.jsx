import React from 'react';

import cx from "classnames";
import {useContext} from "../../store/context";
import { format } from 'date-fns';

import './index.scss';

const Time = () => {
    const { chatMessages } = useContext()
    const date = new window.Date();
    return (
        <div className={cx("bubble service is-date", {'is-sticky': chatMessages && chatMessages.length === 0})}>
            <div className="bubble-content">
                <div className="service-msg">
                    <span className="i18n">{
                        format(date,'MMMM d')
                    }</span>
                </div>
            </div>
        </div>
    );
}

export default Time;
