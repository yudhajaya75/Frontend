import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Transaction, style } from "./style";
import { HTTPAruna } from "../../../services/handlerApi";
import UploadBukti from "../../payment/payment-v2/UploadBukti";

type Props = {
  open: boolean;
  onClose: () => void;
  transactionId: string | null;
};

const ModalSection: React.FC<Props> = ({ open, onClose, transactionId }) => {
  const [data, setData] = useState<Transaction>();
  const getTransaction = async () => {
    try {
      const res = await HTTPAruna.get(
        `/api/transactions/${transactionId}?populate[0]=orders.product&populate[1]=payment.payment&populate[2]=paymentReceiptImage`
      );
      setData(res.data.data);

      if (res.status === 404) {
        return null;
      }
    } catch (error) {}
  };

  useEffect(() => {
    getTransaction();
  }, [transactionId]);

  const handleUploadComplete = () => {
    // Tutup modal setelah unggahan selesai
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <div className="">
            <Typography>ID Transaksi: {data?.id}</Typography>
            <Typography className="py-3">
              Product:{" "}
              {data?.attributes.orders.map(
                (item) => item.product.data.attributes.title
              )}
            </Typography>
            <Typography>
              Jumlah: {data?.attributes.payment.totalPrice}
            </Typography>
            <div className="my-6">
              <UploadBukti
                complete={handleUploadComplete}
                strapiRef={"api::transaction.transaction"}
                field={"paymentReceiptImage"}
                transectionId={transactionId || ""}
              />
            </div>
          </div>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
      </Box>
    </Modal>
  );
};

export default ModalSection;
