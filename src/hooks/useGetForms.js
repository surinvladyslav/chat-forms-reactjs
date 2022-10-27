import * as React from 'react';
import {useEffect} from 'react';

import {actions, alertTypes} from '../store/reducers';
import {useContext} from '../store/context';

export const useGetForms = (id) => {
  const {dispatch} = useContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/forms/${id}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();

        dispatch({type: actions.FORM_DATA, payload: data});
      }
      catch (error) {
        dispatch({type: actions.LOADER, payload: true});
        dispatch({
          type: actions.ALERT,
          payload: {
            active: true,
            type: alertTypes.error,
            message: error.message,
          },
        });
      }
    };

    fetchData();
  }, []);
};