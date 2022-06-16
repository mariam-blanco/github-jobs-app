import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

import './AppLayout.scss';

const AppLayout = () => {
   return (
      <div className="bg-container">
         <div className="page-container">
            <Header />
            <main className="main">
               <Outlet />
            </main>
         </div>
      </div>
   );
};

export default AppLayout;
