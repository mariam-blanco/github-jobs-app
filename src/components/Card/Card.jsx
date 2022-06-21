import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Card.scss';

/* prettier-ignore */
export const Card = ({job}) => {
  
  const {id, position, company, location, postedAt, contract, logo, logoBackground} = job;
  
  return (
    <div className="card">
      <div
        className="card-icon"
        style={{
          backgroundImage: `url("./images/logos/${logo}")`,
          backgroundColor: logoBackground,
        }}
      ></div>
      <div className="card-body">
        <p className="card-overline txt-secondary">
          {postedAt} · {contract}
        </p>
        <h3 className="h3 card-title">
          <Link to={`/jobs/${id}`} className="link-title">
            {position}
          </Link>
        </h3>
        <p className="card-subtitle txt-secondary">{company}</p>
      </div>
      <h4 className="card-footer txt-primary">{location}</h4>
    </div>
  );
};

Card.propTypes = {
   job: PropTypes.object.isRequired,
};
