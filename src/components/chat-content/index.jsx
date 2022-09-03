import React, {useEffect, useRef} from 'react';

import Time from "../time";
import Scrollable from "../scrollable";
import Message from "../message";
import {useContext} from "../../store/context";
import {useScrollable} from "../../hooks/useScrollable";
import {actions} from "../../store/reducers";
import random from "../../hooks/useRandom";

import './index.scss';

const ChatContent = ({onClick, formData}) => {
    const {chatMessages, dispatch} = useContext();
    const scrollableRef = useRef();
    useScrollable(scrollableRef)

    useEffect(() => {
        async function typing() {
            // dispatch({type: actions.CHAT_TYPING, payload: true});

            for (const [index, sentence] of [
                'Hi',
                `Welcome to ${formData?.info?.title}`,
                `${formData?.info?.description}`,
            ].entries()) {
                dispatch({type: actions.ADD_SENTENCE, payload: sentence});

                await setTimeout(() => {
                    createMessage(sentence);
                }, index * 1000);
            }

            // await setTimeout(() => {
            //     dispatch({type: actions.CHAT_TYPING, payload: false});
            // }, 4 * 1000);
        }
        typing()
    },[]);

    function createMessage(message, is = true, itemId) {
        if (message?.trim()) {
            dispatch({type: actions.ADD_MESSAGE, payload: {
                    title: message?.trim(),
                    itemId: itemId ? itemId : random(),
                    editMessage: false,
                    is: !!is,
                    date: new Date().toLocaleTimeString('en-GB', {
                        hour12: false,
                        hour: "numeric",
                        minute: "numeric"
                    }).toString(),
                }
            });
        }
    }

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