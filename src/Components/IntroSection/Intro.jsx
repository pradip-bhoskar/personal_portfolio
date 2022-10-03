import React from 'react'
import "./Intro.css"

import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import pradip from '../../img/pradip.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import thumbup from '../../img/thumbup.png'

import FloatingDiv from '../FloatingDiv/FloatingDiv'

import { motion } from 'framer-motion';

import { useContext } from 'react';
import { themeContext } from '../../Context';

const Intro = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = { duration: 2, type: 'spring' };
    return (
        <div className="intro">
            <div className="intro_left">
                <div className="intro_name">
                    <span style={darkMode ? { color: "white" } : {}} >Hy! I am </span>
                    <span>Pradip Bhoskar</span>
                    <span style={darkMode ? { color: "white" } : {}}>I am graduate in Engineering having good programming skills & additional skills in computer related stuffs. Currently I am serving as a Freelancer after pursuing degree in Computer Science & Engineering.</span>
                </div>
                <a href="mailto:pradipbhoskar1997@gmail.com" >
                    <button className="intro_button button" >Hire me</button>
                </a>
                <div className="intro_icons">
                    <a href="https://github.com/pradip-bhoskar" target="_blank"> <img src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/pradip-bhoskar-218911171/" target="_blank"> <img src={LinkedIn} alt="" /></a>
                </div>
            </div>
            <div className="intro_right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={pradip} alt="" />
                <motion.img
                    initial={{ left: '-35%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}

                    src={glassesimoji} alt="" />
                <motion.div
                    initial={{ left: '78%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}

                    style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv image={Crown} txt1='Java' txt2='Developer'></FloatingDiv>
                </motion.div>
                <motion.div
                    initial={{ left: '4rem' }}
                    whileInView={{ left: '-2rem' }}
                    transition={transition}

                    style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Skills'></FloatingDiv>
                </motion.div>

                <div className="blur" style={{ background: "rgb(238 210 255)" }}>

                </div>
                <div className="blur" style={{
                    background: "#C1F5FF",
                    top: '17rem',
                    left: '-9rem',
                    width: '21rem',
                    height: '11rem'

                }}>
                </div>
            </div>
        </div>
    )
}

export default Intro;