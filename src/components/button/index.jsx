import React from "react";
import cx from 'classnames';

import './index.scss';

const Button = ({children, className, onClick, style, id}, args) => {
    // if(!className) {
    return (
        <button
            className={className}
            id={id}
            onClick={onClick}
            style={style}
            value={children}
            {...args}
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