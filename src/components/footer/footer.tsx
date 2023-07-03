import React from 'react'
import '../footer/footer.css'
import { Link } from 'react-router-dom';

const footer = () => {
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
                            <h4 style={{ fontWeight: 'bold', fontSize: '15px' }}>Contact Us</h4>
                            <p>Jakarta 743 4646</p>
                            <p>po box 01 8000 184646 </p>
                            <p>Phone +62 8000 184646 </p>
                        </div>
                    </div>
                    <div className='sb__footer-links_div'>
                        <div className="addres">
                            <h4 style={{ fontWeight: 'bold', fontSize: '15px' }}>Address</h4>
                            <p>JL K.H Abdullah No 57B Jakarta Selatan</p>
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

export default footer