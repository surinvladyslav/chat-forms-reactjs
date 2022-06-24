import * as React from 'react';

import './index.scss';
import Sidebar from "../../components/sidebar";
import Content from "../../components/content";

const Chat = () => {
    return (
        <div className="whole page-chats">
            <div className="tabs-container">
                <div className="tabs-tab main-column">
                    <div className="chats-container tabs-container">
                        <div className="chat tabs-tab active type-chat">
                            <Sidebar/>
                            <Content/>
                            {/*<app-sidebar (sidebarSwitch)="sidebarSwitchHandler($event)" [sidebar]="switch"></app-sidebar>*/}
                            {/*<app-content></app-content>*/}
                            {/*<app-chat-input></app-chat-input>*/}
                            {/*<app-sidebar-right (sidebarSwitch)="sidebarSwitchHandler($event)" [sidebar]="switch"></app-sidebar-right>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;