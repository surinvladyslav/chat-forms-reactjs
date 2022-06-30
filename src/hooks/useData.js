import * as React from 'react';
import {actions} from "../store/reducer";
import {useContext} from "../store/context";

function useData(url, token) {
    // const [data, setData] = React.useState(false);
    // console.log(data);
    // const { dispatch } = useContext()
    return fetch(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        // dispatch({type: actions.LOADER, payload: false})
        return response.json();
    })
    .catch((error) => {
        console.log(error);
    });
}

export default useData;