import React, { useEffect, useState } from 'react'
import '../footer/footer.css'
import axios from 'axios';
import useFooter from '../../hooks/useFooter';

const Footer = () => {

    const { adreess, contactUs } = useFooter()

    return (
        <div className='footer' style={{ marginTop: 300 }}>
            <div className='sb__footer'>
                <div className='sb__footer-links'>
                    <div className='sb__footer-links_div'>
                        <h4 style={{ fontWeight: 'bold', fontSize: '15px' }}>Hall of Collaborator</h4>
                        <a href="https://salt.id/academy">
                            <div className='logo'>
                                <p><img src="/images/salt.webp" alt="" /></p>
                            </div>
                        </a>
                    </div>
                    <div className='sb__footer-links_div'>
                        <div className='contact-us'>
                            <h4 style={{ fontWeight: 'bold', fontSize: '15px' }}>Contact Us</h4>
                            <p>{contactUs.pobox} <span className='font-bold'>{contactUs.poboxNumber} </span> </p>
                            <p>{contactUs.city} <span className='font-bold'>{contactUs.cityNumber}</span></p>
                            <p>Phone <span className='font-bold'>{contactUs.phoneNumber}</span> </p>
                        </div>
                    </div>
                    <div className='sb__footer-links_div'>
                        <div className="addres">
                            <h4 style={{ fontWeight: 'bold', fontSize: '15px' }}>Address</h4>
                            <p>{adreess.street}</p>
                            <p className='font-bold'>{adreess.city}</p>
                        </div>
                    </div>
                    <div className='sb__footer-links_div'>
                        <h4 style={{ fontWeight: 'bold', fontSize: '13px' }}>Social media bawahnya</h4>
                        <div className='socialmedia'>
                            <a href="https://www.facebook.com/konselingsatir.id/"><img src="http://localhost:3000/images/fb.webp" alt="" /></a>
                            <p><img src="./images/ig.webp" alt="" /></p>
                        </div>
                    </div>
                </div>


                <div className='sb__footer-below'>
                    <div className='sb__footer-copyright'>
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