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
