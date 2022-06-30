import * as React from 'react';

import Container from "../container";

import './index.scss';
import Button from "../button";
import Avatar from "../avatar";
import {Link, useLocation} from "react-router-dom";
import cx from "classnames";
import {useContext} from "../../store/context";
import {actions} from "../../store/reducer";
import Dropdown from "../dropdown";

const SidebarHeader = () => {
    let location = useLocation();
    const {dispatch, sidebar, dropdown} = useContext()

    function openSidebar(event) {
        event.preventDefault();
        dispatch({type: actions.SIDEBAR, payload: !sidebar})
    }

    const escFunction = React.useCallback((event) => {
        event.preventDefault();
        if (event.keyCode === 27) {
            dispatch({type: actions.DROPDOWN, payload: false})
        }
    }, []);

    React.useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    function openDropdown() {
        dispatch({type: actions.DROPDOWN, payload: !dropdown})
    }

    return (
        <div className={cx("sidebar-header", {'base': location.pathname === '/' } )}>
            <Container>
                <div className={cx("sidebar-header-inner", {'base': location.pathname === '/' } )}>
                    {
                        location.pathname === '/chat' ?
                        <>
                            <Link className="btn-icon" to="/">
                                <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" version="1.0"
                                     width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                                     preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000"
                                       stroke="none">
                                        <path
                                            d="M2058 4727 c-31 -13 -74 -38 -95 -55 -77 -62 -1882 -1878 -1907 -1920 -38 -61 -60 -154 -52 -225 14 -132 -40 -73 1014 -1129 795 -796 975 -971 1020 -994 78 -39 202 -46 285 -14 89 34 153 90 191 169 28 60 31 75 31 161 0 165 16 144 -562 729 -274 278 -534 536 -579 575 -45 40 -118 91 -167 116 l-86 45 1837 5 1837 5 57 23 c81 33 160 108 200 190 30 60 33 75 33 152 -1 70 -5 95 -27 142 -35 76 -99 143 -173 181 l-60 32 -1855 5 -1855 5 95 50 95 49 576 576 c665 664 634 624 634 795 0 89 -3 106 -28 156 -15 31 -50 78 -77 103 -72 68 -126 89 -235 93 -77 3 -98 0 -147 -20z"/>
                                    </g>
                                </svg>
                            </Link>
                            <div className="chat-info">
                                <div className="person" onClick={openSidebar}>
                                    <Avatar size={'2.5rem'}>Bot</Avatar>
                                    <div className="content">
                                        <div className="top">
                                            <span className="peer-title">Bot</span>
                                        </div>
                                        <div className="bottom">
                                            <div className="info">
                                                <span className="online">
                                                    <span className="i18n online-text">online</span>
                                                    <span className="peer-typing peer-typing-text">
                                                        <span className="peer-typing-text-dot"></span>
                                                        <span className="peer-typing-text-dot"></span>
                                                        <span className="peer-typing-text-dot"></span>
                                                    </span>
                                                    <span className="i18n peer-typing-description">typing</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button className={'btn-icon'} onClick={openDropdown}>
                                <svg width="4" height="16" viewBox="0 0 4 16" fill="#707579" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#707579" d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14Z"></path>
                                </svg>
                            </Button>
                            <Dropdown/>
                        </> :
                        <>
                            <Button className={'btn-icon base'}>
                                <svg width="4" height="16" viewBox="0 0 4 16" fill="#707579" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#707579" d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14Z"></path>
                                </svg>
                            </Button>
                        </>
                    }
                </div>
            </Container>
        </div>
    );
}

export default SidebarHeader;