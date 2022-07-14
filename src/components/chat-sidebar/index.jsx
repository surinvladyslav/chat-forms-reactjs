import React, {useCallback, useEffect} from 'react';

import cx from "classnames";

import Button from "../button";
import Avatar from "../avatar";
import Scrollable from "../scrollable";
import {useContext} from "../../store/context";
import {actions} from "../../store/reducers";

import './index.scss';

const ChatSidebar = () => {
    const {dispatch, chatSidebar} = useContext()

    const chatSidebarData = [
        {
            title: 'Ш++',
            subtitle: 'Username',
            image:
                <svg className="row-icon" xmlns="http://www.w3.org/2000/svg" version="1.0"
                 width="344.000000pt" height="344.000000pt"
                         viewBox="0 0 344.000000 344.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,344.000000) scale(0.100000,-0.100000)"
                       fill="#000000" stroke="none">
                        <path
                            d="M1545 3144 c-299 -45 -547 -157 -762 -342 -238 -206 -399 -482 -469 -802 -27 -121 -27 -439 0 -560 110 -507 464 -911 940 -1074 191 -66 214 -69 660 -73 442 -5 446 -4 491 49 48 57 42 139 -16 194 l-30 29 -387 6 c-413 6 -470 12 -621 64 -314 106 -575 353 -695 658 -208 526 -6 1124 479 1413 281 168 643 205 956 99 395 -135 685 -476 760 -895 8 -45 14 -152 14 -270 l0 -195 -28 -47 c-68 -116 -228 -142 -327 -52 -58 53 -68 92 -74 299 -6 207 -18 272 -76 390 -172 354 -609 502 -958 326 -245 -124 -396 -367 -396 -641 0 -326 211 -602 529 -691 101 -28 258 -31 355 -5 95 25 218 89 283 147 l57 51 63 -64 c157 -158 377 -197 576 -102 135 65 242 200 271 341 20 94 7 516 -18 624 -101 428 -367 776 -741 968 -225 115 -368 151 -626 156 -99 2 -193 1 -210 -1z m280 -1009 c83 -22 147 -60 206 -122 235 -249 96 -657 -245 -716 -279 -48 -537 209 -489 487 43 254 284 414 528 351z"/>
                    </g>
                </svg>
        },
        {
            title: 'We teach programming for free everybody from 12 to 100 years old.\n' +
                '\n' +
                'More than 75% of adults, who finished at least the half of study course, found the job. They study online for at least 8 month.\n' +
                '\n' +
                'With teens of 12-17 years old, we study design, 3d, hardware and other directions, not only programming. They study offline in Kropyvnytskyi.\n' +
                '\n' +
                'The studying is hard: it doesn\'t make sense without self-discipline, belief in yourself and independent work.',
            subtitle: 'Bio',
            image:    <svg className="row-icon" xmlns="http://www.w3.org/2000/svg" version="1.0"
                           width="344.000000pt" height="344.000000pt"
                           viewBox="0 0 344.000000 344.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,344.000000) scale(0.100000,-0.100000)"
                   fill="#000000" stroke="none">
                    <path
                        d="M1545 3144 c-217 -33 -428 -109 -589 -212 -331 -212 -557 -539 -642 -932 -27 -121 -27 -439 0 -560 74 -342 251 -630 519 -843 168 -135 379 -233 607 -283 133 -29 439 -27 579 4 563 126 983 551 1107 1122 15 67 19 127 19 280 0 153 -4 213 -19 280 -50 228 -148 439 -283 607 -206 258 -483 434 -803 510 -87 20 -136 25 -285 28 -99 2 -193 1 -210 -1z m410 -229 c489 -101 854 -465 961 -960 24 -110 24 -360 0 -470 -107 -495 -467 -854 -961 -961 -111 -24 -361 -24 -470 0 -248 54 -454 165 -625 336 -523 523 -464 1382 125 1831 161 123 372 209 581 238 94 13 292 6 389 -14z"/>
                    <path
                        d="M1676 2430 c-120 -37 -129 -206 -14 -266 54 -28 118 -13 167 40 34 36 40 118 12 163 -35 56 -103 82 -165 63z"/>
                    <path
                        d="M1673 1924 c-62 -31 -63 -38 -63 -488 0 -447 2 -461 59 -490 38 -20 64 -20 102 0 57 29 59 43 59 490 0 452 -1 458 -65 488 -41 20 -52 20 -92 0z"/>
                </g>
            </svg>
        },
        {
            title: 'Ukraine',
            subtitle: 'Location',
            image: <svg className="row-icon" xmlns="http://www.w3.org/2000/svg" version="1.0"
                            width="344.000000pt" height="344.000000pt"
                            viewBox="0 0 344.000000 344.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,344.000000) scale(0.100000,-0.100000)"
                   fill="#000000" stroke="none">
                    <path
                        d="M1520 3131 c-304 -67 -561 -264 -697 -536 -105 -207 -130 -465 -68 -700 88 -335 343 -800 699 -1275 118 -157 255 -325 265 -325 18 0 230 269 383 485 296 418 502 811 584 1115 24 89 27 117 28 260 0 133 -4 173 -22 237 -52 188 -127 321 -257 454 -137 140 -282 225 -473 276 -112 30 -328 34 -442 9z m366 -287 c141 -29 301 -132 395 -253 173 -225 197 -478 73 -792 -77 -196 -221 -460 -387 -709 -91 -136 -239 -340 -247 -340 -4 0 -45 53 -92 117 -316 436 -534 840 -600 1113 -87 363 109 724 462 846 118 41 254 48 396 18z"/>
                    <path
                        d="M1629 2497 c-104 -30 -190 -104 -237 -206 -22 -46 -27 -71 -27 -141 0 -76 3 -92 32 -151 39 -79 102 -140 181 -177 48 -22 71 -27 142 -27 71 0 94 5 142 27 79 37 142 98 181 177 28 58 32 75 32 151 0 76 -4 93 -32 151 -60 121 -170 196 -300 205 -40 2 -87 -2 -114 -9z"/>
                </g>
            </svg>
        },
        {
            title: 'https://programming.org.ua/en',
            subtitle: 'Link',
            image:     <svg className="row-icon link" xmlns="http://www.w3.org/2000/svg" version="1.0"
                            width="344.000000pt" height="344.000000pt"
                            viewBox="0 0 344.000000 344.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,344.000000) scale(0.100000,-0.100000)"
                   fill="#000000" stroke="none">
                    <path
                        d="M765 2430 c-362 -55 -619 -350 -618 -710 0 -278 144 -504 405 -635 142 -71 199 -80 513 -80 267 0 270 0 303 23 91 65 81 196 -20 248 -21 11 -80 14 -267 14 -256 0 -313 7 -399 47 -75 35 -172 129 -206 199 -119 243 15 530 279 599 46 11 117 15 313 15 272 0 282 2 331 54 31 33 40 110 17 154 -9 17 -30 41 -48 54 -32 23 -38 23 -293 25 -143 0 -283 -2 -310 -7z"/>
                    <path
                        d="M2106 2430 c-120 -38 -129 -206 -14 -266 21 -11 80 -14 267 -14 136 0 263 -5 293 -11 128 -27 257 -125 313 -238 119 -237 -18 -527 -280 -596 -46 -11 -117 -15 -313 -15 -272 0 -282 -2 -331 -54 -31 -33 -40 -110 -17 -154 9 -17 30 -41 48 -54 33 -23 35 -23 323 -23 273 0 295 1 370 23 320 93 529 366 528 692 0 274 -141 498 -394 630 -140 73 -196 82 -499 86 -146 2 -278 -1 -294 -6z"/>
                    <path
                        d="M1073 1840 c-46 -28 -67 -65 -67 -119 0 -55 28 -102 74 -126 43 -22 1237 -22 1280 0 72 37 97 138 51 203 -45 64 -19 62 -693 62 -590 0 -614 -1 -645 -20z"/>
                </g>
            </svg>
        }
    ]

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            dispatch({type: actions.CHAT_SIDEBAR, payload: false})
        }
    }, []);

     useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    function closeSidebar() {
        dispatch({type: actions.CHAT_SIDEBAR, payload: false})
    }

    return (
        <div className={cx("sidebar-content", {"active": chatSidebar})}>
            <div className="tabs-tab">
                <div className="sidebar-content-header">
                    <Button className={'btn-icon silver'} onClick={closeSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0"
                             width="344.000000pt" height="344.000000pt" viewBox="0 0 344.000000 344.000000"
                             preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,344.000000) scale(0.100000,-0.100000)" fill="#000000"
                               stroke="none">
                                <path d="M650 2848 c-36 -18 -49 -32 -64 -70 -38 -93 -50 -77 467 -595 l462 -463 -467 -467 c-501 -502 -491 -491 -473 -573 9 -42 66 -97 109 -105 80 -15 72 -22 569 473 l467 467 468 -467 c501 -501 490 -491 572 -473 42 9 97 66 105 109 15 80 22 72 -473 569 l-467 467 462 463 c515 515 503 501 468 593 -18 48 -54 78 -107 89 -68 15 -81 4 -566 -479 l-462 -461 -458 457 c-446 446 -493 488 -550 488 -10 0 -38 -10 -62 -22z"/>
                            </g>
                        </svg>
                    </Button>
                    <h4 className="sidebar-title">Profile</h4>
                </div>
                <Scrollable style={{position: 'unset'}}>
                    <div className="profile-content">
                        <div className="sidebar-left-section-container">
                            <div className="sidebar-left-section no-delimiter">
                                <div className="sidebar-left-section-content">
                                    <Avatar className="profile-avatar" size={'6rem'} font={'2rem'}>
                                        bot
                                    </Avatar>
                                    <div className="profile-name">
                                        <span className="peer-title">Bot</span>
                                    </div>
                                    {
                                        chatSidebarData.map((row) => (
                                            <div className="row row-with-icon row-with-padding" key={row.title}>
                                                {row.image}
                                                <div className="row-wrapper" dir="auto">
                                                    {
                                                        row.subtitle === 'Link' ?
                                                        <a href={row.title} target="_blank" rel="noopener noreferrer">{row.title}</a> :
                                                        <div className="row-title tgico tgico-location" dir="auto">{row.title}</div>
                                                    }
                                                    <span className="i18n">{row.subtitle}</span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Scrollable>
            </div>
        </div>
    );
}

export default ChatSidebar;