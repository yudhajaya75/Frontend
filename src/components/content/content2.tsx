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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
