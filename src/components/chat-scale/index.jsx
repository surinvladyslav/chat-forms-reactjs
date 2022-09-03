import React from 'react';

import cx from "classnames";
import Button from "../button";

import './index.scss';

const ChatScale = ({scaleQuestion, onClick}) => {
    return (
        scaleQuestion &&
        <div className="chat-questions">
            <div className="chat-questions-inner">
                <p>{scaleQuestion?.lowLabel}</p>
                {Array.from(Array(scaleQuestion?.high), (e, i) => {
                    return <Button
                        className={cx("btn-primary")}
                        key={i}
                        onClick={(event) => onClick(event.currentTarget.value)}
                    >
                        {i+1}
                    </Button>
                })}
                <p>{scaleQuestion?.highLabel}</p>
            </div>
        </div>
    );
}

export default ChatScale;