import React from 'react'
import './Skills.css'

import mysql_logo from "../../img/languages/mysql_logo.png"
import c_logo from "../../img/languages/c_logo.png"
import java_logo from "../../img/languages/java_logo.png"
import javascript_logo from "../../img/languages/javascript_logo.png"
import wordpress_logo from "../../img/languages/wordpress_logo.png"

import { motion } from 'framer-motion';

const Skills = () => {

    return (

        <div className="skills" id='Skills'>

            <div className="websites_left">
                <span>Work for All these</span>
                <span>Technologies</span>
                <span>I am very passionate with my work. I love to work with people and help people. <br />
                    I am hardworking and honest who has been familiar with languages <br />
                    C, Java, JavaScript, SQL, React JS and frameworks like wordpress, drupal. <br />
                    Also have an idea about Angular, Blockchain, GitHub, Web3.0 ....
                </span>

                {/* <button className="websites_button button">Hire me</button> */}

                <div className="websites_blur1 blur" style={{ background: "#ABF1FF94" }}></div>
            </div>

            <div className="skills_right">
                <motion.div
                    initial={{ rotate: 360 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spring' }}

                    className="skills_main_circle">
                    <div className="skills_secondary_circle">
                        <img src={mysql_logo} alt="" />

                    </div>
                    <div className="skills_secondary_circle">
                        <img src={java_logo} alt="" />

                    </div>
                    <div className="skills_secondary_circle">
                        <img src={javascript_logo} alt="" />

                    </div>
                    <div className="skills_secondary_circle">
                        <img src={c_logo} alt="" />

                    </div>
                    <div className="skills_secondary_circle">
                        <img src={wordpress_logo} alt="" />
                    </div>

                </motion.div>

                <div className="backCircle blueCircle"></div>
                <div className="backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Skills;