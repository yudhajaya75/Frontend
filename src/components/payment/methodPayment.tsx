import React from 'react'

function methodPayment() {
    return (
        <>
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
        </>
    )
}

export default methodPayment