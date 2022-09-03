import React from 'react';

import cx from "classnames";
import {useContext} from "../../store/context";
import moment from "moment";

import './index.scss';

const Time = ({createdAt}) => {
    const { chatMessages } = useContext();
    return (
        <div className={cx("bubble service is-date", {'is-sticky': chatMessages && chatMessages.length === 0})}>
            <div className="bubble-content">
                <div className="service-msg">
                    <span className="i18n">{moment(createdAt).format("LL")}</span>
                </div>
            </div>
        </div>
    );
}

export default Time;
