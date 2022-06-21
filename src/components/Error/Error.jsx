import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import imageNetworkError from 'images/undraw_online_connection.svg';
import imageNotFound from 'images/undraw-publish-article.svg';

import './Error.scss';

export const Error = ({ type }) => {
   const errorType = {
      notFound: {
         title: 'Page not found :(',
         message: <NotFoundMessage />,
         image: imageNotFound,
      },
      noResults: {
         title: 'No results :(',
         message: "We couldn't find any matches. Try different search terms.",
         image: imageNotFound,
      },
      networkError: {
         title: 'Oooops!',
         message: <NetworkErrorMessage />,
         image: imageNetworkError,
      },
   };

   const { title, message, image } = errorType[type];

   return (
      <div className="error">
         <h1 className="error-title">{title}</h1>
         <p className="error-message">{message}</p>
         <img
            className="error-image"
            src={image}
            width="300px"
            alt="Network error"
         />
      </div>
   );
};

function NotFoundMessage() {
   return (
      <>
         The page you're looking for is not here.{' '}
         <Link to="/" className="link-text">
            Back to the home page
         </Link>
      </>
   );
}

function NetworkErrorMessage() {
   return (
      <>
         Network issues. Please{' '}
         <Link to="/" reloadDocument className="link-text">
            click here
         </Link>{' '}
         to try again.
      </>
   );
}

Error.propTypes = {
   type: PropTypes.oneOf(['notFound', 'networkError', 'noResults']).isRequired,
};
