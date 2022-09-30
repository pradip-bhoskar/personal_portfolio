import React from 'react';
import './Footer.css';

import Wave from '../../img/wave.png'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" />
            <div className="footer_content">

                <span>pradipbhoskar1997@gmail.com</span>
                <div className="footer_icons">
                    <a href="https://www.instagram.com/pradip_bhoskar/" target="_blank">  <Insta color='white' size='3rem'></Insta></a>
                    <a href="https://www.facebook.com/pradip.bhoskar.3" target="_blank"> <Facebook color='white' size='3rem'></Facebook></a>
                    <a href="https://github.com/pradip-bhoskar" target="_blank"> <Github color='white' size='3rem'></Github></a>
                </div>
                <span>Powered by Pradip Bhoskar</span>
            </div>
        </div>

    )
}

export default Footer;