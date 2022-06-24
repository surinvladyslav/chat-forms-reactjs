import * as React from 'react';

import './index.scss';

const Scrollable = ({ children }) => {
    return (
        <div className="scrollable scrollable-y">{ children }</div>
    );
}

export default Scrollable;