import React, {useEffect} from 'react';
import {useContext} from "../store/context";

export const useScrollable = (scrollableRef) => {
    const {chatMessages} = useContext();

    const scrollToBottomWithSmoothScroll = () => {
        scrollableRef.current?.scrollTo({
            top: scrollableRef.current?.scrollHeight,
            behavior: 'smooth',
        })
    }

    const scrollToBottom = () => {
        scrollableRef.current.scrollTop = scrollableRef.current?.scrollHeight;
    };

    useEffect(() => {
        scrollToBottom()
    }, []);

    useEffect(() => {
        scrollToBottomWithSmoothScroll()
    }, [chatMessages]);
};