import { useState } from "react";
import { ITransaction } from "../../@types/Transaction";
import Image from "../global/Image";
import ModalSection from "./profile/modal";
import Button from "../button/Button";
import { formatRupiah } from "../../helper/currencyFormatter";

type Props = {
  detail: ITransaction;
};

const HistoryCard = ({ detail }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <article className="py-5 border-b grid gap-2">
      <h3>Transaction ID: {detail.id}</h3>
      {detail.attributes.paymentReceiptImage.data && (
        <div>
          <p className="font-bold">Bukti Pembayaran</p>
          <Image
            src={detail.attributes.paymentReceiptImage.data.attributes.url}
          />
        </div>
      )}
      <p>
        Status Pembayaran:{" "}
        <span
          className={`p-1 inline-block rounded-xl ${
            detail.attributes.payment.statusPayment === "paid"
              ? "bg-green-500"
              : "bg-yellow-500"
          }`}
        >
          {detail.attributes.payment.statusPayment}
        </span>
      </p>
      <p>
        Dibuat pada tanggal:{" "}
        {new Date(detail.attributes.createdAt).toDateString()}
      </p>
      <p>Total Pesanan: {formatRupiah(detail.attributes.payment.totalPrice)}</p>
      <Button
        action={() => {
          setOpen(true);
        }}
      >
        Upload Bukti
      </Button>
      <ModalSection
        detail={detail}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        transactionId={String(detail.id)}
      />
    </article>
  );
};

export default HistoryCard;
