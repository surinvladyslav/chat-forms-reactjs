import React, {useEffect} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";

import ImportPage from "./pages/import";
import Loader from "./components/loader";
import {useContext} from "./store/context";
import { CSSTransition } from 'react-transition-group';
import Chat from "./pages/chat";
import Share from "./pages/share";

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
    const {formBaseData} = useContext()
    // async function start() {
    //     const browser = await puppeteer.launch({ headless: true });
    //     const page = await browser.newPage();
    //     await page.goto(formBaseData.url);
    //
    //     const image = await page.$eval('.vnFTpb.teQAzf.ErmvL.KHCwJ', el => getComputedStyle(el).getPropertyValue('background-image'));
    //     const background = await page.$eval('body', el => getComputedStyle(el).getPropertyValue('background-color'));
    //     const font = await page.$eval('.G4EHhc', el => getComputedStyle(el).getPropertyValue('font-family'));
    //     const backgroundBar = await page.$eval('.RVEQke', el => getComputedStyle(el).getPropertyValue('background-color'));
    //
    //     console.log(image);
    //     await browser.close();
    // }
    //
    // useEffect(() => {
    //     start()
    // }, [])

    return (
         <>
             <AppContentAnimated>
                 <Routes>
                    <Route path="/" element={<ImportPage/>} />
                    <Route path="/forms/:id" element={<Chat/>} />
                    <Route path="/share" element={<Share/>} />
                    <Route path="*" element={<ImportPage/>} />
                 </Routes>
                <Loader/>
             </AppContentAnimated>
         </>
    );
}