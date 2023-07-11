import React, { useState } from 'react';

const Profile: React.FC = () => {
    const [activePage, setActivePage] = useState('riwayat');

    const handleNavbarClick = (page: string) => {
        setActivePage(page);
    };

    return (
        <>
            <div>
                <div>
                    <div className="bg-white w-[80rem] mx-auto mt-5 rounded-lg shadow-lg py-5">
                        <ul className="flex">
                            <li
                                className={`ml-5 text-[24px] p-5 ${activePage === 'riwayat' ? 'text-[#002157] bg-[#f0f2f5]' : 'text-[#002157]'
                                    } rounded-md cursor-pointer duration-500`}
                                onClick={() => handleNavbarClick('riwayat')}
                            >
                                <a href="#riwayat">Riwayat Pembelian</a>
                            </li>
                            <li
                                className={`ml-5 text-[24px] p-5 ${activePage === 'jadwal' ? 'text-[#002157] bg-[#f0f2f5]' : 'text-[#002157]'
                                    } rounded-md cursor-pointer duration-500`}
                                onClick={() => handleNavbarClick('jadwal')}
                            >
                                <a href="#jadwal">Jadwal</a>
                            </li>
                            <li
                                className={`ml-5 text-[24px] p-5 ${activePage === 'kelas' ? 'text-[#002157] bg-[#f0f2f5]' : 'text-[#002157]'
                                    } rounded-md cursor-pointer duration-500`}
                                onClick={() => handleNavbarClick('kelas')}
                            >
                                <a href="#kelas">Kelas saya</a>
                            </li>
                            <li
                                className={`ml-5 text-[24px] p-5 ${activePage === 'webinar' ? 'text-[#002157] bg-[#f0f2f5]' : 'text-[#002157]'
                                    } rounded-md cursor-pointer duration-500`}
                                onClick={() => handleNavbarClick('webinar')}
                            >
                                <a href="#webinar">Webinar</a>
                            </li>
                            <li
                                className={`ml-5 text-[24px] p-5 ${activePage === 'konsultasi' ? 'text-[#002157] bg-[#f0f2f5]' : 'text-[#002157]'
                                    } rounded-md cursor-pointer duration-500`}
                                onClick={() => handleNavbarClick('konsultasi')}
                            >
                                <a href="#konsultasi">Konsultasi</a>
                            </li>
                            <li
                                className={`ml-5 text-[24px] p-5 ${activePage === 'kelasyang' ? 'text-[#002157] bg-[#f0f2f5]' : 'text-[#002157]'
                                    } rounded-md cursor-pointer duration-500`}
                                onClick={() => handleNavbarClick('kelasyang')}
                            >
                                <a href="#kelasyang">Kelas yang pernah di ikuti</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center justify-center p-10'>
                        <div className='h-[560px] bg-white w-[80rem] mx-auto rounded-lg shadow-lg'>
                            <div className='mt-[250px] text-center'>
                                <div id="riwayat">
                                    {activePage === 'riwayat' &&
                                        <p>Belum Ada Riwayat Pembelian Kami punya banyak layanan yang sesuai dengan kebutuhanmu. Yuk, cari dan pilih sekarang! page 1
                                        </p>
                                    }
                                </div>
                                <div id="jadwal">
                                    {activePage === 'jadwal' &&
                                        <p>Belum Ada Riwayat Pembelian Kami punya banyak layanan yang sesuai dengan kebutuhanmu. Yuk, cari dan pilih sekarang! page 2
                                        </p>
                                    }
                                </div>
                                <div id="kelas">
                                    {activePage === 'kelas' &&
                                        <p>Belum Ada Riwayat Pembelian Kami punya banyak layanan yang sesuai dengan kebutuhanmu. Yuk, cari dan pilih sekarang! page 3
                                        </p>
                                    }
                                </div>
                                <div id="webinar">
                                    {activePage === 'webinar' &&
                                        <p>Belum Ada Riwayat Pembelian Kami punya banyak layanan yang sesuai dengan kebutuhanmu. Yuk, cari dan pilih sekarang! page 4
                                        </p>
                                    }
                                </div>
                                <div id="konsultasi">
                                    {activePage === 'konsultasi' &&
                                        <p>Belum Ada Riwayat Pembelian Kami punya banyak layanan yang sesuai dengan kebutuhanmu. Yuk, cari dan pilih sekarang! page 5
                                        </p>
                                    }
                                </div>
                                <div id="kelasyang">
                                    {activePage === 'kelasyang' &&
                                        <p>Belum Ada Riwayat Pembelian Kami punya banyak layanan yang sesuai dengan kebutuhanmu. Yuk, cari dan pilih sekarang! page 6
                                        </p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
