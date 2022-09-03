import React from 'react';
import {useParams} from "react-router-dom";

import ChatHeader from "../../components/chat-header";
import ChatContent from "../../components/chat-content";
import ChatTools from "../../components/chat-tools";
import {useGetForms} from "../../hooks/useGetForms";

import './index.scss';

const Chat = () => {
    const { id } = useParams();
    const formData = useGetForms(id)

    return (
        <div className="whole page-chats">
            <div className="tabs-container" id="main-columns">
                <div className="tabs-tab main-column">
                    <div className="chats-container tabs-container">
                        {
                            formData &&
                            <div className="chat tabs-tab active">
                                <ChatHeader/>
                                <ChatContent formData={formData}/>
                                <ChatTools formData={formData}/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;