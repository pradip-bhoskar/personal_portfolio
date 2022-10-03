import React from 'react'
import './Projects.css'

import pradipbhoskar from '../../img/project_images/pradipbhoskar_project.png'
import calculator from '../../img/project_images/calculator_project.png'
import clock from '../../img/project_images/clock_project.png'
import socialkatta from '../../img/project_images/socialkatta_project.png'
import aptitudekatta from '../../img/project_images/aptitudekatta_project.png'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useContext } from 'react'
import { themeContext } from '../../Context'

const Projects = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="projects" id='Projects'>

      <span style={darkMode ? { color: "white" } : {}}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='projects_slider'>
        <SwiperSlide>
          <a href="https://pradipbhoskar.com/" target="_blank" > <img src={pradipbhoskar} alt="" /> </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://pradipbhoskar.com/projects/javascript_calculator/calculator.html" target="_blank" > <img src={calculator} alt="" /> </a>

        </SwiperSlide>
        <SwiperSlide>
          <a href="https://pradipbhoskar.com/projects/javascript_clock/" target="_blank" > <img src={clock} alt="" /> </a>

        </SwiperSlide>
        <SwiperSlide>
          <a href="https://socialkatta.com/" target="_blank" > <img src={socialkatta} alt="" /> </a>

        </SwiperSlide>
        <SwiperSlide>
          <a href="https://aptitudekatta.com/" target="_blank" > <img src={aptitudekatta} alt="" /> </a>

        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Projects;