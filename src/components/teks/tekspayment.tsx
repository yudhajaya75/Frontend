import { Link } from 'react-router-dom';

const Teks = (props: any) => {
    return (
        <>
            <div className='text-[15px] relative left-[130px] top-[50px]'>
                <p className='text-[#6F6F6F]'>Pelatihan<a className='text-[#002157] font-bold' href="#"> &gt; {props.title}</a></p>
                <p className='text-[#6F6F6F] relative top-5 font-bold'>Pendaftaran Pelatihan & Webinar</p>
                <div className='relative top-[30px] bg-[#1f3c6c] max-w-[1270px] h-[40px] p-2 rounded-sm text-white '>
                    <p className='relative left-4'>Sudah punya akun ?
                        <Link to="/login" className='underline underline-offset-4 hover:text-[#9fabbf]'> Klik disini untuk masuk</Link>
                    </p>
                </div>
            </div >

        </>
    )
}

export default Teks
