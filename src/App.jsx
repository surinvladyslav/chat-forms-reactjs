import * as React from 'react';
import ImportPage from "./pages/import";
import {Route, Routes} from "react-router-dom";
import Header from "./components/header";
import Loader from "./components/loader";
import {useContext} from "./context";
import Chat from "./pages/chat";

export default function App() {
    const { loader } = useContext()
    return (
        <div className="app">
            <Header/>
            <Routes>
                <Route path="/" element={<ImportPage/>} />
                <Route path="/chat" element={<Chat/>} />
                <Route path="*" element={<ImportPage/>} />
            </Routes>
            { loader && <Loader/> }
        </div>
    );
}