import { useState } from "react";
import { NavLinkData } from "../../assets";
import { BsEnvelopeCheck } from "react-icons/bs";

const ProfileCard = ({ accountEmail }: { accountEmail: string }) => {
    const email = localStorage.getItem("email");
    const [profilePicture, setProfilePicture] = useState(NavLinkData[0].img);

    const handlePictureChange = (e: any) => {
        const selectedPicture = URL.createObjectURL(e.target.files[0]);
        setProfilePicture(selectedPicture);
    };

    return (
        <div className="mt-10 h-[551px] w-[80rem] bg-white shadow-lg mx-auto rounded-2xl">
            <img src={NavLinkData[1].img} alt="" />
            <div className="flex justify-between">
                <input
                    type="file"
                    accept="image/*"
                    id="profile-picture"
                    style={{ display: "none" }}
                    onChange={handlePictureChange}
                />
                <label htmlFor="profile-picture">
                    <img
                        src={profilePicture}
                        alt="Profile Picture"
                        className="w-32 h-32 rounded-full border-4 border-[#002157] -mt-24 ml-16 cursor-pointer"
                    />
                </label>
            </div>
            <div className="ml-5 mt-2 leading-10">
                <BsEnvelopeCheck size={20} className="absolute mt-3" />
                <p className="ml-7"><span className="text-black font-[600]">Email: </span><span className="text-[#6F6B7D]">{email}</span></p>
            </div>
            <div className="flex gap-4 ml-5">
                <p className="text-black font-[600] text-['Montserrat'] text-[18px]">Member</p>
                <p className="w-[50px] h-[28px] rounded bg-slate-500 px-1">Active</p>
                <p className="text-[#808080] text-[18px] font-[400]">24 June 2021</p>
            </div>
        </div>
    )
}

export default ProfileCard;