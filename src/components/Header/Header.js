import { Link } from 'react-router-dom';
import Switcher from '../Switcher/Switcher';
import logo from '../../images/desktop/logo.svg';

import './Header.scss';

const Header = ({ toggleTheme }) => {
   return (
      <header className="header">
         <div className="logo">
            {/* When the logo is clicked, last search is shown without 
               'reloadDocument' attribute */}
            <Link to="/" reloadDocument>
               <img src={logo} alt="logo" />
            </Link>
         </div>
         <Switcher toggleTheme={toggleTheme} />
      </header>
   );
};

export default Header;
