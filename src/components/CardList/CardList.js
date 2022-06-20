import PropTypes from 'prop-types';
import { isEmpty } from '../../utils/utils';
import Card from '../Card/Card';
import Error from '../Error/Error';

import './CardList.scss';

const CardList = ({ jobs }) => {
   if (isEmpty(jobs)) {
      return <Error type="notFound" />;
   }

   return (
      !isEmpty(jobs) && (
         <div className="cards-list">
            {jobs.map(job => (
               <Card key={job.id} job={job} />
            ))}
         </div>
      )
   );
};

export default CardList;

CardList.propTypes = {
   jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
