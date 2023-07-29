import React from 'react';
import cardsData from './cardsData';
import { Link } from 'react-router-dom';
function Purchase() {

    return (
        <>
            <div className='flex gap-10 mt-[300px]'>
                {cardsData.map((card, index) => (
                    <div
                        key={index}
                        className={`w-[430px] h-[740px] relative bottom-[200px] left-[100px] rounded-md mb-[100px]`}
                        style={{ boxShadow: '0px 0px 10px -5px rgba(0, 0, 0, 0.75)', backgroundColor: card.highlight ? '#1D3A69' : '' }}
                    >
                        <div className='p-10'>
                            {card.highlight && (
                                <p className={`text-[15px] font-bold bg-[#F3440D] text-white absolute right-10 top-12 rounded-lg text-WHITE px-2`}>
                                    POPULAR
                                </p>
                            )}
                            <p className={`text-[24px] font-bold ${card.highlight ? 'text-white' : 'text-[#103D72]'}`}>{card.title}</p>
                            <p className={`text-[#BFBFBF] pt-1 ${card.highlight ? 'text-white' : ''}`}>{card.body}</p>
                            <p className={`text-[16px] font-bold pt-2 ${card.highlight ? 'text-white' : 'text-[#103D72]'}`}>Mulai Dari</p>
                            <p className={`text-[48px] ${card.highlight ? 'text-white' : 'text-[#103D72]'}`}>{card.price}</p>
                            <div className='pt-5 font-bold'>
                                <Link to="/payment">
                                    <button className={`bg-[#F3440D] rounded-lg text-white py-2 px-[110px] hover:bg-[#ef592b] ${card.highlight ? 'text-white' : ''}`}>
                                        Daftar sekarang
                                    </button>
                                </Link>
                            </div>
                            <p className={`text-[20px] pt-7 ${card.highlight ? 'text-white' : ''}`}>Fitur :</p>
                            {card.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className='pt-7'>
                                    <img src={card.image} className='relative top-0 left-2 w-[20px]' alt='' />
                                    <p className={`text-[20px] relative bottom-7 left-10 ${card.highlight ? 'text-white' : ''}`}>{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Purchase;
