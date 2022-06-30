import * as React from 'react';

import ChatInput from "../../components/chat-input";
import SidebarHeader from "../../components/sidebar-header";
import Content from "../../components/content";
import ChatAnswers from "../../components/chat-answers";

import './index.scss';
import Sidebar from "../../components/sidebar";

const Chat = () => {
    return (
        <>
            <Sidebar/>
            <SidebarHeader/>
            <Content/>
            <ChatInput/>
            {/*<ChatAnswers/>*/}
        </>
    );
}

export default Chat;