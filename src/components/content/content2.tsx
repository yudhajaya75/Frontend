import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function profile() {
    return (
        <>
            <div>
                <div>
                    <div className="bg-white w-[80rem] mx-auto mt-5 rounded-lg shadow-lg py-5">

                        <ul className="flex">
                            <li className="ml-5 text-[24px] p-5 text-[#002157] bg-[#f0f2f5] rounded-md cursor-pointer duration-500">
                                <NavLink to='/riwayat'>Riwayat Pembelian</NavLink>
                            </li>
                            <li className="ml-5 text-[24px] p-5 text-[#002157] rounded-md cursor-pointer duration-500">
                                <NavLink to='/jadwal'>Jadwal</NavLink>
                            </li>
                            <li className="ml-5 text-[24px] p-5 text-[#002157] rounded-md cursor-pointer duration-500">
                                <NavLink to='/kelas'>Kelas</NavLink>
                            </li>
                            <li className="ml-5 text-[24px] p-5 text-[#002157] rounded-md cursor-pointer duration-500">
                                <NavLink to='/webinar'>Webinar</NavLink>
                            </li>
                            <li className="ml-5 text-[24px] p-5 text-[#002157] rounded-md cursor-pointer duration-500">
                                <NavLink to='/konsultasi'>Konsultasi</NavLink>
                            </li>
                            <li className="ml-5 text-[24px] p-5 text-[#002157] rounded-md cursor-pointer duration-500">
                                <NavLink to='/kelasikut'>Kelas yang pernah di ikuti</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 h-[551px] w-[80rem] bg-white shadow-lg mx-auto rounded-2xl  text-[#464646] text-[18px] font-[600] text-['Inter']">
                        <h1 className="absolute mt-[17rem] ml-[35rem] font-[600] text-[#002157] mb-6">Riwayat Pembelian</h1>
                        <p className="absolute mt-[20rem] ml-32">Belum Ada Riwayat Pembelian Kami punya banyak layanan yang sesuai dengan kebutuhanmu. Yuk, cari dan pilih sekarang!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default profile