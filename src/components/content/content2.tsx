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

  console.log("filter", filterData);
  console.log("transactionId", transactionId);

  return (
    <>
      {filterData.map((item, index) => (
        <>
          <div>
            <div className="bg-white w-[80rem] mx-auto mt-5 rounded-lg shadow-lg py-5">
              <ul className="flex">
                <li
                  className={`ml-5 text-[24px] p-5 ${
                    activePage === "riwayat"
                      ? "text-[#002157] bg-[#f0f2f5]"
                      : "text-[#002157]"
                  } rounded-md cursor-pointer duration-500`}
                  onClick={() => handleNavbarClick("riwayat")}
                >
                  <Button onClick={() => handleOpenModal(item.id.toFixed())}>
                    Riwayat Pembelian{" "}
                    {item.attributes.users.data.attributes.email}
                  </Button>
                </li>
              </ul>
            </div>
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
