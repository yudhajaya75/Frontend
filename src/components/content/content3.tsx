import { NavLinkData } from "../../assets";
import { AiFillEdit } from "react-icons/ai";
import { BsEnvelopeCheck } from "react-icons/bs";

const Jumbotron = () => {
    return (
        <div className="mt-10 h-[551px] w-[80rem] bg-white shadow-lg mx-auto rounded-2xl">
            <img src={NavLinkData[1].img} alt="" />
            <div className="flex justify-between">
                <img src={NavLinkData[0].img} alt="" className="-mt-24 ml-16" />
                <AiFillEdit size={30} className="mt-10 mr-10 cursor-pointer" />
            </div>
            <div className="ml-5 mt-2 leading-10">
                <h1 className="text-[#002157] font-[600] text-[24px] text-['Inter']">Afif Subarkah</h1>
                <BsEnvelopeCheck size={20} className="absolute mt-3" />
                <p className="ml-7"><span className="text-black font-[600]">Email: </span><span className="text-[#6F6B7D]">afifsubarkah@example.com</span></p>
            </div>
            <div className="flex gap-4 ml-5">
                <p className="text-black font-[600] text-['Montserrat'] text-[18px]">Member</p>
                <p className="w-[50px] h-[28px] rounded bg-slate-500 px-1">Active</p>
                <p className="text-[#808080] text-[18px] font-[400]">24 June 2021</p>
            </div>
        </div>
    )
}

export default Jumbotron;