import ReactDOM from 'react-dom'; /* ReactDOM.createPortal needs this import */
import { isEmpty } from '../../utils/utils';
import Button from '../Button/Button';
import Error from '../Error/Error';

import './JobDetails.scss';

const JobDetails = ({ job }) => {
   const {
      company,
      logo,
      logoBackground,
      position,
      postedAt,
      contract,
      location,
      website,
      apply,
      description,
      requirements,
      role,
   } = job;

   const bgIcon = {
      backgroundImage: `url(../../images/logos/${logo})`,
      backgroundColor: logoBackground,
   };

   if (isEmpty(job)) {
      return <Error type="notFound" />;
   }

   // IMP!!! Check if 'job' is not an empty object before rendering the component

   return (
      !isEmpty(job) && (
         <>
            <div className="job">
               {/* job-header start ----------------------------------- job-header */}
               <div className="job-header">
                  <div className="job-header-icon" style={bgIcon}></div>
                  <div className="job-header-body">
                     <h2 className="h2 job-title">{company}</h2>
                     {!!website && (
                        <p className="job-subtitle txt-secondary">{website}</p>
                     )}
                  </div>
                  {!!website && (
                     <a href={website} target="_blank" rel="noreferrer">
                        <Button variant="secondary" label="Company Site" />
                     </a>
                  )}
               </div>
               {/* job-header end ------------------------------------- job-header */}

               {/* job-content start --------------------------------- job-content */}
               <div className="job-content">
                  <div className="job-content-header">
                     <div>
                        <p className="job-overline txt-secondary">
                           {postedAt} · {contract}
                        </p>
                        <h1 className="h1 job-title">{position}</h1>
                        <h4 className="h4 txt-primary">{location}</h4>
                     </div>
                     <a href={apply} target="_blank" rel="noreferrer">
                        <Button variant="primary" label="Apply Now" />
                     </a>
                  </div>
                  <div>
                     <section className="job-content-section">
                        <p>{description}</p>
                     </section>
                     <section className="job-content-section">
                        <h3 className="h3 job-subtitle">Requirements</h3>
                        <p>{requirements.content}</p>

                        <ul className="requirements-list">
                           {requirements.items?.map((item, i) => (
                              <li key={i + 1}>{item}</li>
                           ))}
                        </ul>
                     </section>
                     <section className="job-content-section">
                        <h3 className="h3 job-subtitle">What You Will Do</h3>
                        <p>{role.content}</p>
                        <ol className="role-list">
                           {role.items?.map((item, i) => (
                              <li key={i + 1}>{item}</li>
                           ))}
                        </ol>
                     </section>
                  </div>
               </div>
               {/* job-content end ----------------------------------- job-content */}

               {/* job-footer start ----------------------------------- job-footer */}
               <div className="job-footer">
                  <div>
                     <h3 className="h3 job-subtitle">{position}</h3>
                     <p>{company}</p>
                  </div>
                  <a href={apply} target="_blank" rel="noreferrer">
                     <Button variant="primary" label="Apply Now" />
                  </a>
               </div>
               {/* job-footer end ------------------------------------ job-footer */}
            </div>

            {/* The React portal is created for the footer background since 
             it is longer than its container */}
            <PageFooterBg />
         </>
      )
   );
};

function PageFooterBg() {
   const bgContainer = document.querySelector('.bg-container');

   return ReactDOM.createPortal(
      <div className="job-footer-bg"></div>,
      bgContainer
   );
}

export default JobDetails;
