import * as React from 'react';

import cx from "classnames";
import {useContext} from "../../store/context";

import './index.scss';

const Dropdown = ({ children, className, style, onMouseLeave}) => {
    const { dropdown, messageDropdown } = useContext()
    return (
        <div
            className={cx(className, {'open': dropdown, 'active': messageDropdown})}
            onMouseLeave={onMouseLeave}
            style={style}
        >
            {children}
        </div>
    );
}

export default Dropdown;