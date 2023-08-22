import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';

interface PaymentMethodSectionProps {
    index: number;
    activePage: number;
    handleNext: () => void;
    handlePrevious: () => void;
}

const PaymentMethodSection: React.FC<PaymentMethodSectionProps> = ({ index, activePage, handleNext, handlePrevious }) => {
    const [content, setContent] = useState<any>();
    const location = useLocation();
    const id = location.state?.id;
    const title = location.state?.title;
    const price = location.state?.price;

    useEffect(() => {
        if (index === 0) {
            axios.get(`${process.env.REACT_APP_API_URL}/product-variants/${id}?populate=*`)
                .then((response) => {
                    setContent(response.data.data);
                });
        }
    }, [index, id]);
    console.log('test', content);

    if (index !== 2) return null;

    return (
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
            <div className='float-right'>
                <div className='border-solid border-2 border-[#79ABFF] mt-[-400px] w-[460px] h-[354px]'>
                    <div className='mx-5 my-5'>
                        <p className='text-[18px] text-[#79ABFF] font-bold'>Paket {title ? title : 'bukan id nya'}</p>
                        <br />
                        <p className='text-[16px] text-[#002157]'>SubTotal <p className='float-right'>Rp.{price ? price : 'Harga tidak tersedia'}</p></p>
                        <div className='border-b-2 border-slate-950'></div>
                        <div className='my-2 text-[#002157]'>
                            <p className='text-[16px] font-bold'>Total <p className='float-right'>Rp.{price ? price : 'Harga tidak tersedia'}</p></p>
                            <br />
                            <p className='text-[16px]'>Gunakan kode promo untuk dapatkan potongan harga </p>
                        </div>
                        <input type="text" placeholder='Kode Promo'
                            className='w-[420px] p-3 no-underline border border-[#8D8D8D]' />
                    </div>
                </div>
            </div>
            <div className='mt-[100px]'>
                <button onClick={handleNext} className='bg-[#002157] ml-[743px] left-20 relative bottom-10 text-white px-4 py-1 rounded-lg'>Next &#129058;</button>
                <button onClick={handlePrevious} className='border-2 border-[#002157] relative bottom-[80px] left-[30px] text-[#002157] px-5 py-1 rounded-lg'>&#129056; Previous</button>
            </div>
        </div>
    )
};

export default PaymentMethodSection;
