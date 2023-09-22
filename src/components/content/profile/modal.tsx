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
  // const [selectedTransaction, setSelectedTransaction] = useState<Transaction>()
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const [data, setData] = useState<Transaction>();
  const getTransaction = async () => {
    try {
      const res = await HTTPAruna.get(
        `/api/transactions/${transactionId}?populate=*`
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

  console.log("data detail", data);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <div>
            <p>ID Transaksi: {data?.id}</p>
            <p>
              Product:{" "}
              {data?.attributes.orders.map((item, index) => item.amount)}
            </p>
            <p>Jumlah: {data?.attributes.payment.totalPrice}</p>
            <div className="my-6">
              <UploadBukti
                strapiRef={""}
                field={""}
                transectionId={transactionId || ""}
              />
            </div>
          </div>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalSection;
