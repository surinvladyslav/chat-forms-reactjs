import * as React from 'react';

import Date from "../date";
import Scrollable from "../scrollable";
import Message from "../message";

import './index.scss';

const Content = () => {
    return (
        <div className="bubbles">
            <Scrollable>
                <div className="bubbles-inner">
                    <div className="bubbles-date-group">
                        <Date/>
                        {
                            ['dsfsfs','fsdfas','vxcvxczv'].map((text) => (
                                <Message tail={true} edited={false} read={true} is={true} key={text}>{text}</Message>
                            ))
                        }
                    </div>
                </div>
            </Scrollable>
        </div>
    );
}

export default Content;