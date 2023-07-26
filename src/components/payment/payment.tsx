import React, { useState } from 'react';

const pages = [
    {
        imagePath: './images/homeicon.webp',
        alt: 'Page 1',
        text: 'Paket',
        description: 'Pilih yang sesuai kebutuhan kamu',
    },
    {
        imagePath: './images/users.webp',
        alt: 'Page 2',
        text: 'Data diri anda',
        description: 'Nama/Email/No Telepon',
    },
    {
        imagePath: './images/dollar.webp',
        alt: 'Page 3',
        text: 'Metode Pembayaran',
        description: 'Pilih metode pembayaran kamu',
    },
];

function Payment() {
    const [activePage, setActivePage] = useState(0);

    const handleNavbarClick = (index: any) => {
        setActivePage(index);
    };

    const handleNext = () => {
        setActivePage((prevPage) => (prevPage === pages.length - 1 ? prevPage : prevPage + 1));
    };

    const handlePrevious = () => {
        setActivePage((prevPage) => (prevPage === 0 ? prevPage : prevPage - 1));
    };


    return (
        <div className="shadow-lg max-w-[1270px] relative top-[100px] left-[130px] border rounded-md">
            <div className="p-7">
                <div>
                    <div className="flex">
                        <div>
                            <ul className="">
                                {pages.map((page, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            marginTop: '10px',
                                            position: 'relative',
                                            bottom: '10px',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => handleNavbarClick(index)}
                                    >
                                        <li
                                            className={`p-1 mx-[100px] relative right-[100px]
                                            ${activePage === index ? 'bg-[#002157]' : 'bg-[#f1f0f2]'}
                                            rounded-md cursor-pointer duration-500`}
                                            style={{
                                                transition: "background-color 0.5s", backgroundImage: 'none'
                                            }}
                                        >
                                            <div>
                                                <img
                                                    src={page.imagePath}
                                                    alt={page.alt}
                                                    className={activePage === index ? '' : 'inactive-image'}
                                                />
                                            </div>
                                        </li>
                                        <button className="text-left relative left-[50px] bottom-[40px]">
                                            <p className="font-semibold text-[18px] text-[#4B465C]">{page.text}</p>
                                            <p className="font-normal text-[14px] text-[#bebbc0]">{page.description}</p>
                                        </button>
                                    </div>
                                ))}
                            </ul>
                        </div>
                        <div className="p-3 border-r-2 ml-6"></div>
                        <div>
                            {pages.map((page, index) => (
                                <div key={index} style={{ display: activePage === index ? 'block' : 'none' }}>
                                    {index === 0 && (
                                        <div>
                                            <div className='p-4 border-2 ml-7 border-[#79ACFF] min-h-[450px] rounded-lg'>
                                                <div className='-z-10 p-5 ml-0 w-[870px] h-[70px] rounded-lg relative bg-[#dcf6e8] text-[#28C76F]'>
                                                    <img src="./images/box.webp" alt="" />
                                                    <div className='relative left-14 bottom-10'>
                                                        <p className='font-semibold text-[18px]'>Paket Pelatihan 1</p>
                                                        <p className='font-medium text-[15px]'>- 10% Instant Discount on Bank of Indonesia and Credit cards</p>
                                                    </div>
                                                </div>
                                                <div className="w-[120px] h-[0px] ml-[730px] z-10 mt-[-56px] p-5 bg-white shadow-md rounded-lg flex justify-center items-center border border-blue-300">
                                                    <div className="text-blue-900 text-sm font-semibold font-sans">
                                                        <p>Rp 375.000</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='relative bottom-[350px] left-10 text-[15px]'>
                                                <p className='p-4'>Pelatihan Life Skills Penting untuk Umur 20-an: Pendekatan Kurikulum Konseling Satir Indonesia Bersama <br /> [Nama Dokter] (Jabatan)</p>
                                                <p className='p-4'>Hari/Tanggal: Minggu, 2 April 2023 <br />Waktu: 13.00 - 15.00 WIB</p>
                                                <div className='p-4 text-[#909090]'>
                                                    <p>Benefit:</p>
                                                    <ul className='list-disc p-4'>
                                                        <li>Benefit 1</li>
                                                        <li>Benefit 2</li>
                                                        <li>Benefit 3</li>
                                                        <li>Benefit 4</li>
                                                    </ul>
                                                </div>
                                                <button onClick={handleNext} className='bg-[#002157] ml-[743px] relative left-16 top-10 text-white px-4 py-1 rounded-lg'>
                                                    Next &#129058;
                                                </button>
                                                <button className='border-2 border-[#aaaaaa] relative top-2 left-[0px] text-[#aaaaaa] px-5 py-1 rounded-lg'>&#129056; Previous</button>
                                            </div>
                                            <div className='mt-[-200px]'></div>
                                        </div>
                                    )}
                                    {index === 1 && (
                                        <div>
                                            <div className='min-h-[600px]'>
                                                <div className='flex justify-center sm-440:pt-3'>
                                                    <div className='2xl:p-10 sm-440:p-10 -mt-8 relative left-[30px] 2xl:flex sm-440:flex 2xl:flex-wrap sm-440:flex-wrap gap-10 2xl:w-[900px] sm-440:w-[100px] font-medium'>
                                                        <div className='sm-440:-ml-[70px] sm-440:-mt-[30px] 2xl:ml-[0px]'>
                                                            <label htmlFor="namalengkap" className='2xl:text-[17px] text-[#4B465C] sm-440:text-[11px]'>Nama Lengkap</label>
                                                            <div className='2xl:pt-5 sm-440:pt-5 flex gap-10'>
                                                                <input type="text" placeholder='Nama Lengkap'
                                                                    className='p-2 2xl:w-[390px] sm-440:text-[10px] 2xl:text-[14px] 
                                                                sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]' />
                                                            </div>
                                                        </div>
                                                        <div className='sm-440:-ml-[70px] sm-440:-mt-[30px] 2xl:ml-[0px]'>
                                                            <label htmlFor="notelp" className='2xl:text-[17px] text-[#4B465C] sm-440:text-[11px]'>No Telepon / Whatsapp</label>
                                                            <div className='2xl:pt-5 sm-440:pt-5 flex gap-10'>
                                                                <input type="text" placeholder='+62'
                                                                    className='p-2 2xl:w-[390px] sm-440:text-[10px] 2xl:text-[14px] 
                                                    sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]' />
                                                            </div>
                                                        </div>

                                                        <div className=''>
                                                            <div className='pb-5'>
                                                                <label htmlFor="" className=''>Jenis Kelamin</label>
                                                            </div>
                                                            <div>
                                                                <select name="gender" id="gender" className='p-2 2xl:w-[390px] sm-440:text-[10px] 2xl:text-[14px] 
                                                                sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]'>
                                                                    <option value="Laki-Laki">Laki-Laki</option>
                                                                    <option value="Perempuan">Perempuan</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className=''>
                                                            <div className='pb-5'>
                                                                <label htmlFor="" className=''>Tanggal Lahir</label>
                                                            </div>
                                                            <div className='relative z-40'>
                                                                <select name="day" id="tanggal" className='p-2 2xl:w-[130px] sm-440:text-[10px] 2xl:text-[14px] 
                                                                sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]'   data-te-select-placeholder="Example placeholder"                                                                >
                                                                    <option value="" disabled selected>Tanggal</option>
                                                                    <option value="tanggal">1</option>
                                                                    <option value="tanggal">2</option>
                                                                    <option value="tanggal">3</option>
                                                                    <option value="tanggal">4</option>
                                                                    <option value="tanggal">5</option>
                                                                    <option value="tanggal">6</option>
                                                                    <option value="tanggal">7</option>
                                                                    <option value="tanggal">8</option>
                                                                    <option value="tanggal">9</option>
                                                                    <option value="tanggal">10</option>
                                                                    <option value="tanggal">11</option>
                                                                    <option value="tanggal">12</option>
                                                                    <option value="tanggal">13</option>
                                                                    <option value="tanggal">14</option>
                                                                    <option value="tanggal">15</option>
                                                                    <option value="tanggal">16</option>
                                                                    <option value="tanggal">17</option>
                                                                    <option value="tanggal">18</option>
                                                                    <option value="tanggal">19</option>
                                                                    <option value="tanggal">20</option>
                                                                    <option value="tanggal">21</option>
                                                                    <option value="tanggal">22</option>
                                                                    <option value="tanggal">23</option>
                                                                    <option value="tanggal">24</option>
                                                                    <option value="tanggal">25</option>
                                                                    <option value="tanggal">26</option>
                                                                    <option value="tanggal">27</option>
                                                                    <option value="tanggal">28</option>
                                                                    <option value="tanggal">29</option>
                                                                    <option value="tanggal">30</option>
                                                                    <option value="tanggal">31</option>
                                                                </select>
                                                                <select name="month" id="bulan" className='p-2 2xl:w-[130px] sm-440:text-[10px] 2xl:text-[14px] sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]'>
                                                                    <option value="" disabled selected>Bulan</option>
                                                                    <option value="bulan">January</option>
                                                                    <option value="bulan">Febuary</option>
                                                                    <option value="bulan">Maret</option>
                                                                    <option value="bulan">April</option>
                                                                    <option value="bulan">Mei</option>
                                                                    <option value="bulan">Juni</option>
                                                                    <option value="bulan">July</option>
                                                                    <option value="bulan">Agustus</option>
                                                                    <option value="bulan">September</option>
                                                                    <option value="bulan">Oktober</option>
                                                                    <option value="bulan">November</option>
                                                                    <option value="bulan">Desember</option>
                                                                </select>
                                                                <select name="year" id="tahun" className='p-2 2xl:w-[130px] sm-440:text-[10px] 2xl:text-[14px] sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]'>
                                                                    <option value="" disabled selected>Tahun</option>
                                                                    <option value="tahun">1980</option>
                                                                    <option value="tahun">1981</option>
                                                                    <option value="tahun">1982</option>
                                                                    <option value="tahun">1983</option>
                                                                    <option value="tahun">1984</option>
                                                                    <option value="tahun">1985</option>
                                                                    <option value="tahun">1986</option>
                                                                    <option value="tahun">1987</option>
                                                                    <option value="tahun">1988</option>
                                                                    <option value="tahun">1989</option>
                                                                    <option value="tahun">1990</option>
                                                                    <option value="tahun">1991</option>
                                                                    <option value="tahun">1992</option>
                                                                    <option value="tahun">1993</option>
                                                                    <option value="tahun">1994</option>
                                                                    <option value="tahun">1995</option>
                                                                    <option value="tahun">1996</option>
                                                                    <option value="tahun">1997</option>
                                                                    <option value="tahun">1998</option>
                                                                    <option value="tahun">1999</option>
                                                                    <option value="tahun">2000</option>
                                                                    <option value="tahun">2001</option>
                                                                    <option value="tahun">2002</option>
                                                                    <option value="tahun">2003</option>
                                                                    <option value="tahun">2004</option>
                                                                    <option value="tahun">2005</option>
                                                                    <option value="tahun">2006</option>
                                                                    <option value="tahun">2007</option>
                                                                    <option value="tahun">2008</option>
                                                                    <option value="tahun">2009</option>
                                                                    <option value="tahun">2010</option>
                                                                    <option value="tahun">2011</option>
                                                                    <option value="tahun">2012</option>
                                                                    <option value="tahun">2013</option>
                                                                    <option value="tahun">2014</option>
                                                                    <option value="tahun">2015</option>
                                                                    <option value="tahun">2016</option>
                                                                    <option value="tahun">2017</option>
                                                                    <option value="tahun">2018</option>
                                                                    <option value="tahun">2019</option>
                                                                    <option value="tahun">2020</option>
                                                                    <option value="tahun">2021</option>
                                                                    <option value="tahun">2022</option>
                                                                    <option value="tahun">2023</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className='sm-440:-ml-[70px] sm-440:-mt-[30px] 2xl:ml-[0px] pt-7'>
                                                            <label htmlFor="email" className='2xl:text-[17px] text-[#4B465C] sm-440:text-[11px]'>Email</label>
                                                            <div className='2xl:pt-5 sm-440:pt-5 flex gap-10'>
                                                                <input type="text" placeholder='john.doe@gmail.com'
                                                                    className='p-2 2xl:w-[390px] sm-440:text-[10px] 2xl:text-[14px] 
                                                                sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]' />
                                                            </div>
                                                        </div>
                                                        <div className='sm-440:-ml-[70px] sm-440:-mt-[30px] 2xl:ml-[0px] pt-7'>
                                                            <label htmlFor="Password" className='2xl:text-[17px] text-[#4B465C] sm-440:text-[11px]'>Password</label>
                                                            <div className='2xl:pt-5 sm-440:pt-5 flex gap-10'>
                                                                <input type="password" placeholder='546 784 5489'
                                                                    className='p-2 2xl:w-[390px] sm-440:text-[10px] 2xl:text-[14px] 
                                                                sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button onClick={handleNext} className='bg-[#002157] ml-[743px] left-20 relative bottom-10 text-white px-4 py-1 rounded-lg'>Next &#129058;</button>
                                            <button onClick={handlePrevious} className='border-2 border-[#002157] relative bottom-[80px] left-[90px] text-[#002157] px-5 py-1 rounded-lg'>&#129056; Previous</button>
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div>
                                            <div className='p-5'>
                                                <div className='pb-5 -mt-8'>
                                                    <label htmlFor="" className=''>Pilih Metode Pembayaran</label>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <select name="transfer" id="transfer" className='p-2 2xl:w-[400px] sm-440:text-[10px] 2xl:text-[14px] 
                                                                sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]'>
                                                        <option value="" disabled selected>Back Transfer</option>
                                                        <option value="BCA" className='p'>BCA</option>
                                                        <option value="Mandiri">Mandiri</option>
                                                    </select>
                                                    <select name="virtual" id="virtual" className='p-2 mt-5 2xl:w-[400px] sm-440:text-[10px] 2xl:text-[14px] 
                                                                sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]'>
                                                        <option value="" disabled selected>Transfer melalui Virtual Account</option>
                                                        <option value="BCA" className='p'>BCA</option>
                                                        <option value="Mandiri">Mandiri</option>
                                                    </select>
                                                    <select name="virtual" id="virtual" className='p-2 mt-5 2xl:w-[400px] sm-440:text-[10px] 2xl:text-[14px] 
                                                                sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]'>
                                                        <option value="" disabled selected>Dompet Elektronik</option>
                                                        <option value="BCA" className='p'>GoPay</option>
                                                        <option value="Mandiri">QRIS</option>
                                                        <option value="Mandiri">Shopee Pay</option>
                                                        <option value="Mandiri">DANA</option>
                                                    </select>
                                                    <select name="virtual" id="virtual" className='p-2 mt-5 2xl:w-[400px] sm-440:text-[10px] 2xl:text-[14px] 
                                                                sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]'>
                                                        <option value="" disabled selected>Dompet Elektronik</option>
                                                        <option value="BCA" className='p'>GoPay</option>
                                                        <option value="Mandiri">QRIS</option>
                                                        <option value="Mandiri">Shopee Pay</option>
                                                        <option value="Mandiri">DANA</option>
                                                    </select>
                                                    <select name="virtual" id="virtual" className='p-2 mt-5 2xl:w-[400px] sm-440:text-[10px] 2xl:text-[14px] 
                                                                sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]'>
                                                        <option value="" disabled selected>Mini Market</option>
                                                        <option value="BCA" className='p'>Alfamart</option>
                                                        <option value="Mandiri">indomaret</option>
                                                    </select>
                                                    <select name="virtual" id="virtual" className='p-2 mt-5 2xl:w-[400px] sm-440:text-[10px] 2xl:text-[14px] 
                                                                sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]'>
                                                        <option value="" disabled selected>Cicilan Tanpa Kartu</option>
                                                        <option value="BCA" className='p'>Kredivo</option>
                                                        <option value="Mandiri">Akulaku</option>
                                                    </select>
                                                    <select name="virtual" id="virtual" className='p-2 mt-5 2xl:w-[400px] sm-440:text-[10px] 2xl:text-[14px] 
                                                                sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]'>
                                                        <option value="" disabled selected>Kartu Kredit</option>
                                                        <option value="BCA" className='p'>Visa</option>
                                                        <option value="Mandiri">Master Card</option>
                                                        <option value="Mandiri">American Express</option>
                                                        <option value="Mandiri">JCB</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Payment;
