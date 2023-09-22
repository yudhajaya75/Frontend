import React, { useState } from "react";
import SelectDay from "./selectDay";
import SelectMonth from "./selectMonth";
import SelectYear from "./selectYear";
import axios from "axios";

// https://satir.rohisyam.online/api/users/1
//
interface PersonalInfoSectionProps {
  index: number;
  activePage: number;
  handleNext: () => void;
  handlePrevious: () => void;
}

const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({
  index,
  activePage,
  handleNext,
  handlePrevious,
}) => {
  const [name, setName] = useState(localStorage.getItem("user") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  if (index !== 1) return null;

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/users/${localStorage.getItem("id")}`,
        {
          username: name,
          email: email,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            // "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("user", name);
        localStorage.setItem("email", email);
        alert("Data berhasil diubah");
        handleNext();
        return res;
      } else {
        alert("Data gagal diubah");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="min-h-[600px]">
        <div className="flex justify-center sm-440:pt-3">
          <form
            // onSubmit={handleSubmit}
            className="2xl:p-10 sm-440:p-10 -mt-8 relative left-[30px] 2xl:flex sm-440:flex 2xl:flex-wrap sm-440:flex-wrap gap-10 2xl:w-[900px] sm-440:w-[100px] font-medium"
          >
            <div className="sm-440:-ml-[70px] sm-440:-mt-[30px] 2xl:ml-[0px]">
              <label
                htmlFor="namalengkap"
                className="2xl:text-[17px] text-[#4B465C] sm-440:text-[11px]"
              >
                Nama Lengkap
              </label>
              <div className="2xl:pt-5 sm-440:pt-5 flex gap-10">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama Lengkap"
                  className="p-2 2xl:w-[390px] sm-440:text-[10px] 2xl:text-[14px] 
                            sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]"
                />
              </div>
            </div>
            <div className="sm-440:-ml-[70px] sm-440:-mt-[30px] 2xl:ml-[0px]">
              <label
                htmlFor="notelp"
                className="2xl:text-[17px] text-[#4B465C] sm-440:text-[11px]"
              >
                No Telepon / Whatsapp
              </label>
              <div className="2xl:pt-5 sm-440:pt-5 flex gap-10">
                <input
                  type="text"
                  placeholder="+62"
                  className="p-2 2xl:w-[390px] sm-440:text-[10px] 2xl:text-[14px] 
                sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]"
                />
              </div>
            </div>

            <div className="">
              <div className="pb-5">
                <label htmlFor="" className="">
                  Jenis Kelamin
                </label>
              </div>
              <div>
                <select
                  name="gender"
                  id="gender"
                  className="p-2 2xl:w-[390px] sm-440:text-[10px] 2xl:text-[14px] 
                            sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]"
                >
                  <option value="Laki-Laki">Laki-Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>
            <div className="">
              <div className="pb-5">
                <label htmlFor="" className="">
                  Tanggal Lahir
                </label>
              </div>
              <div className="relative z-40">
                <SelectDay />
                <SelectMonth />
                <SelectYear />
              </div>
            </div>
            <div className="sm-440:-ml-[70px] sm-440:-mt-[30px] 2xl:ml-[0px] pt-7">
              <label
                htmlFor="email"
                className="2xl:text-[17px] text-[#4B465C] sm-440:text-[11px]"
              >
                Email
              </label>
              <div className="2xl:pt-5 sm-440:pt-5 flex gap-10">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john.doe@gmail.com"
                  className="p-2 2xl:w-[390px] sm-440:text-[10px] 2xl:text-[14px] 
                            sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]"
                />
              </div>
            </div>
            <div className="sm-440:-ml-[70px] sm-440:-mt-[30px] 2xl:ml-[0px] pt-7">
              <label
                htmlFor="Password"
                className="2xl:text-[17px] text-[#4B465C] sm-440:text-[11px]"
              >
                Password
              </label>
              <div className="2xl:pt-5 sm-440:pt-5 flex gap-10">
                <input
                  type="password"
                  placeholder="546 784 5489"
                  className="p-2 2xl:w-[390px] sm-440:text-[10px] 2xl:text-[14px] 
                            sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#002157] text-white px-4 py-1 rounded-lg"
            >
              submit
            </button>
          </form>
        </div>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-[#002157] ml-[743px] left-20 relative bottom-10 text-white px-4 py-1 rounded-lg"
      >
        Next &#129058;
      </button>
      <button
        onClick={handlePrevious}
        className="border-2 border-[#002157] relative bottom-[80px] left-[90px] text-[#002157] px-5 py-1 rounded-lg"
      >
        &#129056; Previous
      </button>
    </div>
  );
};

export default PersonalInfoSection;
