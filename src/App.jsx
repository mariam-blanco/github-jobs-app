import { useState, useMemo } from 'react';
import { JobsContext } from 'context';
import { useFetch } from 'hooks';
import { filterJobs } from 'utils/filterJobs';
import AppRouter from 'routers/AppRouter';

const App = () => {
   const [search, setSearch] = useState({});
   const { status, data: JOBS } = useFetch('/jobs');

   const handleSearch = newSearch => {
      setSearch(newSearch);
   };

   const jobs = useMemo(() => filterJobs(JOBS, search), [JOBS, search]);

   return (
      <JobsContext.Provider value={{ jobs, status, handleSearch }}>
         <AppRouter />
      </JobsContext.Provider>
   );
};

export default App;
