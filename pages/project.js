import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, EffectCoverflow, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import ProjectModal from '../components/Modal'

SwiperCore.use([Navigation, EffectCoverflow, Autoplay])

function ProjectShowcase() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1 goes here.',
      image: 'https://m.media-amazon.com/images/I/81B77MW5wQL._AC_SL1500_.jpg',
      location: 'Location 1',
      owner: 'Owner 1',
      date: 'Date 1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2 goes here.',
      image: 'https://m.media-amazon.com/images/I/81B77MW5wQL._AC_SL1500_.jpg',
      location: 'Location 2',
      owner: 'Owner 2',
      date: 'Date 2',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3 goes here.',
      image: 'https://m.media-amazon.com/images/I/81B77MW5wQL._AC_SL1500_.jpg',
      location: 'Location 3',
      owner: 'Owner 3',
      date: 'Date 3',
    },
    // Add more project objects as needed
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  // Function to handle adding/removing the class to disable/enable window scrolling



  return (
    <div className='project-showcase'>
      <h1 className='page-title'>Latest Projects</h1>
      <Swiper
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000 }}
        spaceBetween={20}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className='project-card' onClick={() => openModal(project)}>
              <div className='card-image'>
                <img src={project.image} alt={project.title} />
                <div className='card-content'>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={closeModal}
      />
    </div>
  )
}

export default ProjectShowcase
