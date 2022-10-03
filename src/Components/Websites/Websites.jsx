import React from 'react'
import './Websites.css'

import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'

import Resume from '../../files/Pradip_Bhoskar_Java_Fresher.pdf'

import Card from '../Card/Card '

import { useContext } from 'react'
import { themeContext } from '../../Context'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Pagination } from 'swiper';
import 'swiper/css/pagination';

import { motion } from 'framer-motion';

const Websites = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = { duration: 2, type: 'spring' };

    return (
        <div className="websites" id='Websites'>
            <div className="websites_left">
                <span style={darkMode ? { color: "white" } : {}}>My Awesome</span>
                <span>Websites</span>
                <span>"A lot of people are so used to just seeing the outcome of work. <br />
                    They never see the side of the work you go through to produce the outcome." <br /><br />
                    — Michael Jackson</span>
                <a href={Resume} download>
                    <button className="websites_button button">Download CV</button>
                </a>
                <div className="websites_blur1 blur" style={{ background: "#ABF1FF94" }}></div>

            </div>
            <div className="websites_right">
                <motion.div

                    initial={{ left: '20rem' }}
                    whileInView={{ left: '14rem' }}
                    transition={transition}
                >
                    <Card
                        emoji={HeartEmoji}
                        heading={'Aptitude Katta'}
                        detail={"wordpress"}
                        url={"https://aptitudekatta.com/"}
                    />
                </motion.div>

                <motion.div
                    initial={{ left: '-10rem' }}
                    whileInView={{ left: '-4rem' }}
                    transition={transition}
                >
                    <Card
                        emoji={Glasses}
                        heading={'Social Katta'}
                        detail={"wordpress"}
                        url={"https://socialkatta.com/"}
                    />

                </motion.div>

                <motion.div
                    initial={{ left: '18rem' }}
                    whileInView={{ left: '12rem' }}
                    transition={transition}
                >
                    <Card
                        emoji={Humble}
                        heading={'Personal Porfolio'}
                        detail={"JavaScript, React JS"}
                        url={"https://www.pradipbhoskar.com/"}
                    />

                </motion.div>
                <div className="websites_blur1 blur" style={{ background: "var(--purple)" }}></div>
            </div>

            <Swiper
                modules={[Pagination]}
              
                slidesPerView={1}
                pagination={{ clickable: true }}
                grabCursor={true}
                className='websites_slider'
            >
                <SwiperSlide>
                    <Card
                        emoji={Glasses}
                        heading={'Social Katta'}
                        detail={"wordpress"}
                        url={"https://socialkatta.com/"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Aptitude Katta'}
                        detail={"wordpress"}
                        url={"https://aptitudekatta.com/"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        emoji={Humble}
                        heading={'Personal Portfolio'}
                        detail={"JavaScript, React JS"}
                        url={"https://www.pradipbhoskar.com/"}
                    />
                </SwiperSlide>
            </Swiper>
        </div >
    )
}

export default Websites;