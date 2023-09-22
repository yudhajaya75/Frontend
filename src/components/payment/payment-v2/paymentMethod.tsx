import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useTransaction from "../../../hooks/useTransaction";
import UploadBukti from "./UploadBukti";

interface PaymentMethodSectionProps {
  index: number;
  activePage: number;
  handleNext: () => void;
  handlePrevious: () => void;
}

interface Payment {
  id: number;
  attributes: {
    PaymentsBank: string;
    provider: string;
    providerAccount: string;
    qrisScan: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

const PaymentMethod: React.FC<PaymentMethodSectionProps> = ({
  index,
  activePage,
  handlePrevious,
}) => {
  const location = useLocation();
  const { email, setEmail, isFetchingData, isLoggedIn, handleNext } =
    useTransaction();
  const id = location.state?.id;
  const title = location.state?.title;
  const price = location.state?.price;
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [contents, setContents] = useState<Payment[]>([]);
  const [providerAcc, setProviderAcc] = useState<string>("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/payments?populate=*`)
      .then((response) => {
        console.log("response", response);

        setContents(response.data.data);
      });
  }, []);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Cari gambar yang sesuai dengan pilihan
    const selectedContent = contents.find(
      (item) => item.attributes.provider === selectedValue
    );

    console.log("select content", selectedContent);

    if (selectedContent) {
      setImageURL(selectedContent.attributes.qrisScan.data.attributes.url);
      setProviderAcc(selectedContent.attributes.providerAccount);
    } else {
      setImageURL(null);
    }
  };

  console.log("test", contents);
  console.log("test, selectedOption", selectedOption);
  console.log("test, imageURL", imageURL);

  //!upload file

  return (
    <div>
      <div className="p-5">
        <div className="pb-5 -mt-8">
          <label htmlFor="" className="">
            Pilih Metode Pembayaran
          </label>
        </div>
        <div className="flex flex-col h-[400px]">
          <select
            name="transfer"
            id="transfer"
            value={selectedOption}
            onChange={handleOptionChange}
            className="p-2 2xl:w-[400px] sm-440:text-[10px] 2xl:text-[14px] 
            sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]"
          >
            <option value="" disabled>
              Select an option
            </option>
            {contents.map((item: any) => (
              <option key={item.id}>{item.attributes.provider}</option>
            ))}
          </select>
          {imageURL && (
            <div className="w-[200px] h-[200px]">
              <img
                src={`${process.env.REACT_APP_UPLOAD_URL}${imageURL}`}
                alt={selectedOption}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {providerAcc && (
            <div className="w-[200px] h-[200px]">
              <p className="text-[20px] font-bold">No. Rekening</p>
              <p className="text-[20px] font-bold">{providerAcc}</p>
            </div>
          )}
        </div>
      </div>

      <UploadBukti
        strapiRef={"api::transaction.transaction"}
        field={"paymentReceiptImage"}
        transectionId={"6"}
      />

      <div className="float-right">
        <div className="border-solid border-2 border-[#79ABFF] mt-[-400px] w-[460px] h-[354px]">
          <div className="mx-5 my-5">
            <p className="text-[18px] text-[#79ABFF] font-bold">
              Paket {title ? title : "bukan id nya"}
            </p>
            <br />
            <p className="text-[16px] text-[#002157]">
              SubTotal{" "}
              <p className="float-right">
                Rp.{price ? price : "Harga tidak tersedia"}
              </p>
            </p>
            <div className="border-b-2 border-slate-950"></div>
            <div className="my-2 text-[#002157]">
              <p className="text-[16px] font-bold">
                Total{" "}
                <p className="float-right">
                  Rp.{price ? price : "Harga tidak tersedia"}
                </p>
              </p>
              <br />
              {/* <p className="text-[16px]">
                Gunakan kode promo untuk dapatkan potongan harga{" "}
              </p> */}
            </div>
            {/* <input type="text" placeholder='Kode Promo'
                            className='w-[420px] p-3 no-underline border border-[#8D8D8D]' /> */}
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <button
          onClick={handleNext}
          className="bg-[#002157] ml-[743px] left-20 relative bottom-10 text-white px-4 py-1 rounded-lg"
        >
          Done
        </button>
        <button
          onClick={handlePrevious}
          className="border-2 border-[#002157] relative bottom-[80px] left-[30px] text-[#002157] px-5 py-1 rounded-lg"
        >
          &#129056; Previous
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
