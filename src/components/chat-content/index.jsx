import React, {useRef} from 'react';

import Time from "../time";
import Scrollable from "../scrollable";
import Message from "../message";
import {useContext} from "../../store/context";
import {useScrollable} from "../../hooks/useScrollable";

import './index.scss';

const ChatContent = ({onClick, formData}) => {
    const {chatMessages} = useContext();
    const scrollableRef = useRef();
    useScrollable(scrollableRef)

    return (
        <div className="bubbles">
            <Scrollable ref={scrollableRef}>
                <div className="bubbles-inner">
                    <div className="bubbles-date-group">
                        <Time createdAt={formData?.createdAt}/>
                        <div className="bubbles-group">
                            {
                                chatMessages?.map((message, index) => (
                                    <Message
                                        onClick={onClick}
                                        read={message.read}
                                        is={message.is}
                                        // image={index === 1 && formData?.imageUri && formData?.imageUri}
                                        date={message.date}
                                        id={message.itemId}
                                        key={index}
                                    >{message.title}</Message>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Scrollable>
        </div>
    );
}

export default ChatContent;