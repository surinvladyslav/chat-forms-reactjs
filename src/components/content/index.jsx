import React, {createRef, useCallback, useEffect, useRef} from 'react';

import Time from "../time";
import Scrollable from "../scrollable";
import Message from "../message";
import {useContext} from "../../store/context";
import useOnceCall from "../../hooks/useOnceCall";
import {actions} from "../../store/reducers";
import random from "../../hooks/useRandom";

import './index.scss';

const Content = ({onClick}) => {
    const {chatMessages, formData, dispatch} = useContext();
    const scrollableRef = useRef();
    const basePhrases = [
        'Hi',
        `Welcome to ${formData ? formData.info.title : 'Bot'}`,
        formData ? formData.info.description :
            'We teach programming for free everybody from 12 to 100 years old.\n' +
            '\n' +
            'More than 75% of adults, who finished at least the half of study course, found the job. They study online for at least 8 month.\n' +
            '\n' +
            'With teens of 12-17 years old, we study design, 3d, hardware and other directions, not only programming. They study offline in Kropyvnytskyi.\n' +
            '\n' +
            'The studying is hard: it doesn\'t make sense without self-discipline, belief in yourself and independent work.',
        'Ready for a few questions?',
        `Question 1 out of ${formData ? formData.items.length : 1}`,
        'To fill out this form, you must be signed in to your Google account'
    ];

    function addMessage(text, id) {
        if (text) {
            dispatch({
                type: actions.ADD_MESSAGE,
                payload: {
                    title: text,
                    itemId: id ? id : random(),
                    tail: true,
                    edited: false,
                    read: false,
                    is: true,
                    image: text === basePhrases[1] ? true : false,
                    date: new Date().toLocaleTimeString('en-GB', {
                        hour12: false,
                        hour: "numeric",
                        minute: "numeric"
                    }).toString(),
                }
            })
        }
    }

    useOnceCall(() => {
        if (!chatMessages.find(message => message.title === basePhrases[4])) {
            dispatch({type: actions.CLEAR_MESSAGES})
            dispatch({type: actions.CHAT_TYPING, payload: true})
            for (let i = 0; i < basePhrases.length; i++) {
                setTimeout(() => {
                    addMessage(basePhrases[i])
                }, i * 1000)
            }
        }
    })

    const toggleVisibleScrollButton = () => {
        const scrolled = scrollableRef.current?.scrollTop
        if (scrolled > 100) {
            return dispatch({type: actions.CHAT_SCROLL_BUTTON, payload: false})
        }
        if (scrolled <= 100) {
            return dispatch({type: actions.CHAT_SCROLL_BUTTON, payload: true})
        }
    };

    scrollableRef.current?.addEventListener('scroll', toggleVisibleScrollButton);

    const scrollToBottomWithSmoothScroll = () => {
        scrollableRef.current?.scrollTo({
            top: scrollableRef.current?.scrollHeight,
            behavior: 'smooth',
        })
    }

    const scrollToBottom = () => {
        scrollableRef.current.scrollTop = scrollableRef.current?.scrollHeight;
    };

    useEffect(() => {
        scrollToBottom()
    }, []);

    useEffect(() => {
        scrollToBottomWithSmoothScroll()
    }, [chatMessages]);

    return (
        <div className="bubbles">
            <Scrollable ref={scrollableRef}>
                <div className="bubbles-inner">
                    <div className="bubbles-date-group">
                        <Time/>
                        <div className="bubbles-group">
                            {
                                chatMessages &&
                                chatMessages.map((message, index) => (
                                    <Message
                                        tail={!!message.tail}
                                        edited={!!message.edited}
                                        onClick={onClick}
                                        read={!!message.read}
                                        is={!!message.is}
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

export default Content;