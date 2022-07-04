import * as React from 'react';
import cx from 'classnames'

import './index.scss';

const Message = ({children, tail, read, edited, is, itemId, date, onClick}) => {
    // const [tick, setTick] = React.useState(read)
    // React.useEffect(() => {
    //     setTimeout(() => {
    //         setTick(true)
    //     }, 300)
    // }, [])
    return (
        <div
            className={cx('bubble', (is ? 'is-in' : 'is-out'), {
                'is-read': read,
                'is-edited': edited,
                'can-have-tail': tail
            })}
            onClick={onClick}
            data-id={itemId}
        >
            <div className="bubble-content-wrapper">
                <div className="bubble-content">
                    <div className="message">
                        {children}
                        <span className="time tgico">
                            <span className="i18n" style={{ opacity: 0, marginLeft: '0.3rem'}}>{date} PM</span>
                            <i className="edited i18n" style={{ opacity: '0 !important', margin: 0}}>edited</i>
                            {
                                read ?
                                <svg className="double-tick" style={{opacity: '0'}} xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                        <path d="M3249 3826 c-19 -7 -45 -19 -57 -28 -12 -8 -358 -347 -770 -754 -411 -406 -840 -830 -953 -942 l-206 -203 -401 418 c-221 230 -423 435 -449 455 -130 102 -310 60 -389 -92 -29 -55 -26 -163 6 -222 16 -30 201 -229 512 -551 268 -278 512 -527 541 -554 59 -54 108 -73 183 -73 105 0 69 -33 1204 1090 580 574 1065 1057 1078 1074 69 94 49 256 -41 332 -72 61 -174 80 -258 50z"/>
                                        <path d="M4777 3816 c-20 -8 -52 -25 -70 -40 -17 -14 -452 -442 -966 -950 l-935 -925 -63 59 c-103 96 -204 113 -315 53 -85 -46 -128 -121 -128 -223 0 -70 17 -117 61 -169 81 -94 295 -302 328 -317 20 -10 64 -20 98 -22 121 -8 57 -65 1218 1083 578 572 1060 1053 1072 1071 92 133 22 328 -136 382 -45 16 -117 14 -164 -2z"/>
                                    </g>
                                </svg> :
                                <svg className="double-tick tick" style={{opacity: '0'}} xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                        <path d="M4605 4386 c-105 -33 -109 -36 -1445 -1372 l-1315 -1314 -595 595 c-553 551 -600 596 -662 625 -159 74 -328 51 -454 -63 -100 -90 -149 -234 -125 -364 25 -134 9 -117 839 -944 726 -724 771 -767 832 -794 78 -34 185 -44 257 -25 122 33 70 -16 1629 1543 1614 1616 1522 1517 1547 1660 34 199 -91 392 -292 453 -56 17 -162 17 -216 0z"/>
                                    </g>
                                </svg>
                            }
                            <div className="inner tgico">
                                <i className="edited i18n">edited</i>
                                <span className="i18n">{date} PM</span>
                                {
                                    read ?
                                    <svg className="double-tick" xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                            <path d="M3249 3826 c-19 -7 -45 -19 -57 -28 -12 -8 -358 -347 -770 -754 -411 -406 -840 -830 -953 -942 l-206 -203 -401 418 c-221 230 -423 435 -449 455 -130 102 -310 60 -389 -92 -29 -55 -26 -163 6 -222 16 -30 201 -229 512 -551 268 -278 512 -527 541 -554 59 -54 108 -73 183 -73 105 0 69 -33 1204 1090 580 574 1065 1057 1078 1074 69 94 49 256 -41 332 -72 61 -174 80 -258 50z"/>
                                            <path d="M4777 3816 c-20 -8 -52 -25 -70 -40 -17 -14 -452 -442 -966 -950 l-935 -925 -63 59 c-103 96 -204 113 -315 53 -85 -46 -128 -121 -128 -223 0 -70 17 -117 61 -169 81 -94 295 -302 328 -317 20 -10 64 -20 98 -22 121 -8 57 -65 1218 1083 578 572 1060 1053 1072 1071 92 133 22 328 -136 382 -45 16 -117 14 -164 -2z"/>
                                        </g>
                                    </svg> :
                                    <svg className="double-tick tick"  xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                            <path d="M4605 4386 c-105 -33 -109 -36 -1445 -1372 l-1315 -1314 -595 595 c-553 551 -600 596 -662 625 -159 74 -328 51 -454 -63 -100 -90 -149 -234 -125 -364 25 -134 9 -117 839 -944 726 -724 771 -767 832 -794 78 -34 185 -44 257 -25 122 33 70 -16 1629 1543 1614 1616 1522 1517 1547 1660 34 199 -91 392 -292 453 -56 17 -162 17 -216 0z"/>
                                        </g>
                                    </svg>
                                }
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