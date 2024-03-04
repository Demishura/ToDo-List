import React from 'react';
import './AgregarTareaModal.css';
import { MdLibraryAdd } from "react-icons/md";
import { MdCancel } from "react-icons/md";

const AgregarTareaModal = ({ isOpen, onClose, onAgregarTarea }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoPartido = e.target.elements.nuevoPartido.value;
    onAgregarTarea(nuevoPartido);
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-contenido">
          <h2>Agregar Tareas</h2>
          <form onSubmit={handleSubmit}>
            
              <textarea rows={4} type="text" name="nuevoPartido" />
              <button className='boton' type="submit">
              <MdLibraryAdd />
            </button>
          </form>
          <span>
          <button onClick={onClose} className='cancelar'><MdCancel/> </button>
          </span>
        </div>
      </div>
    )
  );
};

export default AgregarTareaModal;