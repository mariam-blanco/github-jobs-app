import PropTypes from 'prop-types';

import './FormInput.scss';

const FormInput = ({ name, value, placeholder, handleChange }) => {
   return (
      <input
         className="text-input"
         name={name}
         value={value}
         onChange={handleChange}
         type="text"
         placeholder={placeholder}
      />
   );
};

export default FormInput;

FormInput.propTypes = {
   name: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   placeholder: PropTypes.string,
   handleChange: PropTypes.func.isRequired,
};
