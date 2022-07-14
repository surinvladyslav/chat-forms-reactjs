import React, {useState} from 'react';
import {useEffect, useRef} from "react";
import cx from "classnames";

import Button from "../button";
import {useContext} from "../../store/context";
import {actions} from "../../store/reducers";
import random from "../../hooks/useRandom";
import ChatAnswers from "../chat-answers";

import './index.scss';

const ChatInput = ({messageId}) => {
    const textareaEl = useRef(null);
    const {dispatch, chatMessages, edited, chatDraft, chatAnswers, chatIndex} = useContext()
    const [text, setText] = useState(chatDraft)

    useEffect(() => {
        if (edited) {
            textareaEl.current.textContent = chatMessages.find((message) => message.itemId === messageId).title;
        }
        if (text) {
            textareaEl.current.textContent = text;
        }
    }, [edited, text]);

    function editMessage() {
        if (text) {
            dispatch({
                type: actions.CHANGE_MESSAGE, payload: {
                    title: text,
                    edited: true,
                    id: messageId,
                }
            })
            dispatch({type: actions.EDITED, payload: false})
            textareaEl.current.textContent = "";
            setText("");
        }
    }

    function createMessage() {
        if (text) {
            dispatch({
                type: actions.ADD_MESSAGE, payload: {
                    title: text,
                    itemId: random(),
                    tail: true,
                    edited: false,
                    read: true,
                    is: false,
                    date: new Date().toLocaleTimeString('en-GB', {
                        hour12: false,
                        hour: "numeric",
                        minute: "numeric"
                    }).toString(),
                }
            })
            textareaEl.current.textContent = "";
            setText("");
            dispatch({type: actions.CHAT_INDEX})
            dispatch({type: actions.CHAT_TYPING, payload: true})
        }
    }

    return (
        <div className="chat-input">
            <div className="chat-input-container">
                <div className="rows-wrapper-wrapper">
                    <div className="rows-wrapper chat-input-wrapper">
                        <svg className="bubble-tail" width="9" height="20" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <filter x="-50%" y="-14.7%" width="200%" height="141.2%" filterUnits="objectBoundingBox" id="a">
                                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                                    <feColorMatrix values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0" in="shadowBlurOuter1"></feColorMatrix>
                                </filter>
                            </defs>
                            <g fill="none" fillRule="evenodd">
                                <path d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z" fill="#000" filter="url(#a)"></path>
                                <path d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z" fill="#FFF" className="corner"></path>
                            </g>
                        </svg>

                        <div className="new-message-wrapper">
                            <Button
                                className={cx('btn-icon silver input', {'keyboard': !edited, 'emoji': edited})}
                                onClick={() => console.log('click')}
                            >
                                <svg className="keyboard" xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                        <path d="M515 3986 c-88 -22 -145 -54 -209 -118 -35 -35 -74 -87 -89 -118 -59 -122 -57 -83 -57 -1192 0 -1070 0 -1072 46 -1176 30 -68 131 -170 204 -205 126 -61 -10 -57 2152 -57 1432 0 1992 3 2030 11 92 20 155 55 222 121 35 35 74 87 89 118 59 122 57 83 57 1192 0 709 -3 1033 -11 1070 -37 174 -169 306 -354 353 -52 13 -300 15 -2045 14 -1539 -1 -1996 -3 -2035 -13z m4049 -326 c16 -8 39 -28 50 -43 21 -28 21 -29 21 -1050 0 -1118 3 -1056 -58 -1101 l-28 -21 -1982 0 c-2172 0 -2015 -4 -2061 58 -21 28 -21 29 -21 1057 0 1025 0 1029 21 1057 11 15 36 36 55 46 32 16 144 17 2004 15 1728 -3 1974 -5 1999 -18z" />
                                        <path d="M800 3200 l0 -160 160 0 160 0 0 160 0 160 -160 0 -160 0 0 -160z" />
                                        <path d="M1440 3200 l0 -160 160 0 160 0 0 160 0 160 -160 0 -160 0 0 -160z" />
                                        <path d="M2080 3200 l0 -160 160 0 160 0 0 160 0 160 -160 0 -160 0 0 -160z" />
                                        <path d="M2720 3200 l0 -160 160 0 160 0 0 160 0 160 -160 0 -160 0 0 -160z" />
                                        <path d="M3360 3200 l0 -160 160 0 160 0 0 160 0 160 -160 0 -160 0 0 -160z" />
                                        <path d="M4000 3200 l0 -160 160 0 160 0 0 160 0 160 -160 0 -160 0 0 -160z" />
                                        <path d="M800 2560 l0 -160 160 0 160 0 0 160 0 160 -160 0 -160 0 0 -160z" />
                                        <path d="M1440 2560 l0 -160 160 0 160 0 0 160 0 160 -160 0 -160 0 0 -160z" />
                                        <path d="M2080 2560 l0 -160 160 0 160 0 0 160 0 160 -160 0 -160 0 0 -160z" />
                                        <path d="M2720 2560 l0 -160 160 0 160 0 0 160 0 160 -160 0 -160 0 0 -160z" />
                                        <path d="M3360 2560 l0 -160 160 0 160 0 0 160 0 160 -160 0 -160 0 0 -160z" />
                                        <path d="M4000 2560 l0 -160 160 0 160 0 0 160 0 160 -160 0 -160 0 0 -160z" />
                                        <path d="M800 1920 l0 -160 160 0 160 0 0 160 0 160 -160 0 -160 0 0 -160z" />
                                        <path d="M1440 1920 l0 -160 1120 0 1120 0 0 160 0 160 -1120 0 -1120 0 0 -160z" />
                                        <path d="M4000 1920 l0 -160 160 0 160 0 0 160 0 160 -160 0 -160 0 0 -160z" />
                                    </g>
                                </svg>

                                <svg className="smile" xmlns="http://www.w3.org/2000/svg" version="1.0" width="344.000000pt" height="344.000000pt" viewBox="0 0 344.000000 344.000000" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,344.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                        <path d="M1545 3144 c-217 -33 -428 -109 -589 -212 -331 -212 -557 -539 -642 -932 -27 -121 -27 -439 0 -560 74 -342 251 -630 519 -843 168 -135 379 -233 607 -283 133 -29 439 -27 579 4 563 126 983 551 1107 1122 15 67 19 127 19 280 0 153 -4 213 -19 280 -50 228 -148 439 -283 607 -206 258 -483 434 -803 510 -87 20 -136 25 -285 28 -99 2 -193 1 -210 -1z m410 -229 c489 -101 854 -465 961 -960 24 -110 24 -360 0 -470 -107 -495 -467 -854 -961 -961 -111 -24 -361 -24 -470 0 -248 54 -454 165 -625 336 -523 523 -464 1382 125 1831 161 123 372 209 581 238 94 13 292 6 389 -14z"/>
                                        <path d="M1238 2251 c-46 -15 -85 -49 -107 -94 -27 -56 -27 -102 2 -157 66 -132 248 -132 315 0 12 24 22 60 22 79 0 51 -37 119 -79 147 -41 26 -111 38 -153 25z"/>
                                        <path d="M2098 2251 c-46 -15 -85 -49 -107 -94 -27 -56 -27 -102 2 -157 66 -132 248 -132 315 0 12 24 22 60 22 79 0 51 -37 119 -79 147 -41 26 -111 38 -153 25z"/>
                                        <path d="M1057 1404 c-31 -31 -42 -78 -28 -116 16 -43 138 -160 224 -216 84 -55 196 -102 292 -123 94 -21 294 -16 389 10 164 44 335 150 436 271 38 45 45 61 45 96 0 62 -42 104 -102 104 -42 0 -49 -5 -138 -89 -142 -136 -273 -191 -456 -191 -179 0 -317 58 -461 197 -82 79 -89 83 -131 83 -34 0 -50 -6 -70 -26z"/>
                                    </g>
                                </svg>
                            </Button>

                            <div className="input-message-container">
                                <div
                                    className="input-message-input scrollable scrollable-y i18n no-scrollbar"
                                    ref={textareaEl}
                                    contentEditable={true}
                                    suppressContentEditableWarning={true}
                                    dir="auto"
                                    onInput={(event) => {
                                        textareaEl.current.textContent = event.target.textContent
                                        setText(event.target.textContent)
                                        dispatch({type: actions.CHAT_DRAFT, payload: event.target.textContent})
                                    }}
                                    data-placeholder="Message"
                                    style={{transitionDuration: '181ms'}}
                                    onKeyPress={event => {
                                        if (event.key === 'Enter') {
                                            edited ? editMessage() : createMessage()
                                        }
                                    }}
                                />
                            </div>

                            <Button
                                className={'btn-icon input'}
                                onClick={() => dispatch({type: actions.CHAT_ANSWERS, payload: !chatAnswers})}
                            >⌘</Button>

                            <Button
                                className={cx('btn-icon blue input', {
                                    'send': edited ? false : true,
                                    'check': edited,
                                    'microphone': edited ? false : !text
                                })}
                                onClick={edited ? editMessage : createMessage}
                            >
                                <svg className="tgico tgico-send" xmlns="http://www.w3.org/2000/svg" version="1.0"
                                     width="260.000000pt" height="280.000000pt" viewBox="0 0 260.000000 280.000000"
                                     preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,280.000000) scale(0.100000,-0.100000)"
                                       fill="#000000" stroke="none">
                                        <path
                                            d="M1270 1950 c-382 -137 -714 -257 -738 -266 -47 -17 -66 -54 -41 -79 8 -8 157 -69 332 -136 l317 -121 62 57 c34 31 222 208 418 394 372 352 442 415 349 316 -31 -33 -217 -230 -413 -438 -196 -208 -356 -382 -356 -387 0 -5 54 -150 120 -322 106 -278 135 -338 161 -338 30 0 65 88 310 774 250 703 262 740 248 765 -10 18 -24 27 -44 28 -18 1 -305 -96 -725 -247z"/>
                                    </g>
                                </svg>

                                <svg className="tgico tgico-microphone" xmlns="http://www.w3.org/2000/svg" version="1.0"
                                     width="344.000000pt" height="344.000000pt" viewBox="0 0 344.000000 344.000000"
                                     preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,344.000000) scale(0.100000,-0.100000)"
                                       fill="#000000" stroke="none">
                                        <path
                                            d="M1587 3130 c-139 -44 -244 -157 -283 -305 -21 -78 -20 -988 1 -1070 43 -163 182 -288 354 -316 166 -26 346 61 434 212 55 93 57 121 57 644 0 510 -2 531 -50 625 -94 185 -313 274 -513 210z"/>
                                        <path
                                            d="M793 1839 c-72 -46 -78 -121 -24 -289 107 -331 376 -576 727 -663 l83 -20 3 -178 c3 -173 4 -178 28 -204 50 -54 114 -69 168 -41 15 8 38 26 52 41 24 26 25 31 28 204 l3 178 88 22 c345 84 617 333 722 661 40 125 47 186 24 233 -46 98 -200 103 -249 9 -8 -16 -22 -60 -31 -98 -52 -227 -239 -430 -470 -511 -73 -25 -92 -27 -225 -27 -132 0 -152 2 -222 27 -235 82 -421 283 -473 511 -9 38 -23 82 -31 98 -34 65 -136 89 -201 47z"/>
                                    </g>
                                </svg>

                                <svg className="tgico tgico-check" xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                        <path d="M4605 4386 c-105 -33 -109 -36 -1445 -1372 l-1315 -1314 -595 595 c-553 551 -600 596 -662 625 -159 74 -328 51 -454 -63 -100 -90 -149 -234 -125 -364 25 -134 9 -117 839 -944 726 -724 771 -767 832 -794 78 -34 185 -44 257 -25 122 33 70 -16 1629 1543 1614 1616 1522 1517 1547 1660 34 199 -91 392 -292 453 -56 17 -162 17 -216 0z"/>
                                    </g>
                                </svg>
                            </Button>
                            <ChatAnswers/>
                        </div>
                    </div>
                </div>
            </div>
    {/*<app-emoji (sidebarEmoji)="emojiSwitchHandler($event)" [emoji]="emoji"></app-emoji>*/}
    </div>
);
}

export default ChatInput;