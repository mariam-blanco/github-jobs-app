import './Button.scss';

const Button = ({
   type = 'button',
   name,
   variant,
   modifier,
   label,
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
         {label}
      </button>
   );
};

export default Button;
