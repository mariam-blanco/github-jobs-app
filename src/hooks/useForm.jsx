import { useState } from 'react';

/* The custom hook useForm manage the state of the search form */

export const useForm = initialState => {
   const [state, setState] = useState(initialState);

   const handleChange = ({ target }) => {
      const name = target.name;
      const value = target.type === 'checkbox' ? target.checked : target.value;

      setState(prev => {
         return {
            ...prev,
            [name]: value,
         };
      });
   };

   const reset = () => {
      setState(initialState);
   };

   return [state, handleChange, reset];
};
