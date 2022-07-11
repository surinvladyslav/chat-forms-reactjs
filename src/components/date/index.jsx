import * as React from 'react';

import cx from "classnames";
import {useContext} from "../../store/context";
import { format } from 'date-fns';

import './index.scss';

const Date = () => {
    const { messages } = useContext()
    const date = new window.Date();
    return (
        <div className={cx("bubble service is-date is-sticky")}>

        {/*<div className={cx("bubble service is-date", {'is-sticky': messages.length === 0})}>*/}
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

export default Date;
