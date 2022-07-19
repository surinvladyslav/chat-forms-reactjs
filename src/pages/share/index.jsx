import React from 'react';

import './index.scss';
import SidebarHeader from "../../components/sidebar-header";

const Share = () => {
    return (
        <>
            <SidebarHeader/>
            <div className="import">
                <p className="import-subtitle">Share it with the world.</p>
                <button
                    className="import-button"
                    // onClick={handleOpenPicker}
                >open</button>
            </div>
        </>
    );
}

export default Share;