import * as React from 'react';
import ImportPage from "./pages/import";
import {Route, Routes} from "react-router-dom";
import Header from "./components/header";
// import Loader from "./components/loader";

export default function App() {
    // const [show, setShow] = React.useState(true);
    return (
        <div className="app">
            <Header/>
            <Routes>
                <Route path="/" element={<ImportPage/>} />
                <Route path="*" element={<ImportPage/>} />
            </Routes>
            {/*{ show && <Loader/> }*/}
        </div>
    );
}