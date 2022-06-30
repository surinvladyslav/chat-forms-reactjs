import * as React from 'react';

import Loader from "../../components/loader";

import './index.scss';
import useData from "../../hooks/useData";
import {useContext} from "../../store/context";
import { useNavigate } from 'react-router-dom';

const Loading = () => {
    const navigate = useNavigate();
    const {user, form} = useContext()
    console.log(user.access_token);
    console.log(form);

    // useData(fo)
    // React.useEffect(() => {
        // const timeout = setTimeout(() => {
        // navigate('/home');
        //     history.push(`/myrating/result/${params.year}/${params.subjects}/${params.scores}`);
        // }, 1500);
        // return () => clearTimeout(timeout);
    // }, []);
    return (
        <>
           <Loader active={true}/>
        </>
    );
}

export default Loading;