import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { style } from "./style";
import UploadBukti from "../../payment/payment-v2/UploadBukti";
import { ITransaction } from "../../../@types/Transaction";

type Props = {
  open: boolean;
  onClose: () => void;
  transactionId: string;
  detail?: ITransaction;
};

const ModalSection: React.FC<Props> = ({
  open,
  onClose,
  transactionId,
  detail,
}) => {
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
            <Typography>ID Transaksi: {detail?.id}</Typography>
            <Typography className="py-3">
              Product:{" "}
              {detail?.attributes.orders.map(
                (item) => item.product.data.attributes.title
              )}
            </Typography>
            <Typography>
              Jumlah: {detail?.attributes.payment.totalPrice}
            </Typography>
            <div className="my-6">
              <UploadBukti
                complete={handleUploadComplete}
                strapiRef={"api::transaction.transaction"}
                field={"paymentReceiptImage"}
                transectionId={transactionId}
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
