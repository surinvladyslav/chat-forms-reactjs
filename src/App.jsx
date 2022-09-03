import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

import ImportPage from "./pages/import";
import Loader from "./components/loader";
import ChatPage from "./pages/chat";
import SharePage from "./pages/share";
import Page404 from "./pages/404";

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
    return (
         <>
             <AppContentAnimated>
                 <Routes>
                     <Route path="/" element={<ImportPage/>} />
                     <Route path="/forms/:id" element={<ChatPage/>} />
                     <Route path="/share/:id" element={<SharePage/>} />
                     <Route path="/error" component={<Page404/>} />
                 </Routes>
                <Loader/>
             </AppContentAnimated>
         </>
    );
}