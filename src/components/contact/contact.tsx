import useContactUs from '../../hooks/useContactUs';

function Contact() {
    const { content, handleChange, handleSubmit, values } = useContactUs()


    return (
        <>
            <div className='pb-[300px] pt-[200px] drop-shadow-lg'>
                <div className='p-10 lg:mx-[100px] md:mx-0 sm-440:mx-0'>
                    <div className='lg:w-[1200px] md:w-auto sm:w-[460px] sm-440:w-[365px] sm320:w-[260px] lg:h-[660px] sm-440:h-[500px] sm320:h-[310px] bg-[#ffffff] rounded-lg'>
                        <div className=' float-left lg:w-[500px] md:w-auto sm-440:w-[170px] sm320:w-[110px] h-full bg-[#1D3A69] rounded-lg'>
                            <div className='text-white lg:text-[28px] sm-440:text-[20px] sm320:text-[10px] lg:p-10 sm-440:p-5 sm320:p-5'>
                                <p className='font-semibold'>Contact Information</p>
                                <p className='lg:text-[18px] sm-440:text-[16px] sm320:text-[10] font-normal text-[#C9C9C9]'>Say something to start a live chat!</p>
                            </div>
                            <div className='lg:p-10 sm-440:p-4 sm320:p-4 lg:text-[16px] sm-440:text-[13px] sm320:text-[10px]'>
                                {content && (
                                    <div className='relative sm320:bottom-6'>
                                        <img className='lg:relative lg:top-11 sm-440:relative sm-440:right-0 sm-440:top-5' src="./images/telp.png" alt="" />
                                        <p className='text-white lg:p-5 sm-440:p-0 lg:ml-10 sm-440:ml-10 sm-440:-mt-1'>Telephone (Whatsapp ) <span>{content.attributes.phone}</span></p>
                                        <img className='lg:relative lg:top-11 sm-440:relative sm-440:right-0 sm-440:top-5' src="./images/email.png" alt="" />
                                        <p className='text-white lg:p-5 sm-440:p-0 lg:ml-10 sm-440:ml-10 sm-440:-mt-1'>{content.attributes.email}</p>
                                        <img className='lg:relative lg:top-11 sm-440:relative sm-440:right-0 sm-440:top-9' src="./images/lokasi.png" alt="" />
                                        <p className='text-white lg:p-5 sm-440:p-0 lg:ml-10 sm-440:ml-10 sm-440:mt-4'>{content.attributes.adress}</p>
                                    </div>
                                )}
                            </div>
                            <div className='relative sm320:bottom-[29px] sm-440:bottom-0'>
                                <div className='float-right relative lg:top-0 lg:-mr-5 lg:-mt-6 sm-440:mt-[74px] md:top-[60px] lg:w-[200px] md:w-[100px] sm-440:w-[50px] sm320:w-[20px] sm320:mt-3'><img src="./images/lingkaran.png" alt="" /></div>
                                <div className='float-right relative lg:top-0 sm320:left-4 sm320:top-2 lg:-mt-10 md:top-[80px] sm-440:mt-[50px] lg:-mr-[150px] sm-440:-mr-5 md:w-[80px] lg:w-[200px] sm-440:w-[50px] sm320:w-[20px]'><img src="./images/lingkaran2.png" alt="" /></div>
                            </div>
                            <div className='relative sm320:bottom-5 sm-440:bottom-0'>
                                <a href=""><img className='float-left relative md:top-20 md:left-3 lg:top-0 lg:mt-[100px] sm-440:mt-[80px] lg:ml-9 sm-440:ml-1 w-[40px] sm320:ml-1 sm320:w-[15px]' src="./images/twiter.png" alt="" /></a>
                                <a href=""><img className='float-left relative md:top-20 md:left-3 lg:top-0 lg:mt-[100px] sm-440:mt-[80px] lg:ml-9 sm-440:ml-1 w-[40px] sm320:ml-1 sm320:w-[15px]' src="./images/instagram.png" alt="" /></a>
                                <a href=""><img className='float-left relative md:top-20 md:left-3 lg:top-0 lg:mt-[100px] sm-440:mt-[80px] lg:ml-9 sm-440:ml-1 w-[40px] sm320:ml-1 sm320:w-[15px]' src="./images/discord.png" alt="" /></a>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div
                                    className='relative left-1 lg:p-10 md:p-10 sm-440:p-2 flex flex-wrap lg:gap-10
                            md:gap-[20px] sm:gap-5 sm-440:gap-2 sm320:gap-3 w-auto font-medium
                             '>
                                    <div>
                                        <label htmlFor="firstname" className='font-bold lg:text-[17px] sm-440:text-[11px] sm320:text-[9px]'>First Name</label>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder='First Name'
                                                required
                                                value={values.firstName}
                                                name='firstName'
                                                onChange={handleChange}
                                                className='lg:w-[290px] sm320:w-[60px] md:w-[150px] sm:w-[120px] sm-440:w-[80px] sm-440:text-[10px] lg:text-[14px] sm320:text-[10px] outline-none no-underline border-b-2 border-[#8D8D8D]' />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="lastname" className='font-bold lg:text-[17px] sm-440:text-[11px] sm320:text-[9px]'>Last Name</label>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder='Last Name'
                                                required
                                                value={values.lastName}
                                                name='lastName'
                                                onChange={handleChange}
                                                className='lg:w-[290px] sm-440:text-[10px] md:w-[150px] sm:w-[120px] sm-440:w-[80px] sm320:w-[60px] lg:text-[14px] sm320:text-[10px]  outline-none no-underline border-b-2 border-[#8D8D8D]' />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className='font-bold lg:text-[17px] sm-440:text-[11px] sm320:text-[9px]'>Email</label>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder='Email'
                                                required
                                                name='email'
                                                onChange={handleChange}
                                                value={values.email}
                                                className='lg:w-[290px] md:w-[150px] sm:w-[120px] sm-440:w-[80px] sm320:w-[60px] sm-440:text-[10px] lg:text-[14px] sm320:text-[10px] outline-none no-underline border-b-2 border-[#8D8D8D]' />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="phonenumber" className='font-bold lg:text-[17px] sm-440:text-[11px] sm320:text-[9px]'>Phone Number</label>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder='+62xxxxxxx'
                                                required
                                                name='phone'
                                                onChange={handleChange}
                                                value={values.phone}
                                                className='lg:w-[290px] md:w-[150px] sm:w-[120px] sm-440:w-[80px] sm320:w-[60px] sm-440:text-[10px] lg:text-[14px] sm320:text-[10px] outline-none no-underline border-b-2 border-[#8D8D8D]' />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className='font-bold lg:text-[17px] sm-440:text-[11px] sm320:text-[9px]'>Message</label>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder='Write your message..'
                                                required
                                                name='message'
                                                onChange={handleChange}
                                                value={values.message}
                                                className='w-auto lg:w-[620px] md:w-[350px] sm:w-[260px] sm-440:w-[160px] sm320:w-[130px] sm-440:text-[10px] lg:text-[14px] sm320:text-[10px] outline-none no-underline border-b-2 border-[#8D8D8D]' />
                                        </div>
                                    </div>
                                    <button type='submit'>
                                        <div>
                                            <div className='bg-[#1D3A69] lg:w-[150px] lg:h-[40px] font-bold md:w-[100px] md:h-[40px]
                                            sm:w-[100px] sm:h-[40px] text-white rounded-lg pt-[6px] sm-440:px-2 sm-440:py-2 sm320:px-1 sm320:py-1 mt-2 ml-1 text-center
                                            hover:bg-[#1d4687]'>
                                                Kirim
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;