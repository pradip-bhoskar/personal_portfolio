import React from 'react';
import './Certificates.css';

import Java_Hackerrank from '../../img/Certificates/java_certificate_hackerrank.png';
import HTML_Sololearn from '../../img/Certificates/html_css_sololearn.jpg';
import SQL_Sololearn from '../../img/Certificates/sql_certificate_sololearn.png';
import Degree_Certificate from '../../img/Certificates/degree_certificate.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Pagination } from 'swiper';
import 'swiper/css/pagination';

const Certificates = () => {
    // https://www.hackerrank.com/certificates/a69cb97d1965
    // https://www.sololearn.com/Certificate/CT-GYYBNTW1/jpg
    // https://www.sololearn.com/certificates/CT-HIOCMTJX
    //     
    const certificates = [
        {
            name: "Java Certificate",
            img: Java_Hackerrank,
            url: "https://www.hackerrank.com/certificates/a69cb97d1965"
        },
        {
            name: "Html CSS Certificate",
            img: HTML_Sololearn,
            url: "https://www.sololearn.com/Certificate/CT-GYYBNTW1/jpg"
        },
        {
            name: "SQL Certificate",
            img: SQL_Sololearn,
            url: "https://www.sololearn.com/certificates/CT-HIOCMTJX"
        }, {
            name: "Degree Certificate",
            img: Degree_Certificate,
            url: "https://drive.google.com/file/d/18r8p3ryP6bdvhPa30k_aM7WMYOf66d2H/view?usp=sharing"
        }

    ]

    return (
        <div className="certificates" id='Certificates'>

            <div className="certificates_heading">
                <span>My Awesome </span>
                <span>Certificates </span>

                <div className="blur certificates_blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur certificates_blur2" style={{ background: "skyblue" }}></div>
            </div>

            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    certificates.map((certificate, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="certificates_slider">
                                    <a href={certificate.url} target="_blank">
                                        <img src={certificate.img} alt="" />
                                    </a>
                                    <div className='certificates_description'>
                                        <span>{certificate.name} :</span>
                                        <span><a href={certificate.url} target="_blank">View Certificate</a></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </div>
    )
}

export default Certificates;