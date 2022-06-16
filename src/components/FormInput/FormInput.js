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
