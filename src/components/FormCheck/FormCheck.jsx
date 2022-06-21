import PropTypes from 'prop-types';

import './FormCheck.scss';

export const FormCheck = ({ name, label, checked, handleChange }) => {
   return (
      <label className="checkbox">
         <input
            className="check-input"
            name={name}
            checked={checked}
            onChange={handleChange}
            type="checkbox"
         />
         <span className="checkmark"></span>
         <span className="label">{label}</span>
      </label>
   );
};

FormCheck.propTypes = {
   name: PropTypes.string.isRequired,
   label: PropTypes.string,
   checked: PropTypes.bool.isRequired,
   handleChange: PropTypes.func.isRequired,
};
