import * as React from 'react';

import './index.scss';
import cx from "classnames";
import {useContext} from "../../store/context";

const Loader = () => {
    const {loader} = useContext()
    return (
        <div className={cx("loader", { 'active': loader })}>
            <svg className="circular" viewBox="25 25 50 50">
                <circle className="path" cx="50" cy="50" r="20" fill="none"/>
            </svg>
        </div>
    );
}

export default Loader;