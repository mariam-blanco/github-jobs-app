export const filterJobs = (jobs, search) => {
   const { terms, location, isFullTime } = search;

   let filteredJobs = jobs
      .filter(job => {
         return terms
            ? job.position.toLowerCase().includes(terms) ||
                 job.company.toLowerCase().includes(terms)
            : true;
      })
      .filter(job => {
         return location ? job.location.toLowerCase().includes(location) : true;
      })
      .filter(job => {
         return isFullTime ? job.type === 'Full Time' : true;
      });

   return filteredJobs;
};
