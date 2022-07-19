import React, {forwardRef} from 'react';

import './index.scss';

const Scrollable = forwardRef(({ children, style, onScroll }, ref) => {
    return (
        <div
            className="scrollable scrollable-y"
            ref={ref}
            onScroll={onScroll}
            style={style}
        >{ children }</div>
    );
});

export default Scrollable;