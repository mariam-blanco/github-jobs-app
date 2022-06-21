import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppLayout, Error } from 'components';
import { Home, Job } from 'pages';

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
