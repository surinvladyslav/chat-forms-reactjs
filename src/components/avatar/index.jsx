import React from "react";

import './index.scss';

const Avatar = ({children, size, font}) => {
    return (
        <div
            className="avatar-element"
            style={{ width: size, height: size, lineHeight: size, fontSize: font }}
        >
            {children}
        </div>
    );
}

export default Avatar;