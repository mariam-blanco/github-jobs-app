import iconSun from 'images/desktop/icon-sun.svg';
import iconMoon from 'images/desktop/icon-moon.svg';

import './Switcher.scss';

/* TOOGLE light-dark theme
 *  -----------------------
 *  1.- We add 'data-theme' attribute to the body tag with initial value "light".
 *  2.- Depending on if the radio button is checked or not, the value of 'data-theme'
 *      is set to "light" or "dark".
 *  3.- In index.scss, we define custom properties with the values of each theme on the :root pseudo-class.
 */

export const Switcher = () => {
   const handleChange = ({ target }) => {
      /* If the attribute already exists, the value is updated; 
        otherwise a new attribute is added with the specified name and value.*/
      const toggleTheme = theme =>
         document.body.setAttribute('data-theme', theme);

      target.checked ? toggleTheme('dark') : toggleTheme('ligth');
   };

   return (
      <div className="switch-theme">
         <span>
            <img src={iconSun} alt="Ligth mode" />
         </span>
         <label className="switch">
            <input type="checkbox" onChange={handleChange} />
            <span className="slider"></span>
         </label>
         <span>
            <img src={iconMoon} alt="Dark mode" />
         </span>
      </div>
   );
};
