import { useContext } from 'react';
import { JobsContext } from 'context';
import { SearchBox, CardList, Loader } from 'components';

import './Home.scss';

export const Home = () => {
   const { status, jobs } = useContext(JobsContext);

   /* prettier-ignore */
   return (
      <>
         <SearchBox />
         { status === 'loading' && <Loader marginTop={50} /> }
         { status === 'fetched' && <CardList jobs={jobs} /> }
      </>
   );
};
