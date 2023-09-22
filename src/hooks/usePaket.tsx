import { useEffect, useState } from "react";
import { Paket } from "../@types/Paket";

function usePaket() {
  const [paket, setPaket] = useState<Paket[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/product-variants/?populate=*`, {
      method: "GET",
      headers: {
        Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPaket(data.data);
        setTimeout(() => setLoading(false), 4000);
      });
  }, []);

  return {
    paket,
    loading,
  };
}

export default usePaket;
