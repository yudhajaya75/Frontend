import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import '../card/cardabout.css';


const Cards = () => {

    const cards = [
        {
            title: 'Webinar',
            image: './images/webminar.webp',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.asdasdas',
            link: '/webinar'
        },
        {
            title: 'Layanan konseling individu pasangan & keluarga',
            image: './images/layanan.webp',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.asdasdas',
            link: '/layanan'
        },
        {
            title: 'Pelatihan',
            image: './images/pelatihan.webp',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.asdasdas',
            link: '/pelatihan'
        },
        {
            title: 'Konsultasi',
            image: './images/konsultasi.webp',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.asdasdas',
            link: '/konsultasi'
        }
    ];
    return (
        <div className='cardabt'>
            {
                cards.map((card, index) => (
                    <div className='cardab' key={index}>
                        <div className='card-about'>
                            <div className='cardbd'>
                                <img className='card-img' src={card.image} alt='logo' />
                                <div className='card-body'>
                                    <h3 className='card-title'>{card.title}</h3>
                                    <p className='card-text '>{card.text}</p>
                                    <a href={card.link}>
                                        <button className='card-cta'>Lihat Selengkapnya</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};


export default Cards;