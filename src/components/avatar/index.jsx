import React from "react";

import './index.scss';

const Avatar = ({children, size}) => {
    return (
        <div
            className="avatar-element"
            style={{ width: size, height: size, lineHeight: size }}
        >
            {children}
        </div>
    );
}

export default Avatar;