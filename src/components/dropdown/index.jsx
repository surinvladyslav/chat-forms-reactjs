import * as React from 'react';

import './index.scss';
import cx from "classnames";
import {useContext} from "../../store/context";

const Dropdown = ({ active }) => {
    const { dropdown } = useContext()
    return (
        <div className={cx("dropdown", {'open': dropdown})}
             style={{transformOrigin: 'right top'}}>
            <div className="compact">
                <i className="icon-video-outlined"></i>Video Call
            </div>
            <div className="compact">
                <i className="icon-mute"></i>Mute
            </div>
            <div className="compact">
                <i className="icon-select"></i>Select messages
            </div>
            <div className="compact">
                <i className="icon-flag"></i>Report
            </div>
        </div>
    );
}

export default Dropdown;