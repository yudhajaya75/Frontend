import axios from "axios";
import React, { useState } from "react";
import { HTTPAruna } from "../../../services/handlerApi";

const UploadBukti = ({
  strapiRef,
  field,
  transectionId,
}: {
  strapiRef: string;
  field: string;
  transectionId: string;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const formData = new FormData();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const postPayment = async () => {
    try {
      if (!file) return setError("File tidak boleh kosong");
      if (!transectionId)
        return console.log("transectionId tidak boleh kosong");

      if (file && transectionId) {
        formData.append("ref", strapiRef);
        formData.append("refId", transectionId);
        formData.append("field", field);
        formData.append("files", file);
        setError("");

        const response = await HTTPAruna.post(`/api/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        //   `${process.env.REACT_APP_API_URL}/transactions?populate=*`,
        //   {
        //     paymentReceiptImage: response,
        //   },
        //   {
        //     headers: {
        //       Authorization: `Bearer ${process.env.REACT_APP_ADMIN_TOKEN}`,
        //     },
        //   }
        // );

        // console.log("post", post);
        setFile(null);
        console.log("File berhasil diunggah.");
        console.log("Response:", response.data);
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengunggah file:", error);
    }
  };

  return (
    <div className="">
      <input type="file" name="file" id="file" onChange={handleFileChange} />
      <button onClick={postPayment}>Kirim Bukti Pembayaran</button>
      <button onClick={() => setFile(null)} className="ml-2">
        clear
      </button>
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
};

export default UploadBukti;
