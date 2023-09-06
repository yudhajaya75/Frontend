import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../card/card.css'

const CardComponent = (props: any) => {
    return (
        <div className="w-[400px] sm:w-[500px] md:w-[600px]  text-[#002157] shadow-md rounded-lg p-[16px]" key={props.id}>
            <div className="relative">
                <img src={props.image} alt="/" className='w-full h-[272px] object-cover aspect-auto' />
                <div className="bg-slate-50 w-[180px] py-2 rounded-md text-center absolute right-4 bottom-8 font-semibold ">Rp {props.price}</div>
            </div>
            <div className='p-2 mb-3 w-full'>
                <h3 className='font-semibold text-xl mb-2'>{props.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: props.body }} className='text-[#5B5B5B] line-clamp-3' />
            </div>
            <a href={`/${props.link}/${props.id}`}>
                <div className="bg-[#002157] text-white py-3 text-center w-[80%] mx-auto rounded-lg font-semibold z-50">
                    <button className="button">Pesan Sekarang</button>
                </div>
            </a>
        </div>
    );
};


export default CardComponent;