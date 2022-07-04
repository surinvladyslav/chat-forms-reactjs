import * as React from 'react';

import Date from "../date";
import Scrollable from "../scrollable";
import Message from "../message";
import {useContext} from "../../store/context";

import './index.scss';

const Content = ({onClick}) => {
    const { messages } = useContext()
    return (
        <div className="bubbles">
            <Scrollable>
                <div className="bubbles-inner">
                    <div className="bubbles-date-group">
                        <Date/>
                        <div className="bubbles-group">
                            {/*{*/}
                            {/*    formData ?*/}
                            {/*        // formData.filter((item, index) => index < formData.length)*/}
                            {/*        // .map((item) => (*/}
                            {/*        //     <Message*/}
                            {/*        //         tail={true}*/}
                            {/*        //         edited={false}*/}
                            {/*        //         read={true}*/}
                            {/*        //         is={true}*/}
                            {/*        //         id={item.itemId}*/}
                            {/*        //         key={item.itemId}*/}
                            {/*        //     >{item.title}</Message>*/}
                            {/*        // ))*/}
                            {/*        formData.map((item) => (*/}
                            {/*            <Message*/}
                            {/*                tail={item.tail ? true : false}*/}
                            {/*                edited={false}*/}
                            {/*                onClick={onClick}*/}
                            {/*                read={item.read ? true : false}*/}
                            {/*                is={true}*/}
                            {/*                date={item.date}*/}
                            {/*                id={item.itemId}*/}
                            {/*                key={item.itemId}*/}
                            {/*            >{item.title}</Message>*/}
                            {/*        ))*/}
                            {/*        : ''*/}
                            {/*}*/}
                            {
                                messages &&
                                messages.map((item) => (
                                    <Message
                                        tail={item.tail ? true : false}
                                        edited={item.edited ? true : false}
                                        onClick={onClick}
                                        read={item.read ? true : false}
                                        is={item.is ? true : false}
                                        date={item.date}
                                        itemId={item.itemId}
                                        key={item.itemId}
                                   >{item.title}</Message>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Scrollable>
        </div>
    );
}

export default Content;