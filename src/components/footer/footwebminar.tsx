import React, { useEffect, useState } from 'react'
import '../footer/footweb.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Footer = () => {
    const [adreess, setAdreess] = useState<any>([]);
    const [contactUs, setContactUs] = useState<any>([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SCRIPTS_URL}/footer-adress`)
            .then((res) => {
                setAdreess(res.data.data[0]);
            })

        axios.get(`${process.env.REACT_APP_SCRIPTS_URL}/footer-contact-us`)
            .then((response) => {
                setContactUs(response.data.data[0])
            })
    }, [])

    return (
        <div className='footerweb'>
            <div className='sb__footerweb'>
                <div className='sb__footer-linksweb'>
                    <div className='sb__footer-links_divweb'>
                        <h4 style={{ fontWeight: 'bold', fontSize: '15px' }}>Hall of Collaborator</h4>
                        <a href="https://salt.id/academy">
                            <div className='logoweb'>
                                <p><img src="http://localhost:3000/images/salt.webp" alt="" /></p>
                            </div>
                        </a>
                    </div>
                    <div className='sb__footer-links_divweb'>
                        <div className='contact-usweb'>
                            <h4 style={{ fontWeight: 'bold', fontSize: '15px' }}>Contact Us</h4>
                            <p>{contactUs.pobox} <span className='font-bold'>{contactUs.poboxNumber} </span> </p>
                            <p>{contactUs.city} <span className='font-bold'>{contactUs.cityNumber}</span></p>
                            <p>Phone <span className='font-bold'>{contactUs.phoneNumber}</span> </p>
                        </div>
                    </div>
                    <div className='sb__footer-links_divweb'>
                        <div className="addresweb">
                            <h4 style={{ fontWeight: 'bold', fontSize: '15px' }}>Address</h4>
                            <p>JL K.H Abdullah No 57B Jakarta Selatan</p>
                        </div>
                    </div>
                    <div className='sb__footer-links_divweb'>
                        <h4 style={{ fontWeight: 'bold', fontSize: '13px' }}>Social media bawahnya</h4>
                        <div className='socialmediaweb'>
                            <a href="https://www.facebook.com/konselingsatir.id/"><img src="http://localhost:3000/images/fb.webp" alt="" /></a>
                            <p><img className='relative bottom-2' src="http://localhost:3000/images/ig.webp" alt="" /></p>
                            <a href=""></a>
                        </div>
                    </div>
                </div>


                <div className='sb__footer-belowweb'>
                    <div className='sb__footer-copyrightweb'>
                        <p>
                            Copyright © 2021 Konseling Satir Indonesia
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer