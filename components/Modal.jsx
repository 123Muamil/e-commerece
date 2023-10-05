import React, { useEffect } from 'react';

function ProjectModal({ isOpen, project, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Cleanup effect
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <div className='modal-close' onClick={onClose}>
          &times;
        </div>
        <img src={project.image} alt={project.title} className='modal-image' />
        <h2>{project.title}</h2>
        <div className='modal-details'>
          <p>Location: {project.location}</p>
          <p>Owner: {project.owner}</p>
          <p>Date: {project.date}</p>
          <p>Description: {project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
