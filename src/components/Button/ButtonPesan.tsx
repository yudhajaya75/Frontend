import { Link } from 'react-router-dom'

export const ButtonPesan = () => {
  return (
    <div className='bg-[#002157] w-[250px] py-3 rounded-md mx-auto'>
        <div className='text-center text-white md:text-[24px]'>
            <Link to="">
                <p>Pesan Sekarang</p>
            </Link>
        </div>
    </div>
  )
}
