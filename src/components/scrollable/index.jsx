import * as React from 'react';

import './index.scss';

const Scrollable = ({ children, style }) => {
    return (
        <div className="scrollable scrollable-y" style={style}>{ children }</div>
    );
}

export default Scrollable;