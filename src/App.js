import { useState, useMemo } from 'react';
import JobsContext from './context/JobsContext';
import { useFetch } from './hooks/useFetch';
import AppRouter from './routers/AppRouter';

const App = () => {
   const [search, setSearch] = useState({});
   const { status, data: JOBS } = useFetch('/jobs');

   const handleSearch = newSearch => {
      setSearch(newSearch);
   };

   const jobs = useMemo(() => {
      const { terms, location, isFullTime } = search;

      let filteredJobs = JOBS.filter(job => {
         return terms
            ? job.position.toLowerCase().includes(terms) ||
                 job.company.toLowerCase().includes(terms)
            : true;
      })
         .filter(job => {
            return location
               ? job.location.toLowerCase().includes(location)
               : true;
         })
         .filter(job => {
            return isFullTime ? job.type === 'Full Time' : true;
         });

      return filteredJobs;
   }, [JOBS, search]);

   return (
      <JobsContext.Provider value={{ jobs, status, handleSearch }}>
         <AppRouter />
      </JobsContext.Provider>
   );
};

export default App;
