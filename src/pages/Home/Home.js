import { useContext } from 'react';
import JobsContext from '../../context/JobsContext';
import SearchBox from '../../components/SearchBox/SearchBox';
import CardList from '../../components/CardList/CardList';
import Loader from '../../components/Loader/Loader';

import './Home.scss';

const Home = () => {
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

export default Home;
