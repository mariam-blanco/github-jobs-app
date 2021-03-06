import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from 'hooks';
import { JobDetails, Loader } from 'components';

export const Job = () => {
   let { id: jobId } = useParams();
   const { status, data: job } = useFetch(`/jobs/${jobId}`);

   //const [job, setJob] = useState({});
   //useEffect(() => data && setJob(data), [data]);

   useEffect(() => window.scrollTo(0, 0), []);

   /* prettier-ignore */
   return (
      <>
         { status === 'loading' && <Loader marginTop={150} /> }
         { status === 'fetched' && <JobDetails job={job} /> }
      </>
  );
};
