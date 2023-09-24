import { useEffect, useState } from "react";

import { HTTPAruna } from "../services/handlerApi";
import { PelatihanResponse } from "../@types/Pelatihan";

function useCardPelatihan(
  category?: "Pelatihan" | "Layanan" | "Konsultasi" | "Webinar"
) {
  const [content, setContent] = useState<PelatihanResponse | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    HTTPAruna.get(
      `/api/products?populate[0]=image&populate[1]=product_variants&populate[2]=webinar&filters[category][$eq]=${
        category ? category : "Pelatihan"
      }`
    ).then((response) => {
      const data: PelatihanResponse = response.data;
      if (data.data.length < 0) {
        setError("No Content");
      }
      setContent(data);
      setLoading(false);
    });
  }, [category]);

  return {
    content,
    loading,
    error,
  };
}

export default useCardPelatihan;
