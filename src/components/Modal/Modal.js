import PropTypes from 'prop-types';

import './Modal.scss';

const Modal = ({ isOpen, closeModal, children }) => {
   if (!isOpen) return null; // if modal is not open, return null

   const handleClose = e => {
      e.currentTarget === e.target && closeModal();
   };

   return (
      <div onClick={handleClose} className="modal">
         <div className="modal-container">{children}</div>
      </div>
   );
};

export default Modal;

Modal.propTypes = {
   isOpen: PropTypes.bool.isRequired,
   closeModal: PropTypes.func.isRequired,
};
