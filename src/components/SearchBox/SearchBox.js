import { useState, useContext } from 'react';
import JobsContext from '../../context/JobsContext';
import { useForm } from '../../hooks/useForm';
import { useMatchMedia } from '../../hooks/useMatchMedia';
import FormInputWrapper from '../FormInputWrapper/FormInputWrapper';
import FormCheckWrapper from '../FormCheckWrapper/FormCheckWrapper';
import FormInput from '../FormInput/FormInput';
import FormCheck from '../FormCheck/FormCheck';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

import './SearchBox.scss';

const SearchBox = () => {
   const initialState = {
      terms: '',
      location: '',
      isFullTime: false,
   };

   const [search, handleChange, reset] = useForm(initialState);
   const { terms, location, isFullTime } = search;

   const { handleSearch } = useContext(JobsContext);

   // Modal
   const [isOpen, setIsOpen] = useState(false);

   const openModal = () => setIsOpen(true);
   const closeModal = () => setIsOpen(false);

   const handleSubmit = e => {
      e.preventDefault();
      !!isOpen && closeModal();

      if (terms.trim().length < 1 && location.trim().length < 1) return;

      if (terms || location) {
         handleSearch({
            terms: terms.toLowerCase(),
            location: location.toLowerCase(),
            isFullTime: false,
         });

         reset(); // reset() must be inside code block
      }
   };

   /* Placeholder text in 'location' input field and the label of the checkbox
    * changes depending on the viewport size. useMatchMedia returns true if the
    *  viewport size is smaller than 850px and false otherwise.
    */

   const isSmallScreen = useMatchMedia('(max-width: 850px)');

   return (
      <>
         <form id="search-form" onSubmit={handleSubmit} className="form">
            <div className="search-box">
               <FormInputWrapper
                  classModifier="terms"
                  icon={<Icon type="search" fill="#5964E0" />}
               >
                  <FormInput
                     name="terms"
                     value={terms}
                     placeholder={
                        isSmallScreen
                           ? 'Filter by title...'
                           : 'Filter by title, companies...'
                     }
                     handleChange={handleChange}
                  />
                  <Button
                     action={openModal}
                     variant="search"
                     modifier="icon"
                     label={
                        <Icon
                           type="filter"
                           fill="#6E8098"
                           width="20"
                           height="20"
                        />
                     }
                  />

                  <Button
                     type="submit"
                     variant="search"
                     modifier="sm"
                     label={<Icon type="search" fill="#fff" />}
                  />
               </FormInputWrapper>

               <FormInputWrapper
                  classModifier="location"
                  icon={<Icon type="location" fill="#5964E0" width="17" />}
               >
                  <FormInput
                     name="location"
                     value={location}
                     placeholder="Filter by location..."
                     handleChange={handleChange}
                  />
               </FormInputWrapper>
               <FormCheckWrapper classModifier="type">
                  <FormCheck
                     name="isFullTime"
                     checked={isFullTime}
                     label={isSmallScreen ? 'Full Time' : 'Full Time Only'}
                     handleChange={handleChange}
                  />
               </FormCheckWrapper>

               <div className="search-btn-field">
                  {/* Submit Form Button */}

                  <Button type="submit" variant="search" label="Search" />
               </div>
            </div>

            {/* Modal ****************************************************************************/}

            {/* TODO: Put modal inside the form instead create a React portal                   
                Si el modal está en un portal React, los datos del formulario se pueden en viar sin problemas 
                añadiendo un identificador al formulario <form id="search-form"> y una etiqueta al botón que 
                lo relacione con el formulario  <button form="search-form">. El problema está en que cuando 
                se introduce información en un campo y se hace click no desencadena el evento submit.
            */}

            <Modal isOpen={isOpen} closeModal={closeModal}>
               <FormInputWrapper
                  classModifier="location"
                  icon={<Icon type="location" fill="#5964E0" width="17" />}
               >
                  <FormInput
                     name="location"
                     value={location}
                     placeholder="Filter by location..."
                     handleChange={handleChange}
                  />
               </FormInputWrapper>
               <FormCheckWrapper classModifier="type">
                  <FormCheck
                     name="isFullTime"
                     checked={isFullTime}
                     label="Full Time Only"
                     handleChange={handleChange}
                  />
               </FormCheckWrapper>

               <div className="search-btn-field">
                  {/* Submit Form Button: Modal 
                   Como dentro del formulario hay dos botones, a éste se le añade un indentificador 
                   (name="btnModal") para que se pueda identificar que es el botón del modal */}

                  <Button type="submit" variant="primary" label="Search" />
               </div>
            </Modal>

            {/* Modal end ***************************************************************************/}
         </form>
      </>
   );
};

export default SearchBox;
