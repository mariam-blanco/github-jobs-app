import { Outlet } from 'react-router-dom';
import { Header } from 'components';

import './AppLayout.scss';

export const AppLayout = () => {
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
