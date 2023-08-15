import React from 'react';
import './sosmed.css';

interface SocialMediaProfileProps {
    name: string;
    subtitle: string;
    bio: string;
    image: string;
    link1: string;
    link2: string;
}

const SocialMediaProfile: React.FC<SocialMediaProfileProps> = ({
    name,
    subtitle,
    bio,
    link1,
    link2,
    image,
}) => {
    return (
        <div className="flex justify-center items-center">
            <div className="bg-white my-12 pb-6 m-10 w-full overflow-hidden md:max-w-sm rounded-lg drop-shadow-xl">
                <div className="relative h-[150px]"></div>
                <div className="relative mx-auto h-24 w-24 -my-20 bottom-10">
                    <div className="object-cover w-full h-full">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="mt-20 p-5">
                    <h1 className="text-lg font-semibold">{name}</h1>
                    <p className="text-sm text-gray-600 text-left my-4">{subtitle}</p>
                    <p className="text-sm text-gray-600 text-justify">{bio}</p>
                </div>
                <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t">
                    <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                        <a href={link1}>Sosial Media</a>
                    </div>
                    <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                        <a href={link2}>Sosial Media</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaProfile;
