import React from "react";

import './index.scss';

const Button = ({children}) => {
    return (
        <button className="btn-icon">
            { children }
        </button>
    );
}

export default Button;