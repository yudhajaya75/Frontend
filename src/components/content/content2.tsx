import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { HTTPAruna } from "../../services/handlerApi";
import { Transaction, style } from "./profile/style";
import ModalSection from "./profile/modal";

const Profile: React.FC = () => {
  const [activePage, setActivePage] = useState("");
  const [data, setData] = useState<Transaction[]>([]);
  const [open, setOpen] = React.useState(false);
  const [transactionId, setTransactionId] = useState<string | null>(null);

  const handleNavbarClick = (page: string) => {
    setActivePage(page);
  };

  const getTransaction = async () => {
    try {
      const res = await HTTPAruna.get(`/api/transactions?populate=*`);
      setData(res.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    getTransaction();
  }, []);

  const filterData = data.filter(
    (item) =>
      item.attributes.users.data.attributes.email ===
      localStorage.getItem("email")
  );

  const handleOpenModal = (transactionId: string) => {
    setTransactionId(transactionId);
    console.log("transactionId", transactionId);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setTransactionId(null);
    setOpen(false);
  };

  return (
    <>
      {filterData.map((item, index) => (
        <>
          <div className="bg-white mx-10 md:mx-20 mt-5 rounded-lg shadow-lg py-5">
            <ul className="flex">
              <li
                className={`mx-5 text-[24px] p-2 ${
                  activePage === "riwayat"
                    ? "text-[#002157] bg-[#f0f2f5]"
                    : "text-[#002157]"
                } rounded-md cursor-pointer duration-500`}
                onClick={() => handleNavbarClick("riwayat")}
              >
                <Button onClick={() => handleOpenModal(item.id.toFixed())}>
                  Riwayat Pembelian {index + 1}
                </Button>
              </li>
            </ul>
          </div>
        </>
      ))}
      <ModalSection
        open={open}
        onClose={handleCloseModal}
        transactionId={transactionId}
      />
    </>
  );
};

export default Profile;
