import PropTypes from 'prop-types';

import './FormInputWrapper.scss';

export const FormInputWrapper = ({ classModifier, icon, children }) => {
   return (
      <div className={`search-field ${classModifier}`}>
         {icon}
         {children}
      </div>
   );
};

FormInputWrapper.propTypes = {
   classModifier: PropTypes.oneOf(['terms', 'location']).isRequired,
   icon: PropTypes.element,
};
