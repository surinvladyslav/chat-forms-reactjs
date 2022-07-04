import * as React from 'react';

import ChatInput from "../../components/chat-input";
import SidebarHeader from "../../components/sidebar-header";
import Content from "../../components/content";
import Sidebar from "../../components/sidebar";
import Dropdown from "../../components/dropdown";
import {useContext} from "../../store/context";
import {actions} from "../../store/reducer";
import Popup from "../../components/popup";
import PopupCopied from "../../components/popup-copied";

import './index.scss';

const Chat = () => {
    const { dispatch, messages, formData } = useContext()
    const [x, setX] = React.useState()
    const [y, setY] = React.useState()
    const [check, setCheck] = React.useState(undefined)
    const [id, setId] = React.useState()

    React.useEffect(() => {
        setCheck(formData && formData.find((item) => item.itemId === id))
    },[id])

    function handleOutside() {
        setTimeout(() => {
            dispatch({type: actions.MESSAGE_DROPDOWN, payload: false})
        }, 200)
    }

    function editMessage(){
        dispatch({type: actions.EDITED, payload: true})
        dispatch({type: actions.MESSAGE_DROPDOWN, payload: false})
    }

    function deleteMessage(){
        dispatch({type: actions.MESSAGE_DROPDOWN, payload: false})
        dispatch({type: actions.POPUP, payload: true})
    }

    const copyMessage = async () => {
        try {
            dispatch({type: actions.MESSAGE_DROPDOWN, payload: false})
            const message = messages.find((message) => message.itemId === id)
            await navigator.clipboard.writeText(message.title);
            dispatch({type: actions.POPUP_COPIED, payload: true})
        } catch (error) {
            console.error(error)
        }
    };

    function onClick(event){
        event.preventDefault()
        setX(event.pageX)
        setY(event.pageY)
        dispatch({type: actions.MESSAGE_DROPDOWN, payload: true})
        setId(event.currentTarget.getAttribute('data-id'))
    }

    return (
        <>
            <Sidebar/>
            <SidebarHeader/>
            <Content onClick={onClick}/>
            <ChatInput id={id}/>
            <Dropdown
                className={'dropdown-message contextmenu bottom-center'}
                style={{top: y/1.1, left: x/1.4}}
                onMouseLeave={handleOutside}
            >
                {
                    !check &&
                    <div
                        className="dropdown-message-item"
                        onClick={editMessage}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="344.000000pt" height="344.000000pt" viewBox="0 0 344.000000 344.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,344.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                <path d="M2575 3139 c-11 -6 -498 -489 -1082 -1073 l-1063 -1061 0 -287 0 -288 288 0 287 0 1061 1063 c584 584 1067 1072 1073 1084 21 42 13 107 -18 149 -34 46 -374 384 -411 408 -28 18 -105 21 -135 5z m150 -419 l80 -80 -93 -93 -92 -92 -82 83 -83 82 90 90 c49 49 92 90 95 90 3 0 41 -36 85 -80z m-1072 -1232 l-768 -768 -82 0 -83 0 0 82 0 83 767 767 768 768 82 -82 83 -83 -767 -767z"/>
                            </g>
                        </svg>
                        Edit
                    </div>
                }
                <div
                    className="dropdown-message-item"
                    onClick={copyMessage}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" style={{transform: 'scaleX(-1)'}} width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M1622 5109 c-47 -14 -109 -79 -123 -131 -23 -89 12 -182 88 -229 l38 -24 1191 -5 1190 -5 76 -37 c91 -45 147 -103 191 -196 l32 -67 5 -1590 5 -1590 24 -38 c13 -21 42 -50 64 -65 34 -23 52 -27 107 -27 55 0 73 4 107 27 22 15 51 44 64 65 l24 38 0 1605 c0 1468 -1 1610 -17 1665 -43 157 -109 273 -213 378 -68 70 -184 148 -263 177 -156 59 -61 55 -1362 57 -740 1 -1208 -2 -1228 -8z"/>
                            <path d="M1050 4295 c-337 -69 -587 -329 -639 -665 -9 -55 -11 -452 -9 -1520 3 -1575 -1 -1455 58 -1612 66 -177 261 -372 438 -438 154 -58 82 -55 1257 -55 1175 0 1103 -3 1257 55 178 66 372 260 438 438 59 156 55 43 55 1657 0 1351 -1 1485 -17 1540 -43 157 -109 273 -213 378 -68 70 -184 148 -263 177 -155 58 -74 55 -1232 57 -851 1 -1078 -1 -1130 -12z m2222 -422 c93 -44 151 -100 196 -191 l37 -76 0 -1451 0 -1451 -37 -76 c-45 -91 -103 -147 -196 -191 l-67 -32 -1050 0 -1050 0 -67 32 c-93 44 -151 100 -196 191 l-37 76 0 1450 0 1451 32 67 c17 37 50 87 72 111 44 48 135 101 197 116 23 5 468 9 1069 8 l1030 -2 67 -32z"/>
                        </g>
                    </svg>
                    Copy
                </div>
                {
                    !check &&
                    <div
                        className="dropdown-message-item danger"
                        onClick={deleteMessage}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                <path d="M1870 4901 c-72 -23 -119 -63 -145 -123 -12 -30 -15 -83 -15 -272 l0 -235 -457 -3 -458 -3 -47 -28 c-84 -49 -124 -150 -98 -245 15 -56 80 -123 136 -140 60 -18 3488 -18 3548 0 57 17 119 82 135 141 27 95 -13 195 -97 244 l-47 28 -457 3 -458 3 0 235 c0 189 -3 242 -15 272 -20 47 -50 78 -100 105 -40 22 -45 22 -720 24 -374 1 -691 -2 -705 -6z m1120 -526 l0 -105 -430 0 -430 0 0 105 0 105 430 0 430 0 0 -105z"/>
                                <path d="M1008 3618 c-21 -5 -58 -28 -83 -50 -81 -71 -76 20 -73 -1394 l3 -1249 23 -80 c29 -107 99 -246 162 -323 107 -131 271 -236 445 -285 l80 -22 995 0 995 0 80 22 c174 49 338 154 445 285 63 77 133 216 162 323 l23 80 3 1240 c2 890 0 1255 -8 1292 -8 36 -23 65 -51 97 -99 113 -276 89 -343 -45 l-26 -53 0 -1232 c0 -1200 -1 -1234 -20 -1296 -39 -128 -140 -228 -269 -269 -60 -18 -99 -19 -991 -19 -897 0 -930 1 -992 20 -128 39 -228 140 -269 269 -18 61 -19 102 -19 1296 l0 1233 -28 53 c-46 89 -149 134 -244 107z"/>
                            </g>
                        </svg>
                        Delete
                    </div>
                }
            </Dropdown>
            <Popup id={id}/>
            <PopupCopied/>
            {/*<ChatAnswers/>*/}
        </>
    );
}

export default Chat;