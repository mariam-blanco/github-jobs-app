import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from '../components/AppLayout/AppLayout';
import Home from '../pages/Home/Home';
import Job from '../pages/Job/Job';
import Error from '../components/Error/Error';

const AppRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="jobs/:id" element={<Job />} />
            <Route path="404" element={<Error type="notFound" />} />
            <Route
               path="network-error"
               element={<Error type="networkError" />}
            />
            <Route path="*" element={<Error type="notFound" />} />
         </Route>
      </Routes>
   );
};

export default AppRouter;
