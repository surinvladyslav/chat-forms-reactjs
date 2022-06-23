import * as React from 'react';

import Container from "../container";

import './index.scss';

const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className="header-inner">
                    <a className="header-logo">
                        forms
                    </a>

                    <button className="btn-icon sidebar-burger-button">
                        <svg className="burger-icon" xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                <path d="M799 3906 c-56 -20 -96 -53 -126 -104 -24 -40 -28 -58 -28 -123 0 -67 4 -81 30 -125 19 -30 49 -60 79 -79 l49 -30 1757 0 1757 0 49 30 c30 19 60 49 79 79 27 44 30 58 30 126 0 68 -3 82 -30 126 -19 30 -49 60 -79 79 l-49 30 -1741 2 c-1406 2 -1748 0 -1777 -11z"/>
                                <path d="M799 2786 c-56 -20 -96 -53 -126 -104 -24 -40 -28 -58 -28 -123 0 -67 4 -81 30 -125 19 -30 49 -60 79 -79 l49 -30 1757 0 1757 0 49 30 c30 19 60 49 79 79 27 44 30 58 30 126 0 68 -3 82 -30 126 -19 30 -49 60 -79 79 l-49 30 -1741 2 c-1406 2 -1748 0 -1777 -11z"/>
                                <path d="M799 1666 c-56 -20 -96 -53 -126 -104 -24 -40 -28 -58 -28 -123 0 -67 4 -81 30 -125 19 -30 49 -60 79 -79 l49 -30 1757 0 1757 0 49 30 c30 19 60 49 79 79 27 44 30 58 30 126 0 68 -3 82 -30 126 -19 30 -49 60 -79 79 l-49 30 -1741 2 c-1406 2 -1748 0 -1777 -11z"/>
                            </g>
                        </svg>
                    </button>

                    <div className="btn-menu bottom-right has-footer">
                        <div className="btn-menu-item rp-overflow tgico-saved rp">
                            <div className="c-ripple"></div>
                            <span className="i18n btn-menu-item-text">Saved Messages</span>
                        </div>
                        <div className="btn-menu-item rp-overflow tgico-settings rp">
                            <div className="c-ripple"></div>
                            <span className="i18n btn-menu-item-text">Settings</span>
                        </div>
                        <div className="btn-menu-item rp-overflow tgico-darkmode rp">
                            <div className="c-ripple"></div>
                            <span className="i18n btn-menu-item-text">Dark Mode</span>
                            <label className="checkbox-field checkbox-without-caption checkbox-field-toggle">
                                {/*<input className="checkbox-field-input" type="checkbox">*/}
                                <div className="checkbox-toggle"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;