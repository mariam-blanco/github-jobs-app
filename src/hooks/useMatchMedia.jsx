import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const useMatchMedia = mediaQueryString => {
   const mediaQuery = window.matchMedia(mediaQueryString);

   const [state, setState] = useState(mediaQuery.matches);

   useEffect(() => {
      const handleViewportSizeChange = e => setState(mediaQuery.matches);

      mediaQuery.addEventListener('change', handleViewportSizeChange);

      return () => {
         mediaQuery.removeEventListener('change', handleViewportSizeChange);
      };
   }, [mediaQuery]);

   return state;
};

export default useMatchMedia;

useMatchMedia.propTypes = {
   mediaQueryString: PropTypes.string.isRequired,
};
