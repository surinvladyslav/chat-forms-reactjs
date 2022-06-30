import React from "react";
import cx from 'classnames';

import './index.scss';

const Button = ({children, className, onClick, style}) => {
    // if(!className) {
        return (
            <button
                className={className}
                onClick={onClick}
                style={style}
            >
                { children }
            </button>
        );
    // } else {
    //     return (
    //         <button
    //             className={cx('btn-icon', className)}
    //             onClick={onClick}
    //         >
    //             { children }
    //         </button>
    //     );
    // }
}

export default Button;