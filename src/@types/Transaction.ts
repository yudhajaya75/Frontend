import { MediaType, MetaData } from "./StrapiGlobal";

interface IOrder {
  id: number;
  product: {
    data: {
      attributes: {
        title: string;
      };
    };
  };
  amount: string;
}

interface ITransaction {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    orders: IOrder[];
    users: {
      data: {
        id: number;
      };
    };
    payment: {
      id: number;
      statusPayment: "paid" | "unpaid";
      totalPrice: number;
    };
    paymentReceiptImage: MediaType;
  };
}

interface TransactionResponse extends MetaData {
  data: ITransaction[];
}

export { TransactionResponse, ITransaction, IOrder };
