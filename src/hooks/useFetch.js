import { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { getData } from '../services/api';

// Hook personalizado useFetch
// Gestiona el estado con useReduce

export const useFetch = params => {
   let navigate = useNavigate();

   // Reducer -> initialState
   const initialState = {
      status: 'idle',
      error: null,
      data: [],
   };

   // Reducer -> reducer function
   const fetchReducer = (state, action) => {
      switch (action.type) {
         case 'loading':
            return { ...initialState, status: 'loading' };
         case 'fetched':
            return { ...initialState, status: 'fetched', data: action.payload };
         case 'error':
            return { ...initialState, status: 'error', error: action.payload };
         default:
            return state;
      }
   };

   // Reducer -> useReducer hook
   const [state, dispatch] = useReducer(fetchReducer, initialState);

   useEffect(() => {
      const fetchData = async () => {
         dispatch({ type: 'loading' });

         try {
            const response = await getData(params);
            dispatch({ type: 'fetched', payload: response.data });
         } catch (error) {
            error.response && error.response.status === 404
               ? navigate('../404')
               : navigate('../network-error');
         }
      };

      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [params]);

   return state;
};

useFetch.propTypes = {
   params: PropTypes.string.isRequired,
};
