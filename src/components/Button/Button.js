import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({
   type = 'button',
   name,
   variant,
   modifier,
   label,
   icon,
   action,
}) => {
   const btnModifier = modifier ? ` btn-${modifier}` : '';

   return (
      <button
         type={type}
         name={name}
         onClick={action}
         className={`btn btn-${variant}` + btnModifier}
      >
         {icon}
         {label}
      </button>
   );
};

export default Button;

Button.propTypes = {
   type: PropTypes.string,
   name: PropTypes.string,
   variant: PropTypes.string.isRequired,
   modifier: PropTypes.string,
   label: PropTypes.string,
   icon: PropTypes.element,
   action: PropTypes.func,
};
