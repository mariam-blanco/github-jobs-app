import './FormCheck.scss';

const FormCheck = ({ name, checked, label, handleChange }) => {
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

export default FormCheck;
