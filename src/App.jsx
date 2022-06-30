import * as React from 'react';
import ImportPage from "./pages/import";
import {Route, Routes, useLocation} from "react-router-dom";
import Loader from "./components/loader";
import { CSSTransition } from 'react-transition-group';
import { useContext } from "./store/context";
import Chat from "./pages/chat";
import Share from "./pages/share";
import Loading from "./pages/loading";

import './App.scss';

const AppContentAnimated = ({ children }) => {
    let location = useLocation();

    return (
        <div className='animated'>
            <CSSTransition
                key={location.pathname}
                in={true}
                timeout={1000}
            >
                <div className={'animated-block'}>
                    { children }
                </div>
            </CSSTransition>
        </div>
    )
}

export default function App() {
    const { loader } = useContext()

    return (
        <div className="whole page-chats">
            <div className="tabs-container" id="main-columns">
                <div className="tabs-tab main-column">
                    <div className="chats-container tabs-container">
                        <div className="chat tabs-tab active">
                            <AppContentAnimated>
                                <Routes>
                                    <Route path="/" element={<ImportPage/>} />
                                    <Route path="/load" element={<Loading/>} />
                                    <Route path="/chat" element={<Chat/>} />
                                    <Route path="/share" element={<Share/>} />
                                    <Route path="*" element={<ImportPage/>} />
                                </Routes>
                                <Loader active={loader}/>
                            </AppContentAnimated>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}