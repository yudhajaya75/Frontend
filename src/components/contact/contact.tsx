    import useContactUs from "../../hooks/useContactUs";

    function Contact() {
    const { content, handleChange, handleSubmit, values } = useContactUs();

    return (
        <>
        <div className="drop-shadow-lg">
            <div className="flex items-center justify-center p-10 ">
            <div className="mx-auto lg:w-[1100px] sm:w-auto lg:h-[660px] sm-440:h-[500px] bg-[#ffffff] rounded-lg">
                <div className="float-left lg:w-[400px] md:w-[300px] mx-auto sm-440:w-[180px] h-full bg-[#1D3A69] rounded-lg">
                <div className="text-white 2xl:text-[28px] sm-440:text-[20px] 2xl:p-10 sm-440:p-5">
                    <p className="font-semibold">Contact Information</p>
                    <p className="2xl:text-[18px] sm-440:text-[12px] font-normal text-[#C9C9C9]">
                    Say something to start a live chat!
                    </p>
                </div>
                <div className="2xl:p-10 sm-440:p-4 2xl:text-[16px] sm-440:text-[10px]">
                    {content && (
                    <>
                        <img
                        className="2xl:relative 2xl:top-11 sm-440:relative sm-440:right-0 sm-440:top-5"
                        src="./images/telp.png"
                        alt=""
                        />
                        <p className="text-white 2xl:p-5 sm-440:p-0 2xl:ml-10 sm-440:ml-10 sm-440:-mt-1">
                        Telephone (Whatsapp ){" "}
                        <span>{content.attributes.phone}</span>
                        </p>
                        <img
                        className="2xl:relative 2xl:top-11 sm-440:relative sm-440:right-0 sm-440:top-5"
                        src="./images/email.png"
                        alt=""
                        />
                        <p className="text-white 2xl:p-5 sm-440:p-0 2xl:ml-10 sm-440:ml-10 sm-440:-mt-1">
                        {content.attributes.email}
                        </p>
                        <img
                        className="2xl:relative 2xl:top-11 sm-440:relative sm-440:right-0 sm-440:top-9"
                        src="./images/lokasi.png"
                        alt=""
                        />
                        <p className="text-white 2xl:p-5 sm-440:p-0 2xl:ml-10 sm-440:ml-10 sm-440:mt-4">
                        {content.attributes.adress}
                        </p>
                    </>
                    )}
                </div>
                <div className="float-right 2xl:-mr-5 2xl:-mt-6 sm-440:mt-[133px] 2xl:w-[200px] sm-440:w-[60px]">
                    <img src="./images/lingkaran.png" alt="" />
                </div>
                <div className="float-right 2xl:-mt-10 sm-440:mt-[120px] 2xl:-mr-[150px] sm-440:-mr-12 2xl:w-[200px] sm-440:w-[60px]">
                    <img src="./images/lingkaran2.png" alt="" />
                </div>
                <div>
                    <a href="">
                    <img
                        className="float-left 2xl:mt-[100px] sm-440:mt-[150px] 2xl:ml-9 sm-440:ml-1"
                        src="./images/twiter.png"
                        alt=""
                    />
                    </a>
                    <a href="">
                    <img
                        className="float-left 2xl:mt-[100px] sm-440:mt-[150px] 2xl:ml-9 sm-440:ml-1"
                        src="./images/instagram.png"
                        alt=""
                    />
                    </a>
                    <a href="">
                    <img
                        className="float-left 2xl:mt-[100px] sm-440:mt-[150px] 2xl:ml-9 sm-440:ml-1"
                        src="./images/discord.png"
                        alt=""
                    />
                    </a>
                </div>
                </div>
                <form onSubmit={handleSubmit}>
                <div
                    className="lg:p-10 md:p-10 lg:flex lg:flex-wrap md:flex md:flex-wrap lg:gap-10 
                                md:gap-[30px] md:w-auto sm-440:w-[380px] font-medium
                                "
                >
                    <div>
                    <label
                        htmlFor="firstname"
                        className="font-bold lg:text-[17px] sm-440:text-[11px]"
                    >
                        First Name
                    </label>
                    <div>
                        <input
                        type="text"
                        placeholder="First Name"
                        required
                        value={values.firstName}
                        name="firstName"
                        onChange={handleChange}
                        className="lg:w-[290px] sm-440:text-[10px] lg:text-[14px] sm:w-auto sm-440:w-[160px] outline-none no-underline border-b-2 border-[#8D8D8D]"
                        />
                    </div>
                    </div>
                    <div>
                    <label
                        htmlFor="lastname"
                        className="font-bold lg:text-[17px] sm-440:text-[11px]"
                    >
                        Last Name
                    </label>
                    <div>
                        <input
                        type="text"
                        placeholder="Last Name"
                        required
                        value={values.lastName}
                        name="lastName"
                        onChange={handleChange}
                        className="lg:w-[290px] sm-440:text-[10px] lg:text-[14px] sm:w-auto sm-440:w-[160px] outline-none no-underline border-b-2 border-[#8D8D8D]"
                        />
                    </div>
                    </div>
                    <div>
                    <label
                        htmlFor="email"
                        className="font-bold lg:text-[17px] sm-440:text-[11px]"
                    >
                        Email
                    </label>
                    <div>
                        <input
                        type="text"
                        placeholder="Email"
                        required
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        className="lg:w-[290px] sm-440:text-[10px] lg:text-[14px] sm:w-auto sm-440:w-[160px] outline-none no-underline border-b-2 border-[#8D8D8D]"
                        />
                    </div>
                    </div>
                    <div>
                    <label
                        htmlFor="phonenumber"
                        className="font-bold lg:text-[17px] sm-440:text-[11px]"
                    >
                        Phone Number
                    </label>
                    <div>
                        <input
                        type="text"
                        placeholder="+62xxxx xx xxx"
                        required
                        name="phone"
                        onChange={handleChange}
                        value={values.phone}
                        className="lg:w-[290px] sm-440:text-[10px] lg:text-[14px] sm:w-auto sm-440:w-[160px] outline-none no-underline border-b-2 border-[#8D8D8D]"
                        />
                    </div>
                    </div>
                    <div>
                    <label
                        htmlFor="message"
                        className="font-bold lg:text-[17px] sm-440:text-[11px]"
                    >
                        Message
                    </label>
                    <div>
                        <input
                        type="text"
                        placeholder="Write your message.."
                        required
                        name="message"
                        onChange={handleChange}
                        value={values.message}
                        className="lg:w-[620px] sm-440:text-[10px] lg:text-[14px] sm:w-auto sm-440:w-[160px] outline-none no-underline border-b-2 border-[#8D8D8D]"
                        />
                    </div>
                    </div>
                    <button type="submit">
                    <div
                        className="bg-[#1D3A69] 2xl:w-[150px] font-bold md:w-[100px] md:h-[40px]
                                            2xl:h-[40px] sm:w-[100px] sm:h-[40px] sm:top-4 sm:right-0 text-white rounded-lg pt-[6px] relative 2xl:top-0 2xl:left-0 
                                            md:relative md:bottom-0 md:right-10 sm-440:top-5 sm-440:px-2 sm-440:py-2 text-center hover:bg-[#1d4687]"
                    >
                        Kirim
                    </div>
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </>
    );
    }

    export default Contact;
