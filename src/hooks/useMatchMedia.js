import { useState } from 'react';

const useMatchMedia = () => {
   /* El texto del placeholder del campo 'location' y la label del checkbox
      son distintos según sea el tamaño del campo, que depende del tamaño de la pantalla.
      Se añade un 'event listener' para que detecte el cambio de tamaño */
   const [state, setState] = useState(mediaQuery.matches);

   //    const [isSmallScreen, setIsSmallScreen] = useState(
   //       window.matchMedia('(max-width: 850px)').matches
   //    );

   useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 850px)');
      const handleViewportSizeChange = e => setState(mediaQuery.matches);
      mediaQuery.addEventListener('change', updateIsSmallScreen);

      return () => {
         mediaQuery.removeEventListener('change', updateIsSmallScreen);
      };
   }, []);

   return <div>useMatchMedia</div>;
};

export default useMatchMedia;
