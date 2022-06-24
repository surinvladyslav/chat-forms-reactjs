import * as React from 'react';

import './index.scss';
import Moment from "moment";

const Date = ({ date }) => {
    return (
        <div className="bubble service is-date">
            <div className="bubble-content">
                <div className="service-msg">
                    <span className="i18n">{Moment(new window.Date()).format('MMMM d')}</span>
                </div>
            </div>
        </div>
    );
}

export default Date;
