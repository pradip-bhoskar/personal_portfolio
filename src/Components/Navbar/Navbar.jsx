import React from 'react'
import './Navbar.css'

import { Link } from 'react-scroll'

import Toggle from '../Toggle/Toggle'

const Navbar = () => {
    return (

        <div className="navbar_wrapper">
            <div className="navbar_left">
                <div className="navbar_name">
                    Pradip
                </div>
                <Toggle></Toggle>
            </div>
            <div className="navbar_right" id='Navbar'>
                <div className="navbar_list">
                    <ul>

                        <Link spy={true} to={'Navbar'} smooth={true} >
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to={'Websites'} smooth={true} >
                            <li>Websites</li>
                        </Link>
                        <Link spy={true} to={'Skills'} smooth={true} >
                            <li>Skills</li>
                        </Link>
                        <Link spy={true} to={'Projects'} smooth={true}>
                            <li>Projects</li>
                        </Link>
                        <Link spy={true} to={'Certificates'} smooth={true}>
                            <li>Certificates</li>
                        </Link>

                    </ul>
                </div>
                <Link spy={true} to={'Contact'} smooth={true} >
                    <button className="navbar_button button">
                        Contact
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;