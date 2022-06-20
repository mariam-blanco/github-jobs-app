import PropTypes from 'prop-types';

import './FormInputWrapper.scss';

const FormInputWrapper = ({ classModifier, icon, children }) => {
   return (
      <div className={`search-field ${classModifier}`}>
         {icon}
         {children}
      </div>
   );
};

export default FormInputWrapper;

FormInputWrapper.propTypes = {
   classModifier: PropTypes.oneOf(['terms', 'location']).isRequired,
   icon: PropTypes.element,
};
