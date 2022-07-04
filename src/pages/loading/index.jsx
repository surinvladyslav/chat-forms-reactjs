import * as React from 'react';

import Loader from "../../components/loader";

import './index.scss';
import useData from "../../hooks/useData";
import {useContext} from "../../store/context";
import { useNavigate } from 'react-router-dom';
import {actions} from "../../store/reducer";

const Loading = () => {
    const navigate = useNavigate();
    const {user, form, dispatch} = useContext()
    console.log(user.access_token);
    console.log(form.id);

    // const data = useData(form.id, user.access_token)
    // dispatch({type: actions.DATA, payload: data})
    // React.useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         navigate('/chat');
    //     }, 1500);
    //     return () => clearTimeout(timeout);
    // }, []);
    return (
        <>
           <Loader active={true}/>
        </>
    );
}

export default Loading;