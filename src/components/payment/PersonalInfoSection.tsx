import React, { SyntheticEvent, useState } from "react";
import SelectDay from "./selectDay";
import SelectMonth from "./selectMonth";
import SelectYear from "./selectYear";
import axios from "axios";
import Swal from "sweetalert2";

const PersonalInfoSection: React.FC = ({}) => {
  const [name, setName] = useState(localStorage.getItem("user") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  const handleSubmit = async (e: SyntheticEvent) => {
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
          },
        }
      );

      if (res.status === 200) {
        localStorage.setItem("user", name);
        localStorage.setItem("email", email);

        Swal.fire(
          "Good job!",
          "Data berhasil diubah, silahkan lanjutkan pembayaran",
          "success"
        );
        // handleNext();
        return res;
      } else {
        Swal.fire("Oops...", "Terjadi kesalahan", "error");
      }
    } catch (error) {
      Swal.fire("Oops...", "Terjadi kesalahan", "error");
    }
  };

  return (
    <div>
      <div className="min-h-[600px] ">
        <div className="flex justify-center sm-440:pt-3">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full font-medium"
          >
            <div className=" 2xl:ml-[0px]">
              <label
                htmlFor="namalengkap"
                className="2xl:text-[17px] text-[#4B465C] sm-440:text-[11px]"
              >
                Nama Lengkap
              </label>
              <div className="2xl:pt-5 sm-440:pt-5 flex gap-10">
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama Lengkap"
                  className="p-3 text-[14px] 
                            w-full outline-none no-underline rounded-md border border-[#8D8D8D]"
                />
              </div>
            </div>
            <div className=" 2xl:ml-[0px]">
              <label
                htmlFor="notelp"
                className="2xl:text-[17px] text-[#4B465C] sm-440:text-[11px]"
              >
                No Telepon / Whatsapp
              </label>
              <div className="2xl:pt-5 sm-440:pt-5 flex gap-10">
                <input
                  required
                  type="text"
                  placeholder="+62"
                  className="p-3 text-[14px] 
                w-full outline-none no-underline rounded-md border border-[#8D8D8D]"
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
                  className="p-3 text-[14px] 
                            w-full outline-none no-underline rounded-md border border-[#8D8D8D]"
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
              <div className="">
                <SelectDay />
                <SelectMonth />
                <SelectYear />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="email"
                className="2xl:text-[17px] text-[#4B465C] sm-440:text-[11px]"
              >
                Email
              </label>
              <div className="flex gap-10">
                <input
                  required
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john.doe@gmail.com"
                  className="p-3 text-[14px] 
                            w-full outline-none no-underline rounded-md border border-[#8D8D8D]"
                />
              </div>
              <button
                type="submit"
                className="bg-[#002157] my-5 text-white px-4 py-1 rounded-lg"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
