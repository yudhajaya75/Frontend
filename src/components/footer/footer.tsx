import React, { useEffect, useState } from 'react'
import '../footer/footer.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Footer = () => {
    const url = 'http://localhost:4001/footer-adress';
    const url2 = 'http://localhost:4001/footer-contact-us';
    const [adreess, setAdreess] = useState<any>([]);
    const [contactUs, setContactUs] = useState<any>([]);
        useEffect(() =>{
        axios.get(url)
        .then((res) => {
            setAdreess(res.data.data[0]);
        })

        axios.get(url2)
        .then((response) => {
            setContactUs(response.data.data[0])
        })
    }, [])
    
    return (
        <div className='footer'>
            <div className='sb__footer'>
                <div className='sb__footer-links'>
                    <div className='sb__footer-links_div'>
                        <h4 style={{ fontWeight: 'bold', fontSize: '15px' }}>Hall of Collaborator</h4>
                        <a href="https://salt.id/academy">
                            <div className='logo'>
                                <p><img src="http://localhost:3000/images/salt.webp" alt="" /></p>
                            </div>
                        </a>
                    </div>
                    <div className='sb__footer-links_div'>
                        <div className='contact-us'>
                        <div className='contact-usweb'>
                            <h4 style={{ fontWeight: 'bold', fontSize: '15px' }}>Contact Us</h4>
                            <p>{contactUs.pobox} <span className='font-bold'>{contactUs.poboxNumber} </span> </p>
                            <p>{contactUs.city } <span className='font-bold'>{contactUs.cityNumber}</span></p>
                            <p>Phone <span className='font-bold'>{contactUs.phoneNumber}</span> </p>
                        </div>
                        </div>
                    </div>
                    <div className='sb__footer-links_div'>
                        <div className="addres">
                            <h4 style={{ fontWeight: 'bold', fontSize: '15px' }}>Address</h4>
                            <p>{adreess.street} <span className='font-bold'>{adreess.city}</span></p>
                        </div>
                    </div>
                    <div className='sb__footer-links_div'>
                        <h4 style={{ fontWeight: 'bold', fontSize: '13px' }}>Social media bawahnya</h4>
                        <div className='socialmedia'>
                            <a href="https://www.facebook.com/konselingsatir.id/"><img src="http://localhost:3000/images/fb.webp" alt="" /></a>
                            <p><img className='relative bottom-2' src="http://localhost:3000/images/ig.webp" alt="" /></p>
                            <a href=""></a>
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