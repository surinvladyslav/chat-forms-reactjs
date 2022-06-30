import * as React from 'react';
import cx from 'classnames'

import './index.scss';

const Message = ({children, tail, read, edited, is}) => {
    return (
        <div className={cx('bubble', (is ? 'is-in' : 'is-out'), { 'is-read': read, 'is-edited': edited, 'can-have-tail': tail})}>
            <div className="bubble-content-wrapper">
                <div className="bubble-content">
                    <div className="message">
                        {children}
                        <span className="time tgico">
                        <span className="i18n" style={{ opacity: 0, marginLeft: '0.3rem'}}>22:22</span>
                        <i className="edited i18n" style={{ opacity: '0 !important', margin: 0}}>edited</i>
                        <svg className="double-tick" style={{opacity: '0'}} xmlns="http://www.w3.org/2000/svg" version="1.0" width="344.000000pt" height="344.000000pt" viewBox="0 0 344.000000 344.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,344.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                <path d="M2485 2805 c-19 -10 -321 -368 -810 -959 -429 -520 -785 -945 -790 -945 -6 -1 -156 146 -335 325 -179 179 -337 332 -352 340 -113 59 -238 -64 -183 -180 9 -18 194 -210 413 -428 343 -342 402 -397 434 -403 44 -8 86 0 114 23 25 20 1643 1975 1680 2029 46 69 23 162 -49 196 -43 21 -83 21 -122 2z"/>
                                <path d="M3241 2808 c-13 -7 -368 -429 -789 -938 -421 -509 -775 -936 -788 -949 l-23 -25 -23 21 c-53 48 -120 57 -175 23 -58 -35 -81 -118 -49 -178 21 -40 176 -189 209 -201 42 -16 78 -13 113 8 23 14 1461 1738 1683 2017 56 71 52 143 -13 203 -30 28 -107 38 -145 19z"/>
                            </g>
                        </svg>
                       <div className="inner tgico">
                          <i className="edited i18n">edited</i>
                          <span className="i18n">22:22</span>
                              <svg className="double-tick" xmlns="http://www.w3.org/2000/svg" version="1.0" width="344.000000pt" height="344.000000pt" viewBox="0 0 344.000000 344.000000" preserveAspectRatio="xMidYMid meet">
                                 <g transform="translate(0.000000,344.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                    <path d="M2485 2805 c-19 -10 -321 -368 -810 -959 -429 -520 -785 -945 -790 -945 -6 -1 -156 146 -335 325 -179 179 -337 332 -352 340 -113 59 -238 -64 -183 -180 9 -18 194 -210 413 -428 343 -342 402 -397 434 -403 44 -8 86 0 114 23 25 20 1643 1975 1680 2029 46 69 23 162 -49 196 -43 21 -83 21 -122 2z"/>
                                    <path d="M3241 2808 c-13 -7 -368 -429 -789 -938 -421 -509 -775 -936 -788 -949 l-23 -25 -23 21 c-53 48 -120 57 -175 23 -58 -35 -81 -118 -49 -178 21 -40 176 -189 209 -201 42 -16 78 -13 113 8 23 14 1461 1738 1683 2017 56 71 52 143 -13 203 -30 28 -107 38 -145 19z"/>
                                 </g>
                              </svg>
                           </div>
                        </span>
                    </div>
                    <svg className="bubble-tail" width="9" height="20" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter x="-50%" y="-14.7%" width="200%" height="141.2%" filterUnits="objectBoundingBox" id="a">
                                <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                                <feColorMatrix values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0" in="shadowBlurOuter1"></feColorMatrix>
                            </filter>
                        </defs>
                        <g fill="none">
                            <path d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z" fill="#000" filter="url(#a)"></path>
                            <path d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z" fill="#FFF" className="corner"></path>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Message;