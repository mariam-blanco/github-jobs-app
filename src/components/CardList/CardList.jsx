import PropTypes from 'prop-types';
import { isEmpty } from 'utils/utils';
import { Card, Error } from 'components';

import './CardList.scss';

export const CardList = ({ jobs }) => {
   /* prettier-ignore */
   return (
      !isEmpty(jobs) 
         ? ( <div className="cards-list">
               { jobs.map(job => <Card key={job.id} job={job} />) }   
           </div> )
         
         : <Error type="notFound" />
   );
};

CardList.propTypes = {
   jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
