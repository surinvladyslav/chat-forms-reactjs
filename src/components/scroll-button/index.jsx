import React, {useEffect, useState} from "react";

import {useContext} from "../../store/context";
import cx from "classnames";

import './index.scss';

const ScrollButton = ({onClick}) => {
    const {chatScrollButton} = useContext()

    const scrollToBottomWithSmoothScroll = () => {
        console.log('china');
        // chatScrollable.current.scrollTo({
        //     top: chatScrollable.current.scrollHeight,
        //     behavior: 'smooth',
        // })
    }
    return (
        <button
            className={cx("btn-circle btn-corner", {"active": chatScrollButton})}
            onClick={scrollToBottomWithSmoothScroll}
        >
            <svg height="25" className="octicon octicon-arrow-right color-fg-muted" viewBox="0 0 16 16" version="1.1" width="25" aria-hidden="true">
                <path fillRule="evenodd" d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"/>
            </svg>
        </button>
    );
}

export default ScrollButton;
